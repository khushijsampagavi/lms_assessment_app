import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ViewTest from './ViewTest';

function TakeAssessment() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleAssessmentClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
        <Card style={{ width: '18rem', height: '200px', margin: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Card.Title>Mathematics</Card.Title>
            </div>
            <Button variant="primary" onClick={() => handleAssessmentClick('Mathematics')}>Take Assessment</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '200px', margin: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Card.Title>Science</Card.Title>
            </div>
            <Button variant="primary" onClick={() => handleAssessmentClick('Science')}>Take Assessment</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '200px', margin: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Card.Title>Social Science</Card.Title>
            </div>
            <Button variant="primary" onClick={() => handleAssessmentClick('Social Science')}>Take Assessment</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '200px', margin: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Card.Title>English</Card.Title>
            </div>
            <Button variant="primary" onClick={() => handleAssessmentClick('English')}>Take Assessment</Button>
          </Card.Body>
        </Card>
      </div>
      {selectedSubject && <ViewTest subject={selectedSubject} />}
    </div>
  );
}

export default TakeAssessment;
