import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import NavComponent from '../../molecules/NavComponent';

function SubscriptionPage() {
  return (
    <div>
       {/*<Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="mr-auto">Brand</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Homepage</Nav.Link>
            <Nav.Link href="#plans">Plans</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="ml-auto">Log in</Button>
          <Button variant="outline-primary" className="ml-auto">Register</Button>
        </Container>
  </Navbar>*/}
  <NavComponent>
  </NavComponent>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={12}>
            <h2 className="text-center">Simple no-tricks pricing</h2>
            <p className="text-center">Want to take out the hassle from your head? Just leave it to us.</p>
            <Card className='mb-2' style={{ background: 'linear-gradient(to right, hsl(50, 30%, 50%), hsl(25, 65%, 300%))'}}>
              <Card.Body>
                <Row>
                  <Col md={6} className="bg-white text-dark p-4">
                    <h3>Subscribe here to get the subscription</h3>
                    <p>Subscribe to our easy care plan, to take care of two products without headache.</p>
                    <p>What's included---------------------------------------</p>
                    <ul>
                      <li>24-48 Hours Resolution</li>
                    </ul>
                  </Col>
                  <Col md={6} className="p-4">
                    <h4>Pay for what you want</h4>
                    <h3>₹ 499 INR</h3>
                    <Button variant="primary">Get access</Button>
                    <p className="mt-2">Invoices and receipts available for easy company reimbursement</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <Card className='rounded' style={{ background: 'linear-gradient(to right, hsl(150, 50%, 40%), hsl(16, 50%, 450%))' }}>
              <Card.Body>
                <Row>
                  <Col md={6} className="text-white p-4">
                    <h3>Premium Membership</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>What's included-----------------</p>
                    <ul>
                      <li>24-48 Hours Resolution</li>
                      <p>Within 2 hours response</p>
                    </ul>
                  </Col>
                  <Col md={6} className="p-4 bg-white text-dark">
                    <h4>Pay once, own it forever</h4>
                    <h3>₹999 INR</h3>
                    <Button variant="primary">Get access</Button>
                    <p className="mt-2">Invoices and receipts available for easy company reimbursement</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default SubscriptionPage;
