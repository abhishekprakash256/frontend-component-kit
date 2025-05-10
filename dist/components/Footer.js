// In the component where useState is used
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/style.css"; // Custom CSS
import "../styles/Footer.css"; // Custom CSS
const Footer = () => {
    const [validated, setValidated] = useState(false);
    const currentYear = new Date().getFullYear(); // Dynamically get the current year
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (_jsx(Container, { fluid: true, className: "footer-header-color ", children: _jsxs(Form, { noValidate: true, validated: validated, onSubmit: handleSubmit, children: [_jsx(Row, { id: "contact", className: "text-center", children: _jsx(Col, { className: "text-center", children: _jsx("h1", { className: "bio-font font-color-class heading-responsive-font p-2 mt-3", children: "Contact Me" }) }) }), _jsxs(Row, { id: "contact", className: "text-center p-2", children: [_jsx(Col, { xs: 12, sm: 12, md: 4 }), _jsx(Col, { xs: 12, sm: 12, md: 4, children: _jsxs(Form.Group, { controlId: "validationName", children: [_jsx(Form.Control, { required: true, type: "text", placeholder: "Name", className: "me-2 custom-border form-control custom-placeholder" }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please provide your name." })] }) }), _jsx(Col, { xs: 12, sm: 12, md: 4 })] }), _jsxs(Row, { id: "contact", className: "text-center p-2", children: [_jsx(Col, { xs: 12, sm: 12, md: 4 }), _jsx(Col, { xs: 12, sm: 12, md: 4, children: _jsxs(Form.Group, { controlId: "validationEmail", children: [_jsx(Form.Control, { required: true, type: "email", placeholder: "Email", className: "me-2 custom-border form-control custom-placeholder" }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please provide a valid email." })] }) }), _jsx(Col, { xs: 12, sm: 12, md: 4 })] }), _jsxs(Row, { id: "contact", className: "text-center p-2", children: [_jsx(Col, { xs: 12, sm: 12, md: 4 }), _jsx(Col, { xs: 12, sm: 12, md: 4, children: _jsxs(Form.Group, { controlId: "validationMessage", children: [_jsx(Form.Control, { required: true, as: "textarea", placeholder: "Message", className: "me-2 custom-border form-control custom-placeholder message-inp" }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter a message." })] }) }), _jsx(Col, { xs: 12, sm: 12, md: 4 })] }), _jsx(Row, { id: "contact", className: "text-center p-2", children: _jsx(Col, { className: "text-center", children: _jsx(Button, { type: "submit", className: "button-custom-color", children: "Submit" }) }) }), _jsx(Row, { id: "contact", className: "text-center p-2", children: _jsx(Col, { className: "text-center", children: _jsxs("div", { className: "mb-3 mt-3", children: ["\u00A9 ", currentYear, " Copyright:", _jsx("a", { className: "copyright", href: "https://meabhi.me/", children: " meabhi.me" })] }) }) })] }) }));
};
export default Footer;
