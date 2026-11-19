

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge
} from 'react-bootstrap';
import { BsArrowRightShort } from "react-icons/bs";
import { hotelsData } from '../App/hotelsData';
import './HotelDetails.css';
import { TrustedTravelers } from './TrustedTravelers';
import { CustomerTestimonials } from './CustomerTestimonials'


export const HotelDetails = () => {

  const { id } = useParams();

  // Find hotel according to URL ID
  const hotel = hotelsData.find(
    (item) => String(item.id) === String(id)
  );

  // Store selected image
  const [activeImage, setActiveImage] = useState(null);

  // Update image when hotel ID changes
  useEffect(() => {
    setActiveImage(hotel?.images?.[0] || null);
  }, [hotel]);

  if (!hotel) {
    return (
      <Container className="my-5">
        <h3>Hotel not found!</h3>
      </Container>
    );
  }

  const navigate = useNavigate();


  const handleBookNow = () => {
    const isLogin = localStorage.getItem("isLogin");
  
    if (isLogin === "true") {
      // User is logged in
      navigate(`/payment/${hotel.id}`);
    } else {
      // User is not logged in
      navigate("/login");
    }
  };

  // Handle thumbnail click
  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <Container fluid className="hotel-details-container py-4">

      {/* Hotel Heading */}
      <div className="mb-4">
        <h4 className="fw-bold" style={{color:"#0a746e"}}>{hotel.name}</h4>

        <p className="text-muted mb-2">
          <i className="bi bi-geo-alt"></i> {hotel.location}
        </p>

        <p>{hotel.description}</p>
      </div>

      {/* Hotel Image Gallery */}
      <Row className="mb-4">

        <Col lg={6} className="">

          <div className="hotel-gallery">

            {/* Main Image */}
            {activeImage && (
              <div className="main-image-container">

                <img
                  src={activeImage.original}
                  alt={activeImage.alt}
                  className="main-hotel-image"
                />

                <div className="image-caption">
                  <h5>{activeImage.title}</h5>
                </div>

              </div>
            )}

            {/* Thumbnail Images */}
            <div className="thumbnail-container">

              {hotel.images.map((image) => {

                const isActive =
                  activeImage?.id === image.id;

                return (
                  <button
                    type="button"
                    key={image.id}
                    className={`thumbnail-button ${
                      isActive ? 'active-thumbnail' : ''
                    }`}
                    onClick={() => handleImageClick(image)}
                    aria-label={`View ${image.title}`}
                    aria-pressed={isActive}
                  >

                    <img
                      src={image.thumbnail}
                      alt={image.alt}
                      className="thumbnail-image"
                    />

                  </button>
                );
              })}

            </div>

          </div>

        </Col>
        <Col lg={6}>
          <CustomerTestimonials />
        </Col>
      </Row> 

      {/* Advantages, Features and Offers */}
      <Row className="g-4 mb-4">

        {/* Advantages */}
        <Col md={4}>
          <Card className="hotel-info-card h-100">

            <Card.Header>
            <h5 className='mb-0'>Advantages</h5>
            </Card.Header>

            <ListGroup variant="flush">

              {hotel.advantages.map((adv, index) => (
                <ListGroup.Item key={index}>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {adv}
                </ListGroup.Item>
              ))}

            </ListGroup>

          </Card>
        </Col>

        {/* Features */}
        <Col md={4}>
          <Card className="hotel-info-card h-100">

            <Card.Header>
            <h5 className='mb-0'>Features</h5>
            </Card.Header>

            <ListGroup variant="flush">

              {hotel.features.map((feature, index) => (
                <ListGroup.Item key={index}>
                  <i className="bi bi-star-fill text-warning me-2"></i>
                  {feature}
                </ListGroup.Item>
              ))}

            </ListGroup>

          </Card>
        </Col>

        {/* Offers */}
        <Col md={4}>
          <Card className="hotel-info-card h-100">

            <Card.Header>
              <h5 className='mb-0'>Special Offers</h5>
            </Card.Header>

            <ListGroup variant="flush">

              {hotel.offers.map((offer, index) => (
                <ListGroup.Item key={index}>
                  <i className="bi bi-tag-fill text-success me-2"></i>
                  <span className="text-success fw-semibold">
                    {offer}
                  </span>
                </ListGroup.Item>
              ))}

            </ListGroup>

          </Card>
        </Col>

      </Row>

      {/* Available Rooms */}
       <div className="available-rooms-section">

        <h4  className="fw-bold" style={{color:"#0a746e"}}>Available Rooms</h4>

        <Row className="g-4">

          {hotel.rooms.map((room, index) => (

            <Col md={6} key={index}>

              <Card className="room-card h-100">

                <Card.Body>

                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <Card.Title className="mb-0">
                      {room.type}
                    </Card.Title>

                    <Badge bg="success">Available</Badge>

                  </div>

                  <h4 className="text-primary fw-bold">
                    {room.price}
                  </h4>

                  <p className="text-muted mb-0">
                    <i className="bi bi-people me-2"></i>
                    Maximum {room.persons} Persons
                  </p>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

       </div>

      <div className="text-center mt-4">
      
        <button className="px-4 py-2 hero-btn text-white border-0" 
                  onClick={handleBookNow}>
                      Book Now <BsArrowRightShort />
                </button>
      </div>
      <TrustedTravelers />
    </Container>
  );
}
