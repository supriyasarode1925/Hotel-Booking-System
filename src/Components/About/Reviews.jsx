import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'New York, USA',
    review: 'The ocean view room was breathtaking and the booking process was seamless. Will definitely book again!',
    rating: '★★★★★',
  },
  {
    id: 2,
    name: 'Aarav Sharma',
    location: 'Mumbai, India',
    review: 'Exceptional hospitality and clean suites. The prompt confirmation made our family vacation stress-free.',
    rating: '★★★★★',
  },
  {
    id: 3,
    name: 'Supriya Sharma',
    location: 'Pune, India',
    review: 'Exceptional hospitality and clean suites. The prompt confirmation made our family vacation stress-free.',
    rating: '★★★★★',
  },
];

export const Reviews = () => {
  return (
    <>
    <section className="pt-5 pb-4 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h4 className="fw-bold" style={{color:"#0a746e;"}}>What Our Guests Say</h4>
          <p className="text-muted">Real experiences from travelers who stayed with us</p>
        </div>
        <Row>
          {testimonialsData.map((item) => (
            <Col md={6} lg={6} key={item.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0 p-4">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Text className="fst-italic text-secondary mb-4">
                      "{item.review}"
                    </Card.Text>
                  </div>
                  <div>
                    <div className="text-warning mb-3 fs-5">{item.rating}</div>
                    <Card.Title className="fs-6 fw-bold mb-0">{item.name}</Card.Title>
                    <Card.Subtitle className="text-muted fs-7 pt-1">{item.location}</Card.Subtitle>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
}
