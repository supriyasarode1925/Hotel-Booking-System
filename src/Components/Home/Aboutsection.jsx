import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { BsArrowRightShort } from "react-icons/bs";


export const Aboutsection = () => {
    return (
        <>
          <Container fluid className='py-4'>
            <Row>
              <Col lg={7} className='pb-4'>
               <h4 className="fw-bold" style={{color:"#0a746e"}}> About Hotel Booking... </h4>
               <p> Welcome to, your trusted platform for discovering and booking comfortable hotels, resorts, 
                and stays with ease. We make online hotel booking simple, convenient, and reliable, 
                helping travelers find the right accommodation based on their destination, budget, 
                preferences, and travel plans. 
               </p>
               <p> Whether you are planning a family vacation, a business trip, a romantic getaway,
                 or a weekend escape, our platform brings a wide range of hotels and stays in one place. 
                 Compare available options, explore hotel amenities, check prices, discover special deals, 
                 and book your stay with confidence.
               </p>
               <p> Our goal is to provide a smooth hotel booking experience from search to check-in. 
                We continuously work to offer competitive prices, attractive seasonal deals, festival 
                offers, and exclusive discounts so that you can enjoy a memorable stay without exceeding your budget.
               </p>
          
               <div>
                <Link to="about">
                    <button className="px-4 py-2 hero-btn text-white border-0">
                       Read More <BsArrowRightShort />
                    </button>
                </Link>
                </div>
              </Col>
       
              <Col lg={5}>
              <img src="/hotelimages/hotel.jpg" alt="Hotel-image" className="rounded w-100 h-100"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              </Col>
            </Row>
          </Container>
        </>
    )
}