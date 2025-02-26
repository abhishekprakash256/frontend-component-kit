'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/style.css'; // Custom styles
import '../styles/MarkDown.css'; // Custom styles



interface MarkDownProps {
  mark_down_data: string;
}

const MarkDown: React.FC<MarkDownProps> = ({ mark_down_data }) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col>
          {/* Wrap ReactMarkdown in a div and apply className to the div */}
          <div className="mb-0 mt-1 font-color-class bio-desc markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{mark_down_data}</ReactMarkdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MarkDown;
