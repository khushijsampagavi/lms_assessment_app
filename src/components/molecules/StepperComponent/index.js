import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useUser } from '../../../context/useUser';

const StepperComponent = ({ questions, subject }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill('')); // Array to store selected option for each question
  const { user } = useUser(); // Assuming useUser provides the logged-in user's details

  // Reset activeStep when subject changes
  useEffect(() => {
    setActiveStep(0); // Reset to the first step/page
  }, [subject]);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[activeStep] = event.target.value;
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[activeStep];
    const selectedOption = selectedOptions[activeStep];

    // Retrieve existing responses from localStorage or initialize an empty object
    const existingResponses = JSON.parse(localStorage.getItem('responses')) || {};

    // Update responses for the current subject
    const updatedResponses = {
      ...existingResponses,
      [subject]: [
        ...(existingResponses[subject] || []),
        { question: currentQuestion.question, option: selectedOption }
      ]
    };

    // Save updated responses to localStorage
    localStorage.setItem('responses', JSON.stringify(updatedResponses));

    // Update the 'takentest' object with the current subject's responses and user details
    const takentest = JSON.parse(localStorage.getItem('takentest')) || {};
    const updatedTakentest = {
      ...takentest,
      [subject]: updatedResponses[subject],
      student: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        address: user.address,
        contactNumber: user.contactNumber,
        dateOfBirth: user.dateOfBirth,
        organization: user.organization,
        grade: user.grade
        // Add other relevant student details
      }
    };
    localStorage.setItem('takentest', JSON.stringify(updatedTakentest));

    console.log('Form submitted');
  };

  const renderOptions = () => {
    const options = questions[activeStep].options.map((option, index) => (
      <Box key={index} sx={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <input
          type="radio"
          id={`option-${index}`}
          name={`question-${activeStep}`}
          value={option}
          onChange={handleChange}
          style={{ marginRight: '10px', transform: 'scale(1.5)' }}
          checked={option === selectedOptions[activeStep]}
        />
        <label htmlFor={`option-${index}`} style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '5px' }}>{option}</label>
      </Box>
    ));

    // Group options into pairs of two
    const groupedOptions = options.reduce((acc, curr, index) => {
      const groupIndex = Math.floor(index / 2);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(curr);
      return acc;
    }, []);

    return groupedOptions.map((group, index) => (
      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
        {group}
      </div>
    ));
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      {questions.length > 0 && (
        <>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 150,
              pl: 2,
              bgcolor: 'background.default',
              marginBottom: '20px',
            }}
          >
            <div style={{ border: 'solid', width: '1000px', padding: '10px' }}>
              <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                {questions[activeStep].question}
              </Typography>
            </div>
          </Paper>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            {renderOptions()}
          </Box>
        </>
      )}
      <MobileStepper
        variant="text"
        steps={questions.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === questions.length - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default StepperComponent;
