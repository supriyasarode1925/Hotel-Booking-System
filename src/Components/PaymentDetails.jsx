
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { hotelsData } from "../App/hotelsData";

export const PaymentDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotelsData.find(
    (item) => String(item.id) === String(id)
  );

  // Check login before displaying payment page
  if (localStorage.getItem("isLogin") !== "true") {
    return (
      <Container className="my-5 text-center">
        <h4>Please login to continue booking.</h4>
        <Button onClick={() => navigate("/login", {
          state: { from: `/payment/${id}` }
        })}>
          Login
        </Button>
      </Container>
    );
  }

  if (!hotel) {
    return (
      <Container className="my-5">
        <h3>Hotel Not Found!</h3>
      </Container>
    );
  }

  return (
    <Container className="my-5">

      <h2 className="fw-bold mb-4">
        Payment Details
      </h2>

      <Row className="g-4">

        {/* Hotel Information */}
        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Body>

              <h4>Booking Information</h4>

              <img
                src={hotel.images?.[0]?.original}
                alt={hotel.name}
                className="img-fluid rounded mb-3"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <h5>{hotel.name}</h5>

              <p>{hotel.location}</p>

              <p>{hotel.description}</p>

            </Card.Body>
          </Card>
        </Col>

        {/* Payment Summary */}
        <Col md={5}>
          <Card className="shadow-sm">
            <Card.Body>

              <h4>Payment Summary</h4>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Hotel Name</span>
                <strong>{hotel.name}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Booking Status</span>
                <strong className="text-success">
                  Pending
                </strong>
              </div>

              <hr />

              <h5>Payment Method</h5>

              <div className="mb-3">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />{" "}
                Pay Online
              </div>

              <div className="mb-3">
                <input
                  type="radio"
                  name="payment"
                />{" "}
                Pay at Hotel
              </div>

              <Button
                variant="primary"
                className="w-100 mt-3"
                onClick={() => alert("Connect your payment gateway")}
              >
                Proceed to Payment
              </Button>

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};
