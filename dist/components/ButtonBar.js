import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row } from 'react-bootstrap';
const ButtonBar = ({ button_text, link }) => {
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-2", children: _jsx(Col, { className: "text-center", children: _jsx("a", { href: link, download: true, children: _jsx(Button, { className: "button-custom-color m-1", children: button_text }) }) }) }) }));
};
export default ButtonBar;
