/*

Not used right now
*/

import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/Skills.css"; // Custom CSS
import ReactMarkdown from 'react-markdown';

interface MarkDownProps {
  mark_down_data: string;
}

const Skills: React.FC<MarkDownProps> = ({ mark_down_data }) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col>
          {/* Wrap ReactMarkdown in a div and apply className to the div */}
          <div className="mb-0 font-color-class bio-desc markdown-body">
            <ReactMarkdown>{mark_down_data}</ReactMarkdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;