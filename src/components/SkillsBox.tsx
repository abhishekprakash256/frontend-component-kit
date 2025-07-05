import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/SkillsBox.css"; // Custom CSS
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGitlab,
  FaKaggle,
  FaMedium
} from 'react-icons/fa';



const SkillsBox: React.FC = () => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center">
        <Col className="text-center">
            <div className="skills-icons ">

                
            <FaGithub className="social-icon icon-custom-color mx-2 no-hover-icons" />
            <FaLinkedin className="social-icon icon-custom-color mx-2 no-hover-icons" />
            <FaTwitter className="social-icon icon-custom-color mx-2 no-hover-icons" />
            <FaGitlab className="social-icon icon-custom-color mx-2 no-hover-icons" />
            <FaKaggle className="social-icon icon-custom-color mx-2 no-hover-icons" />
            <FaMedium className="social-icon icon-custom-color mx-2 no-hover-icons" />
          
          
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default SkillsBox;
