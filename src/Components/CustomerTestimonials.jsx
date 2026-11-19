
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import {
  BsStarFill,
  BsQuote,
  BsArrowLeft,
  BsArrowRight
} from "react-icons/bs";

import "./CustomerTestimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Amazing experience! The hotel was beautiful, rooms were clean, and the staff was very helpful. Booking was simple and hassle-free. Definitely recommended!"
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Pune, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "I had a wonderful stay with my family. The property was excellent, food was delicious, and customer support was available whenever we needed help."
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Ahmedabad, India",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    review:
      "Very smooth booking experience. The hotel matched the pictures and descriptions. The pricing was reasonable and the overall experience was fantastic."
  },
  {
    id: 4,
    name: "Amit Deshmukh",
    location: "Nagpur, India",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    review:
      "Excellent service and a great selection of hotels. The booking process was easy, and I received all the booking details quickly. Will book again!"
  }
];

export const CustomerTestimonials = () => {
  return (
    <section className="testimonial-section py-3">
      <Container>

        {/* Heading */}
        <div className="text-center mb-4">
          <span className="testimonial-subtitle">
            CUSTOMER EXPERIENCES
          </span>

          <h4 className="testimonial-heading fw-bold mt-2">
            What Our Customers Say
          </h4>

          <p className="testimonial-description">
            Real experiences from travelers who made their stays
            memorable with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Row className="justify-content-center">
          <Col lg={12} md={11}>

            <Carousel
              indicators={true}
              controls={true}
              interval={5000}
              pause="hover"
              touch={true}
              className="testimonial-carousel"
              prevIcon={
                <span className="testimonial-control">
                  <BsArrowLeft />
                </span>
              }
              nextIcon={
                <span className="testimonial-control">
                  <BsArrowRight />
                </span>
              }
            >

              {testimonials.map((item) => (
                <Carousel.Item key={item.id}>

                  <div className="testimonial-card text-center">

                    <div className="quote-icon">
                      <BsQuote />
                    </div>

                    {/* Star Rating */}
                    <div className="testimonial-stars mb-3">
                      {[...Array(5)].map((_, index) => (
                        <BsStarFill
                          key={index}
                          className={
                            index < item.rating
                              ? "star-active"
                              : "star-inactive"
                          }
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="testimonial-review">
                      "{item.review}"
                    </p>

                    {/* Customer Details */}
                    <div className="customer-info">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="customer-image"
                      />

                      <h5 className="customer-name mt-3">
                        {item.name}
                      </h5>

                      <p className="customer-location">
                        {item.location}
                      </p>

                    </div>

                  </div>

                </Carousel.Item>
              ))}

            </Carousel>

          </Col>
        </Row>

      </Container>
    </section>
  );
};


