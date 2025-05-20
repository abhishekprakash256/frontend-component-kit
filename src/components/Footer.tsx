// In the component where useState is used
'use client';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/style.css"; // Custom CSS
import "../styles/Footer.css"; // Custom CSS



  


const Footer: React.FC = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (!form.checkValidity()) {
      console.log("Form validation failed");
      event.stopPropagation();
      setValidated(true);
      return;
    }
    
    const formData = new FormData(form);
    const data: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
    // { name: ..., email: ..., message: ... }
      
    try {
      const response = await fetch('http://localhost:5001/message/submit', {  //http://localhost:5001/message/submit     // https://webhook.site/3c3ed972-a5a3-45ea-88eb-a3019b6187e8
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }
      console.log("Sending data to server:", data);
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      form.reset(); // Optional: reset form after successful submission
      
      setValidated(true);
    
    }
     catch (error) {
      console.error('Error submitting form:', error);
    }
  
    setValidated(true);
  };
  

  return (
    <Container fluid className="footer-header-color ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row id="contact" className="text-center">
          <Col className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font p-2 mt-3">
              Contact Me
            </h1>
          </Col>
        </Row>

        <Row id="contact" className="text-center p-2">
          <Col xs={12} sm={12} md={4}></Col>
          <Col xs={12} sm={12} md={4}>
            <Form.Group controlId="validationName">
              <Form.Control
                required
                type="text"
                name = "name"
                placeholder="Name"
                className="me-2 custom-border form-control custom-placeholder"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={4}></Col>
        </Row>

        <Row id="contact" className="text-center p-2">
          <Col xs={12} sm={12} md={4}></Col>
          <Col xs={12} sm={12} md={4}>
            <Form.Group controlId="validationEmail">
              <Form.Control
                required
                type="email"
                name = "email"
                placeholder="Email"
                className="me-2 custom-border form-control custom-placeholder"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={4}></Col>
        </Row>

        <Row id="contact" className="text-center p-2">
          <Col xs={12} sm={12} md={4}></Col>
          <Col xs={12} sm={12} md={4}>
            <Form.Group controlId="validationMessage">
              <Form.Control
                required
                as="textarea"
                name = "message"
                placeholder="Message"
                className="me-2 custom-border form-control custom-placeholder message-inp"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} md={4}></Col>
        </Row>

        <Row id="contact" className="text-center p-2">
          <Col className="text-center">
            <Button type="submit" className="button-custom-color">
              Submit
            </Button>
          </Col>
        </Row>

        {/* Dynamically generate the current year */}
        <Row id="contact" className="text-center p-2">
          <Col className="text-center">
            <div className="mb-3 mt-3">
              © {currentYear} Copyright:  
              <a className="copyright" href="https://meabhi.me/"> meabhi.me</a>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Footer;
