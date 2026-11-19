import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. Mock Data: Define features and advantages per room ID
const ROOM_DATA = {
  101: {
    name: "Standard Solo Room",
    price: "$99/night",
    features: ["Single Bed", "Free Wi-Fi", "Work Desk", "Air Conditioning"],
    advantages: ["Budget-friendly", "Quiet backyard view", "Complimentary coffee"]
  },
  102: {
    name: "Deluxe Double Room",
    price: "$179/night",
    features: ["Queen Bed", "Free Wi-Fi", "Mini Fridge", "Smart TV", "Balcony"],
    advantages: ["City skyline view", "Free airport shuttle", "Late check-out available"]
  },
  103: {
    name: "Penthouse Executive Suite",
    price: "$399/night",
    features: ["King Bed", "Jacuzzi", "Private Kitchen", "Living Room", "High-speed Wi-Fi"],
    advantages: ["Panoramic ocean view", "24/7 Room Service", "Access to VIP lounge", "Free Spa voucher"]
  }
};

export const HotelDetails = () => {
  // 2. State to track the currently selected Room ID
  const [selectedRoomId, setSelectedRoomId] = useState(101);

  // Get data for the currently selected room
  const currentRoom = ROOM_DATA[selectedRoomId];

  return (
    <>
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">Explore Our Hotel Rooms</h2>
      
      {/* Navigation Buttons to simulate changing the Room ID */}
      <Row className="justify-content-center mb-5">
        <Col xs="auto">
          {Object.keys(ROOM_DATA).map((id) => (
            <Button
              key={id}
              variant={selectedRoomId === Number(id) ? "primary" : "outline-primary"}
              className="mx-2"
              onClick={() => setSelectedRoomId(Number(id))}
            >
              Room {id}
            </Button>
          ))}
        </Col>
      </Row>

      {/* Dynamic React Bootstrap Card displaying details based on selected ID */}
      <Row className="justify-content-center">
        <Col lg={12}>
          <Card className="shadow-sm">
            <Card.Header as="h4" className="d-flex justify-content-between align-items-center bg-dark text-white">
              {currentRoom.name}
              <Badge bg="success">{currentRoom.price}</Badge>
            </Card.Header>
            
            <Card.Body>
              <Row>
                {/* Room Features Column */}
                <Col md={6} className="mb-3">
                  <Card.Title className="text-secondary">Room Features</Card.Title>
                  <ListGroup variant="flush">
                    {currentRoom.features.map((feature, index) => (
                      <ListGroup.Item key={index}>
                        🛏️ {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>

                {/* Room Advantages Column */}
                <Col md={6} className="mb-3">
                  <Card.Title className="text-success">Exclusive Advantages</Card.Title>
                  <ListGroup variant="flush">
                    {currentRoom.advantages.map((advantage, index) => (
                      <ListGroup.Item key={index} className="border-left">
                        ⭐ {advantage}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
            
            <Card.Footer className="text-center">
              <Button variant="warning">Book Room {selectedRoomId} Now</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}
