import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function HomePage() {
  const messages = ["AUTOMATION", "CERTIFICATIONS", "RECOMMENDATIONS", "ASSESSMENTS"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="homepage">
      <div className="glassy-overlay"></div>
      <Container className="content-container">
        <Row>
          <Col>
            <h1 className="text-orange" style={{ fontWeight: 'bold', marginTop: '40px' }}>LEARNING MANAGEMENT SYSTEM</h1>
            <h3 className="text-orange" style={{ fontWeight: 'bold' }}>WITH BUILT IN</h3>
            <div>
            <h2 className="typing-text" style={{ fontWeight: 'bolder' }}>{messages[currentIndex]}</h2>
            </div>
            {/* <Button variant="primary" size="lg" style={{ marginTop: '20px' }}>Get Started</Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
