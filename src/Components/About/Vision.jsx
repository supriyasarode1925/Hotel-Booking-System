import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLowVision, FaCheck } from "react-icons/fa";
import { RxValue } from "react-icons/rx";

export const Vision = () => {
  return (
    <>
        <Container fluid className='py-5'>
            <Row>
              <Col lg={4}>
              <Card className='px-4 m-1 py-3 shadow-sm border-0 text-white' style={{backgroundColor:"#0a746e"}}>
               <h4> <FaLowVision /> Vision </h4>
               <p> To make hotel booking simple, convenient, and reliable by connecting travelers with comfortable accommodations that match their preferences and budget. We aim to provide a 
                smooth booking experience, transparent pricing, secure reservations, and quality services at every step.
               </p>
               </Card>
              </Col>
              
              <Col lg={4}>
              <Card className='px-4 m-1 py-3 shadow-sm border-0 text-white' style={{backgroundColor:"#0a746e"}}>
              <h4> <FaCheck /> Mission </h4>
              <p>To make hotel booking simple, convenient, and reliable by connecting travelers with comfortable accommodations that match their preferences and budget. 
              We aim to provide a smooth booking experience, transparent pricing, secure reservations, and quality services at every step. 
              </p>
              </Card>
              </Col>

              <Col lg={4}>
              <Card className='px-4  m-1 py-3 shadow-sm border-0 text-white' style={{backgroundColor:"#0a746e"}}>
              <h4> <RxValue /> Our Value </h4>
              <p>
              We provide clear information, transparent pricing, and reliable booking services with no hidden surprises.
              We prioritize our customers' needs and work to make every booking experience easy and satisfying.
              We focus on offering quality services that meet different customer expectations and budgets.
              </p>
              </Card>
              </Col>
            </Row>
          </Container> 
    </>
  )
}


