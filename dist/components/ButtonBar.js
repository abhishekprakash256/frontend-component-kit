'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row } from 'react-bootstrap';
const ButtonBar = ({ button_text, link }) => {
    const handleClick = (e) => {
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
        }
        else {
            // Open link in a new tab (for redirection)
            window.open(link, "_blank");
        }
    };
    return (_jsx(Container, { children: _jsx(Row, Object.assign({ className: "rounded background-color-body mt-3 p-2" }, { children: _jsx(Col, Object.assign({ className: "text-center" }, { children: _jsx(Button, Object.assign({ className: "button-custom-color m-1", onClick: handleClick }, { children: button_text })) })) })) }));
};
export default ButtonBar;
