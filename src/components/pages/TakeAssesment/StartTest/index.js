import React, { useState } from 'react';
import ViewTest from './ViewTest';

const StartTest = ({ subject }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleTakeAssessment = () => {
    setSelectedSubject(subject); // Set the selected subject when "Take Assessment" card is clicked
  };

  return (
    <div>
      <h2>{subject}</h2>
      <button onClick={handleTakeAssessment}>Take Assessment</button>
      {selectedSubject && <ViewTest subject={selectedSubject} />}
    </div>
  );
};

export default StartTest;
