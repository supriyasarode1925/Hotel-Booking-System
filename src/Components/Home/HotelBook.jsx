import React from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { hotelsData } from "../../App/hotelsData";
import { BsArrowRightShort } from "react-icons/bs";

export const HotelBook = () => {
  const navigate = useNavigate();

  const handleSelectHotel = (id) => {
    navigate(`/hotel/${id}`); // Navigates to dynamic route like /hotel/1 or /hotel/2
  };

  return (
    <>
    <Container fluid>
      <h4 className="fw-bold" style={{color:"#0a746e"}}>Select a Hotel</h4>
      <Row>
        {hotelsData.map((hotel) => (
          <Col md={4} key={hotel.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={hotel.images?.[0]?.original}
                alt={hotel.images?.[0]?.alt || hotel.name} style={{ maxHeight: '240px', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <button className="px-4 py-2 hero-btn text-white border-0" 
                onClick={() => handleSelectHotel(hotel.id)}>
                       View Hotel Details <BsArrowRightShort />
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )}
