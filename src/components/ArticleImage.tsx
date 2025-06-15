import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/ArticleImage.css"; // Custom CSS

interface ImageProps {
  image_link: string;
}

const ArticleImage: React.FC<ImageProps> = ({ image_link }) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col className="text-center article-image-container m-2 rounded">

        <img src={image_link} className="img-fluid rounded p-2" alt="Article"></img>
  
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleImage;
