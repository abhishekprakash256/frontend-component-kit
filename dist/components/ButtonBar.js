import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row } from 'react-bootstrap';
const ButtonBar = ({ button_text, link }) => {
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
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-2", children: _jsx(Col, { className: "text-center", children: _jsx(Button, { className: "button-custom-color m-1", onClick: handleClick, children: button_text }) }) }) }));
};
export default ButtonBar;
