import React, { useEffect, useState } from 'react';
import StepperComponent from '../../../molecules/StepperComponent';

const ViewTest = ({ subject }) => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questionList'));
    if (storedQuestions) {
      const filteredQuestions = storedQuestions.filter(question => question.test === subject);
      setQuestions(filteredQuestions);
    }
  }, [subject]);

  useEffect(() => {
    const storedResponses = JSON.parse(localStorage.getItem('responses')) || {};
    setResponses(storedResponses);
  }, []);

  const handleFormSubmit = (subjectName, question, selectedOption) => {
    setResponses(prevResponses => {
      const updatedResponses = {
        ...prevResponses,
        [subjectName]: [
          ...(prevResponses[subjectName] || []),
          { question: question.question, option: selectedOption }
        ]
      };
      localStorage.setItem('responses', JSON.stringify(updatedResponses));
      return updatedResponses;
    });
  };

  // Clear responses for the previous subject when subject changes
  useEffect(() => {
    if (subject) {
      setResponses(prevResponses => ({
        ...prevResponses,
        [subject]: []  // Initialize responses for the new subject
      }));
    }
  }, [subject]);

  return (
    <div>
      {questions.length > 0 ? (
        <StepperComponent
          questions={questions}
          subject={subject}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <p>No tests available for {subject}</p>
      )}
    </div>
  );
};

export default ViewTest;
