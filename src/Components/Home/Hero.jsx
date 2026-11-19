import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
      <Carousel data-bs-theme="dark text-white">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hotelimages/hotel2.jpg"
            alt="First slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <h2 className='fw-bold'>Find the Perfect Stay, Wherever You Go</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="services">
                <button className="px-4 py-2 hero-btn text-white border-0">
                  Our Services
                </button>
              </Link>
              <Link to="contact">
                <button className="px-4 py-2 hero-btn text-white border-0">
                  Contact Us
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hotelimages/hotel.jpg"
            alt="Second slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <h2 className='fw-bold'>Members Save 10% and Many More...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="services">
                <button className="px-4 py-2 hero-btn text-white border-0">
                  Our Services
                </button>
              </Link>
              <Link to="contact">
                <button className="px-4 py-2 hero-btn text-white border-0">
                  Contact Us
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
     
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/hotelimages/hotel1.jpg"
            alt="Third slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <h2 className='fw-bold'>Experience comfort, luxury and unforgettable stays</h2>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="services">
                <button className="px-4 py-2 hero-btn text-white border-0">
                  Our Services
                </button>
              </Link>
              <Link to="contact">
                <button className="px-4 py-2 hero-btn text-white border-0">
                  Contact Us
                </button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
