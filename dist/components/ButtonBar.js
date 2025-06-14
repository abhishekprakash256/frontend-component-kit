'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"; // Custom CSS
import { Container, Button, Col, Row } from 'react-bootstrap';
const ButtonBar = ({ button_text, link }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const isFile = link === null || link === void 0 ? void 0 : link.match(/\.(jpg|jpeg|png|pdf|docx|txt)$/i);
        if (isFile) {
            const a = document.createElement("a");
            a.href = link;
            a.setAttribute("download", "");
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        else {
            window.open(link, "_blank");
        }
    };
    return (_jsx(Container, { children: link && (_jsx(Row, { className: "rounded background-color-body mt-3 p-2", children: _jsx(Col, { className: "text-center", children: _jsx(Button, { className: "button-custom-color m-1", onClick: handleClick, children: button_text }) }) })) }));
};
export default ButtonBar;
