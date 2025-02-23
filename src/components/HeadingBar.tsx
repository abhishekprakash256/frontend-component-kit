import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/HeadingBar.css"; // Custom CSS

interface HeadingBarProps {
  title: string;
}

const HeadingBar: React.FC<HeadingBarProps> = ({ title }) => {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col className="text-center">
          <h1 className="bio-font font-color-class heading-responsive-font m-0">
            {title}
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HeadingBar;
