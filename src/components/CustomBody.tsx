import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/style.css'; // the custom import file
import '../styles/CustomBody.css'; // the custom import file

interface CustomBodyProps {
  children: ReactNode;
}

const CustomBody: React.FC<CustomBodyProps> = ({ children }) => {
  return (
    <div className="custom-body">
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomBody;
