import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/Para.css"; // Custom CSS

interface ParaProps {
  description: string;
}

const Para: React.FC<ParaProps> = ({ description }) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col>
          <p
            className="mb-2 mt-2 font-color-class bio-desc justify-content"
            dangerouslySetInnerHTML={{ __html: description }} // Allows rendering HTML
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Para;
