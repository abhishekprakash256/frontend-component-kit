'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row} from 'react-bootstrap';

interface ButtonBarProps {
  button_text: string;
  link: string;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ button_text , link }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const isFile = link.match(/\.(jpg|jpeg|png|pdf|docx|txt)$/i); // Check for file extensions to determine if it's a file to download
    if (isFile) {
      // Trigger download
      const a = document.createElement("a");
      a.href = link;
      a.setAttribute("download", ""); // Trigger download
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      // Open link in a new tab (for redirection)
      window.open(link, "_blank");
    }
  };

  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col className="text-center">
          <Button className="button-custom-color m-1" onClick={handleClick}>
            {button_text}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ButtonBar;
