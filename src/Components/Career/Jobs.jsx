import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom"
import "./Jobs.css";

const jobs = [
  {
    title: "Frontend Developer",
    department: "Technology",
    location: "Pune, Maharashtra",
    experience: "2–4 Years",
  },
  {
    title: "Hotel Operations Manager",
    department: "Operations",
    location: "Mumbai, Maharashtra",
    experience: "3–5 Years",
  },
  {
    title: "Guest Relationship Executive",
    department: "Guest Services",
    location: "Pune, Maharashtra",
    experience: "1–3 Years",
  },
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Remote",
    experience: "1–3 Years",
  },
];

const benefits = [
  {
    icon: "📈",
    title: "Career Growth",
    description:
      "Grow your skills and build a rewarding career with exciting opportunities."
  },
  {
    icon: "🎓",
    title: "Learning & Development",
    description:
      "Access training programs and continuous learning opportunities."
  },
  {
    icon: "🤝",
    title: "Great Culture",
    description:
      "Work with a supportive team that values collaboration and respect."
  },
  {
    icon: "⭐",
    title: "Employee Benefits",
    description:
      "Enjoy competitive benefits and rewards for your contribution."
  },
];

export const Jobs = () => {
  const scrollToJobs = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container fluid>
        {/* Why Join Us */}
        <section className="benefits-section">
      
            <div className="section-heading pt-4">
                <h4 className="fw-bold text-center">Why Join Us?</h4>
                <p className="text-center">
                We believe our people are the heart of our success.
                </p>
            </div>

            <Row className="g-4 mt-3">
                {benefits.map((benefit, index) => (
                <Col md={6} lg={3} key={index}>
                    <Card className="benefit-card h-100">
                    <Card.Body>
                        <div className="benefit-icon">
                        {benefit.icon}
                        </div>

                        <h5>{benefit.title}</h5>

                        <p>{benefit.description}</p>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        
        </section>

        {/* Open Positions */}
        <section className="jobs-section pb-5 container" id="open-positions">
            
            <div className="section-heading pt-5 text-center">
                <h4 className="fw-bold">Open Positions</h4>
                <p>
                Find an opportunity that matches your skills and
                career goals.
                </p>
            </div>

            <Row className="g-4 mt-3">
                {jobs.map((job, index) => (
                <Col lg={6} key={index}>
                    <Card className="job-card">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <h5>{job.title}</h5>

                            <p className="job-department m-0">
                            {job.department}
                            </p>
                        </div>

                        <Badge bg="light" text="dark">
                            Full Time
                        </Badge>
                        </div>

                        <div className="job-details">
                        <span>📍 {job.location}</span>
                        <span>💼 {job.experience}</span>
                        </div>

                        <Link to="login">
                        <button className="apply-btn text-white border-0 py-2 px-4">
                        Apply Now
                        </button>
                        </Link>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
          
        </section>
      </Container>

      {/* CTA */}

        <section className="career-cta py-5">
            <Container fluid className="text-center text-white">
            <h4>Ready to Start Your Journey?</h4>

            <p>
                Explore our open positions and take the next step
                toward your dream career.
            </p>
            <a href="#open-positions">
            <button className="career-btn px-4 py-2 border-0 bg-white" onClick={scrollToJobs}>
                View Jobs
            </button>
            </a>
            </Container>
        </section>
      <Container fluid>
        {/* Culture */}
        <section className="culture-section py-5 container">
       
            <Row className="align-items-center">
                <Col lg={6}>
                <h4>Be Part of Something Meaningful</h4>

                <p>
                    Our mission is to make hotel booking simple,
                    convenient, and enjoyable for every traveler.
                    We are building a workplace where talented people
                    can collaborate, innovate, and grow together.
                </p>

                <p>
                    Whether you are passionate about technology,
                    hospitality, marketing, or customer experience,
                    there is a place for you on our team.
                </p>
                </Col>

                <Col lg={6}>
                <div className="culturebox">
                    <h4>Our Values</h4>

                    <ul>
                    <li>Customer First</li>
                    <li>Teamwork & Collaboration</li>
                    <li>Innovation</li>
                    <li>Integrity</li>
                    <li>Continuous Improvement</li>
                    </ul>
                </div>
                </Col>
            </Row>
        </section>
      </Container>
    </>
  );
};

