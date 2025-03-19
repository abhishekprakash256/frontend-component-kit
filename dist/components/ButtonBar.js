// At the top of the file, add this line:
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row } from 'react-bootstrap';
const ButtonBar = ({ button_text, link }) => {
    const handleClick = () => {
        // Handle the click event for both redirect and download
        window.open(link, "_blank");
        const a = document.createElement("a");
        a.href = link;
        a.setAttribute("download", "");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (_jsx(Container, { children: _jsx(Row, { className: "rounded background-color-body mt-3 p-2", children: _jsx(Col, { className: "text-center", children: _jsx(Button, { className: "button-custom-color m-1", onClick: handleClick, children: button_text }) }) }) }));
};
export default ButtonBar;
