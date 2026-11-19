import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Features = () => {
  const featureList = [
    {
      title: 'Fast Booking',
      text: 'Secure your room in just a few clicks with our simple reservation flow.',
    },
    {
      title: 'Best Price Match',
      text: 'We guarantee the lowest rates available online for all partner hotels.',
    },
    {
      title: '24/7 Support',
      text: 'Our team is always ready to help you with any questions or changes.',
    },
    {
      title: 'Free Cancellation',
      text: 'Change of plans? Enjoy stress-free flexible cancellation options.',
    }
  ];

  return (
    <>
        <section className="py-5 bg-light">
        <Container>
            <div className="text-center mb-5">
            <h4  className="fw-bold" style={{color:"#0a746e"}}>Why Choose Us</h4>
            <p className="text-muted">We make your stay comfortable from the first click</p>
            </div>
            <Row className="g-4">
            {featureList.map((feature, index) => (
                <Col key={index} xs={12} sm={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm text-center p-3">
                    <Card.Body>
                    <Card.Title className="fw-semibold">{feature.title}</Card.Title>
                    <Card.Text className="text-muted small">{feature.text}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
        </section>
    </>
  );
};

