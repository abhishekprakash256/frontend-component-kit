import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row } from 'react-bootstrap';

interface ButtonBarProps {
  button_text: string;
  link: string;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ button_text, link }) => {

  const handleClick = () => {
    // Open link in a new tab (Redirection)
    window.open(link, "_blank");

    // Create a temporary <a> tag to trigger the download
    const a = document.createElement("a");
    a.href = link;
    a.setAttribute("download", ""); // This forces the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
}

export default ButtonBar;
