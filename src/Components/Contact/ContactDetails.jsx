import React from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { BsTelephone, BsGeoAlt, BsEnvelope } from "react-icons/bs";


export const ContactDetails = () => {

    // 1. Form State Management
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    // 2. Native HTML5 Validation State
    const [validated, setValidated] = useState(false);
  
    // 3. Update state dynamically on input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // 4. Handle Form Submission
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      
      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
      } else {
        setValidated(true);
        
        // Perform API calls or process data here (e.g., Axios or EmailJS)
        console.log('Form Submitted Successfully:', formData);
        
        // Reset form fields
        setFormData({ name: '', email: '', subject: '', message: '' });
        setValidated(false);
      }
    };
  

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-md-center">
          <Col md={4} lg={6}>
           
                <Col className='shadow-sm p-3 mb-3'>
                  <h5><BsGeoAlt /> Address </h5>
                  <p> Pimpri Chinchwad, Pune, Maharashtra, India (411019) </p>
                </Col>
                <Col className='shadow-sm p-3 mb-3'>
                  <h5> <BsEnvelope />  Mail Us </h5>
                  <p className='text-break'> supriyasarode1925@gmail.com </p>
                </Col>
                <Col className='shadow-sm p-3 mb-3'>
                  <h5> <BsTelephone /> Call Us </h5>
                  <p> 9561372454 </p>
                </Col>              
          </Col>
          <Col md={8} lg={6}>
            <Card className="shadow-sm p-4 border-0">
              <Card.Body>
                <h4 className="fw-bold mb-4" style={{color:"#0a746e"}}>Contact Us</h4>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  
                  {/* Name Field */}
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Email Field */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Subject Field */}
                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a subject.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Message Field */}
                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Your message goes here..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your message.
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Submit Button */}
                  <div className="d-grid gap-2">
                    <button className="apply-btn text-white border-0 py-2 px-4">
                      Submit Message
                    </button>
                  </div>

                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}


