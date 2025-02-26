import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/AboutPic.css"; // Custom CSS

interface ImageProps {
    image_link: string;
  }
  

const AboutPic: React.FC<ImageProps> = ({image_link }) => {
  return (
    <Container className='text-center'>
      <Row className="text-center">

        <Col ></Col>
        <Col  md={6}>

        <img src={ image_link } className="img-fluid mt-3 rounded-circle justify-content" alt="ProfilePic"></img>
  
        </Col>

        <Col ></Col>
      </Row>
    </Container>
  );
};

export default AboutPic;
