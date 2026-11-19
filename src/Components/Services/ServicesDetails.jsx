import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const ServicesDetails = () => {
  const clientservice = [
    {
      title: 'Room Reservation & Management',
      text: 'Online booking engine, real-time availability checks, room upgrades, and cancellations.',
    },
    {
      title: 'Front Desk & Concierge',
      text: 'Smooth digital check-in/check-out, keyless mobile entry, local tour booking, and taxi hailing',
    },
    {
      title: 'In-Room Dining (Room Service)',
      text: 'Digital food ordering via an electronic menu, tracking preparation status, and room delivery tracking',
    },
    {
      title: 'Housekeeping & Maintenance Requests',
      text: 'One-click requests for fresh towels, room cleaning, or fixing technical issues.',
    }
  ];


  const employeeservice = [
    {
      title: 'Task Distribution & Routing',
      text: 'Automated dispatch of cleaning tasks to housekeeping staff and maintenance tickets to engineers.',
    },
    {
      title: 'Shift Scheduling & Attendance',
      text: 'Managing rosters, clock-in/clock-out tracking, and leave management for employees.',
    },
    {
      title: 'Payroll & Salary Calculation',
      text: 'Calculating manager and employee salaries, factoring in overtime, tips, and performance bonuses.',
    },
    {
      title: 'Admin Dashboard & Analytics',
      text: 'Real-time metrics on hotel occupancy rates, total revenue generated, and employee performance scores.',
    },
    {
      title: 'Kitchen & Inventory Management',
      text: 'Tracking stock levels of food ingredients, linens, and cleaning supplies with automated low-stock reorder alerts',
    }
  ];


  return (
    <>
        <section className="py-5 bg-light">
        <Container fluid>
            <div className="text-center mb-5">
            <h4  className="fw-bold" style={{color:"#0a746e"}}>Services for Clients / Guests</h4>
            <p className="text-muted">These services represent the guest journey from reservation to check-out</p>
            </div>
            <Row className="g-4">
            {clientservice.map((feature, index) => (
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

        <section className="py-5 bg-light">
        <Container fluid>
            <div className="text-center mb-5">
            <h4  className="fw-bold" style={{color:"#0a746e"}}>Services for Employees / Staff / Management</h4>
            <p className="text-muted">The internal system tracks operations, automates tasks, and manages human resources</p>
            </div>
            <Row className="g-4">
            {employeeservice.map((feature, index) => (
                <Col key={index} xs={12} sm={6} lg={4}>
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

