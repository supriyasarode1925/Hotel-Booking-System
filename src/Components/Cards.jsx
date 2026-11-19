import React from "react"
import { hotels } from "../App/data"
import { Card, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Cards = () => {
  return (
    <>
    <Container fluid>
     <div className="row"> 
      {
      hotels.map((item) => (
      <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 my-3">
        <Card style={{height: "100%"}}>
          <Card.Img variant="top" src={item.Image} style={{height:"200px", objectFit:"cover"}} />
          <Card.Body>
            <div className="d-flex justify-content-between"> 
            <Card.Title>{item.name}</Card.Title>
            <Card.Text> <strong>Rs. {item.pricePerNight}</strong></Card.Text>
            </div>
            <Card.Text>
             {item.amenities}
            </Card.Text>
            <Link to={`/carddetails/${item.id}`}>
            <Button variant="dark">Book Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
     ))}
     </div>
    </Container>
    </>
  )}
