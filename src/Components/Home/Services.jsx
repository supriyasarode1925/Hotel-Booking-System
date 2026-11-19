import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Services = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold text-primary">Our Hotel Services</h2>
            <p className="text-muted">Enjoy a comfortable and memorable stay with our top-tier facilities</p>
          </Col>
        </Row>
        
        <Row className="g-4">
          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <Card.Body>
                <div className="fs-1 text-primary mb-3">🛌</div>
                <Card.Title className="fw-bold">Luxury Rooms</Card.Title>
                <Card.Text className="text-muted">
                  Spacious and modern rooms equipped with high-end comfort and great views.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <Card.Body>
                <div className="fs-1 text-primary mb-3">🍽️</div>
                <Card.Title className="fw-bold">Fine Dining</Card.Title>
                <Card.Text className="text-muted">
                  Experience exquisite local and international cuisine prepared by master chefs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <Card.Body>
                <div className="fs-1 text-primary mb-3">🏊‍♂️</div>
                <Card.Title className="fw-bold">Swimming Pool</Card.Title>
                <Card.Text className="text-muted">
                  Relax and unwind in our temperature-controlled outdoor pool and lounge area.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <Card.Body>
                <div className="fs-1 text-primary mb-3">💆‍♀️</div>
                <Card.Title className="fw-bold">Spa & Wellness</Card.Title>
                <Card.Text className="text-muted">
                  Rejuvenate your body and mind with professional therapeutic massage treatments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <Card.Body>
                <div className="fs-1 text-primary mb-3">🚗</div>
                <Card.Title className="fw-bold">Airport Pickup</Card.Title>
                <Card.Text className="text-muted">
                  Safe and punctual private transport service available 24 hours a day.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <Card.Body>
                <div className="fs-1 text-primary mb-3">📶</div>
                <Card.Title className="fw-bold">High-Speed WiFi</Card.Title>
                <Card.Text className="text-muted">
                  Stay connected seamlessly with free ultra-fast internet across the property.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

