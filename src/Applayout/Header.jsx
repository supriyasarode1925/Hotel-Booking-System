import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Headers = () => {
  return (
    <>
    <Navbar data-bs-theme="dark" expand="lg" style={{ backgroundColor: '#0a746e' }} >
      <Container fluid>
        <Navbar.Brand href="/" className='fw-bold'>Hotel Booking System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav> 
            <Nav.Link as={NavLink} to="/" className="fs-6">Home</Nav.Link>
            <Nav.Link as={NavLink} to="about" className="fs-6">About</Nav.Link>
            <Nav.Link as={NavLink} to="services" className="fs-6">Services</Nav.Link>
            <Nav.Link as={NavLink} to="career" className="fs-6">Career</Nav.Link>
            <Nav.Link as={NavLink} to="contact" className="fs-6">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="login" className="fs-6">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

