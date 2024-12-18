import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.scss'; // Import the SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col xs={12} md={6} className="footer-section footer-left">
            <h5>Time Traveller Tour Operator</h5>
            <p>
              Explore the world with our curated tours and experience the past, present, and future.
            </p>
          </Col>
          <Col xs={12} md={6} className="footer-section footer-right test">
            <h6>Contact Us</h6>
            <p>Email: mohitmarkmywords.com</p>
            <p>Phone: +91 8085747239</p>
          </Col>
        </Row>
        <hr />
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Time Traveller. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
