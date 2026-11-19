import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHero } from "./useHero";


export const Hero = () => {
  const {
    title,
    subtitle,
    buttonText,
    buttonLink,
    image,
  } = useHero();

  const heroStyle = {
    backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      url("${image}")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
        <div style={heroStyle} className="text-white text-center py-4">
        <Container>
            <Row className="justify-content-center">
            <Col md={10} lg={8}>

                <h1 className="display-6 fw-bold mb-3">
                {title}
                </h1>

                <p className="lead mb-4 fs-5 text-light">
                {subtitle}
                </p>

                <div className="d-flex justify-content-center gap-3">
                <Link to={buttonLink}>
                    <button className="px-4 py-2 hero-btn text-white border-0">
                    {buttonText}
                    </button>
                </Link>
                </div>

            </Col>
            </Row>
                  {/* Breadcrumb */}
     
        </Container>
        </div>
        
    </>
  );
};