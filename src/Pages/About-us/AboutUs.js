import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './AboutUs.scss';  

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <Container>
        <h2 className="text-center my-4">About Us</h2>
        <Row className="d-flex justify-content-center">
       
          <Col md={6} sm={12} className="mb-4">
            <Card className="about-us-card">
              <Card.Body>
                <Card.Title>Destinations</Card.Title>
                <Card.Text>
                  Explore our unique and curated travel destinations.
                </Card.Text>
                <Button variant="primary" href="#">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} sm={12} className="mb-4">
            <Card className="about-us-card">
              <Card.Body>
                <Card.Title>Values & Mission</Card.Title>
                <Card.Text>
                  Our core values and mission guide every travel experience.
                </Card.Text>
                <Button variant="primary" href="#">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
       
          <Col md={6} sm={12} className="mb-4 d-flex justify-content-center">
            <Card className="about-us-card">
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>
                  Meet our passionate team behind every successful trip.
                </Card.Text>
                <Button variant="primary" href="#">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
