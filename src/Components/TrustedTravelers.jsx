
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsPeopleFill,
  BsBuildingsFill,
  BsHeadset,
  BsStarFill
} from "react-icons/bs";

import "./TrustedTravelers.css";

export const TrustedTravelers = () => {

  const stats = [
    {
      id: 1,
      icon: <BsPeopleFill />,
      number: "10K+",
      title: "Happy Guests",
      description: "Travelers trust us for memorable stays"
    },
    {
      id: 2,
      icon: <BsBuildingsFill />,
      number: "150+",
      title: "Premium Properties",
      description: "Handpicked hotels and luxury stays"
    },
    {
      id: 3,
      icon: <BsHeadset />,
      number: "24/7",
      title: "Customer Support",
      description: "We're always here to help you"
    },
    {
      id: 4,
      icon: <BsStarFill />,
      number: "4.8/5",
      title: "Average Rating",
      description: "Rated highly by our happy travelers"
    }
  ];

  return (
    <>
    <section className="trusted-section py-4 mt-4">
      <Container>

        {/* Section Heading */}
        <div className="text-center mb-4">
          <span className="trusted-subtitle">
            WHY TRAVELERS CHOOSE US
          </span>

          <h4 className="trusted-heading fw-bold mt-2">
            Trusted by Travelers
          </h4>

          <p className="trusted-description mx-auto">
            Your comfort, happiness, and unforgettable experiences
            are our top priorities. Discover why thousands of
            travelers choose us for their perfect stay.
          </p>
        </div>

        {/* Statistics */}
        <Row className="g-4">

          {stats.map((item) => (
            <Col
              key={item.id}
              xs={6}
              lg={3}
              
              
            >
              <div className="trusted-card text-center h-100">

                <div className="trusted-icon">
                  {item.icon}
                </div>

                <h3 className="trusted-number">
                  {item.number}
                </h3>

                <h5 className="trusted-title">
                  {item.title}
                </h5>

                <p className="trusted-text mb-0">
                  {item.description}
                </p>

              </div>
            </Col>
          ))}

        </Row>

      </Container>
    </section>
    </>
  );
};

