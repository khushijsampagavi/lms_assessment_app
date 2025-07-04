import { useEffect, useState } from 'react';

const QuestionStorage = () => {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const questionArray = [
      {
        id: 1,
        test: "English",
        marks: "2",
        question: "What is the opposite of ACCURATE?",
        options: ["Inaccurate", "Unaccurate", "Imaccurate", "None of the above"],
        corrAns: "Inaccurate"
      },
      {
        id: 2,
        test: "English",
        marks: "2",
        question: "What is the antonym for Compress?",
        options: ["Amplify", "Shrink", "Expand", "None of the above"],
        corrAns: "Shrink"
      },
      {
        id: 3,
        test: "English",
        marks: "2",
        question: "Add proper question tag: Snow is white.",
        options: ["doesn't it?", "didn't it?", "isn't it?", "None of the above"],
        corrAns: "isn't it?"
      },
      {
        id: 4,
        test: "Social Science",
        marks: "2",
        question: "When did first world war took place?",
        options: ["1914", "1915", "1916", "1917"],
        corrAns: "1914"
      },
      {
        id: 5,
        test: "Social Science",
        marks: "2",
        question: "When do we celebrate INDEPENDENCE DAY?",
        options: ["Aug 15", "Jan 26", "Aug 16", "Aug 19"],
        corrAns: "Aug 15"
      },
      {
        id: 6,
        test: "Social Science",
        marks: "2",
        question: "Who has control over RBI?",
        options: ["Government of India", "Government of Karnataka", "Prime Minister", "President"],
        corrAns: "Government of India"
      },
      {
        id: 7,
        test: "Science",
        marks: "2",
        question: "What is the molecular formula of Water?",
        options: ["H2O", "HO2", "2HO", "O2H"],
        corrAns: "H2O"
      },
      {
        id: 8,
        test: "Science",
        marks: "2",
        question: "Which is power house of the cell?",
        options: ["Mitochondria", "Nucleus", "Cytoplasm", "Membrane"],
        corrAns: "Mitochondria"
      },
      {
        id: 9,
        test: "Science",
        marks: "2",
        question: "How many bones the human body has?",
        options: ["209", "210", "206", "205"],
        corrAns: "206"
      },
    ];

    setQuestionList(questionArray);
    localStorage.setItem("questionList", JSON.stringify(questionArray));
  }, []);

  useEffect(() => {
    console.log("Question List:", questionList);
  }, [questionList]);

  return null;
};

export default QuestionStorage;
