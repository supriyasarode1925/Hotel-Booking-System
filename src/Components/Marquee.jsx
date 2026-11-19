import React from "react";
import { Container } from "react-bootstrap";
import "./Marquee.css";

export const Marquee = () => {
  const messages = [
    "🏨 Book your dream hotel at the best prices!",
    "🌴 Luxury stays starting from ₹999/night",
    "🎉 Get 20% OFF on your first hotel booking",
    "⭐ Handpicked hotels with verified reviews",
    "✈️ Book hotels for your next unforgettable trip",
  ];

  return (
    <>
        <Container fluid className="marquee-container bg-dark text-white">
        <div className="marquee-wrapper">
            <div className="marquee-content">
            {messages.map((message, index) => (
                <span className="marquee-item" key={index}>
                {message}
                </span>
            ))}

            {/* Duplicate content for seamless scrolling */}
            {messages.map((message, index) => (
                <span className="marquee-item" key={`duplicate-${index}`}>
                {message}
                </span>
            ))}
            </div>
        </div>
        </Container>
    </>
  );
};
