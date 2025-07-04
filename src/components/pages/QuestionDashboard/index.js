import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import AddQuestion from '../../forms/AddQuestion';
import QuestionManagement from '../QuestionManagement';
import SubjectCard from './SubjectCard';
import { faBook, faFlask, faCalculator, faGlobe } from '@fortawesome/free-solid-svg-icons';

const subjects = [
  { id: 1, name: 'English', icon: faBook },
  { id: 2, name: 'Science', icon: faFlask },
  { id: 3, name: 'Maths', icon: faCalculator },
  { id: 4, name: 'Social Science', icon: faGlobe },
];

function QuestionDashboard() {
  const [testList, setTestList] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    const storedTests = localStorage.getItem("testList");
    if (storedTests) {
      setTestList(JSON.parse(storedTests));
    }
  }, []);

  const getQuestionDetails = () => {
    if (selectedSubject) {
      fetchQuestions(selectedSubject);
    }
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject.name);
    fetchQuestions(subject.name);
  };

  const fetchQuestions = (subjectName) => {
    const storedQuestions = localStorage.getItem("questionList");
    if (storedQuestions) {
      const questions = JSON.parse(storedQuestions);
      setFilteredQuestions(questions.filter(q => q.test === subjectName));
    } else {
      setFilteredQuestions([]);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {subjects.map((subject) => (
          <Grid item xs={6} sm={3} key={subject.id}>
            <SubjectCard name={subject.name} icon={subject.icon} onClick={() => handleSubjectClick(subject)} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          <AddQuestion getQuestionDetails={getQuestionDetails} subjects={subjects} />
        </Grid>
        <Grid item xs={12} md={6}>
          <QuestionManagement questionList={filteredQuestions} selectedSubject={selectedSubject} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default QuestionDashboard;
