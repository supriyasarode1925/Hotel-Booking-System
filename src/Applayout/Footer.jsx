import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsTelephone, BsGeoAlt, BsEnvelope, BsArrowRightShort} from "react-icons/bs";

export const Footers = () => {
  return (
    <>
    <footer className="pt-5 pb-4 mt-auto text-white"
    style={{backgroundColor:"#0a746e"}}>
      <Container fluid>
        <Row className="gy-4">
          <Col xs={12} md={6} lg={3}>
            <h5 className="text-uppercase fw-bold mb-3">Hotel Booking App</h5>
            <p>
              Streamline your stays and manage reservations effortlessly with our all-in-one hotel booking system.
            </p>
          </Col>

          <Col xs={12} md={3} lg={3}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-white"> 
                <BsArrowRightShort /> Home</Link>
              </li>
              <li className="mb-2">
                <Link to="about" className="text-decoration-none text-white"> 
                <BsArrowRightShort /> About</Link>
              </li>
              <li className="mb-2">
                <Link to="services" className="text-decoration-none text-white"> 
                <BsArrowRightShort /> Services</Link>
              </li>
              <li className="mb-2">
                <Link to="career" className="text-decoration-none text-white">   
                <BsArrowRightShort /> Career</Link>
              </li>
              <li className="mb-2">
                <Link to="contact" className="text-decoration-none text-white">   
                <BsArrowRightShort /> Contact</Link>
              </li>
            </ul>
          </Col>

          
          <Col xs={12} md={3} lg={3}>
            <h5 className="fw-bold mb-3">Our Supports</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="faq" className="text-decoration-none text-white">   
                <BsArrowRightShort /> FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacypolicy" className="text-decoration-none text-white">   
                <BsArrowRightShort /> Privacy Policy</Link> 
              </li>
              <li className="mb-2">
                <Link to="/termcondition" className="text-decoration-none text-white">   
                <BsArrowRightShort /> Terms and Condition</Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><BsGeoAlt />
                <a className='text-white text-decoration-none' href="https://share.google/fbEjqhPrzjZVTCjf5" 
                target="_blank">  Pimpri Chinchwad 
                </a> 
              </li>
              <li className="mb-2"><BsEnvelope/>  
                <a className='text-white text-decoration-none' href="mailto:supriyasarode1925@gmail.com"
                  style={{ marginLeft: "7px"}}> 
                   supriyasarode1925@gmail.com 
                </a> 
              </li>
              <li className="mb-2"><BsTelephone /> 
                <a className='text-white text-decoration-none' href="callto:+919561372454">
                   +91 9561372454
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-light opacity-25" />
        <Row align="center">
          <Col>
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} Hotel Booking App. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

