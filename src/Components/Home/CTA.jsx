import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CTA = () => {
  // Define styles inline to dynamically handle background images easily
  const heroStyle = {
    // Replace with your actual image path or asset URL
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('hotelimages/hero_bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '35vh', // Sets height to 80% of viewport height
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={heroStyle} className="text-white text-center py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {/* Main Headline */}
            <h4 className="fw-bold mb-3">
                 Travel More. Stay Better.
            </h4>
            
            {/* Subheading */}
            <p className="lead mb-4 fs-6 text-light">
              Create lightning-fast responsive websites using React Bootstrap. 
              The ultimate toolkit for modern front-end developers.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="d-flex justify-content-center gap-3">
              <Link to="services">
                  <button className="px-4 py-2 hero-btn text-white border-0">
                    Explore Services
                  </button>
              </Link>
              <Link to="contact">
                  <button className="px-4 py-2 hero-btn text-white border-0">
                    Contact Us
                  </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


