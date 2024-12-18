import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="rounded border">
      <Container>
        {/* Brand Link */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Time Traveller Tour Operator
        </Navbar.Brand>
        
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navigation Links */}
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/curated-tours">Curated Tours</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
