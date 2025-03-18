import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/style.css'; // the custom import file
import '../styles/More.css'; // the custom import file

interface MoreProps {
  more_link: string;
}

const More: React.FC<MoreProps> = ({ more_link }) => {
  // Ensure the link is absolute


  return (
    <Container>
      <Row className="">
        <Col className="text-center">
          <h1 className="animate bounce">
            <a 
              className="text-decoration-none more-color" 
              href={more_link} 
              // target="_blank" // Uncomment if you want links to open in a new tab
              rel="noopener noreferrer" // Security best practices
            >
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </a>
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default More;
