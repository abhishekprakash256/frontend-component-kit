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
    const [success, setSuccess] = useState(false);
    const [validated, setValidated] = useState(false);
    const currentYear = new Date().getFullYear(); // Dynamically get the current year
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log("Form is invalid");
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return;
        }
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        try {
            // the url for production use https://meabhi.me/message/submit
            // the url for local use http://localhost:5001/message/submit
            //https://api.meabhi.me/{microservice}/v{version}/{resource}/{optional-action}
            // the url now https://api.meabhi.me/static-media-server/v1/user/message/submit
            const response = await fetch('https://api.meabhi.me/static-media-server/v1/user/message/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            else {
                const responseData = await response.json();
                console.log('Form submitted successfully:', responseData);
                setSuccess(true); // ✅ Show success
                //alert('Form submitted successfully!');
                setValidated(false); // clear validation state (if needed)
                setTimeout(() => {
                    form.reset(); // clear inputs after a short delay
                    setSuccess(false); // clear success state
                }, 2000); // small delay
            }
        }
        catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (_jsx(Container, { fluid: true, className: "footer-header-color ", children: _jsxs(Form, { noValidate: true, validated: validated, onSubmit: handleSubmit, children: [_jsx(Row, { id: "contact", className: "text-center", children: _jsx(Col, { className: "text-center", children: _jsx("h1", { className: "bio-font font-color-class heading-responsive-font p-2 mt-3", children: "Contact Me" }) }) }), _jsxs(Row, { id: "contact", className: "text-center p-2", children: [_jsx(Col, { xs: 12, sm: 12, md: 4 }), _jsx(Col, { xs: 12, sm: 12, md: 4, children: _jsxs(Form.Group, { controlId: "validationName", children: [_jsx(Form.Control, { required: true, type: "text", name: "name", placeholder: "Name", className: "me-2 custom-border form-control custom-placeholder" }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please provide your name." })] }) }), _jsx(Col, { xs: 12, sm: 12, md: 4 })] }), _jsxs(Row, { id: "contact", className: "text-center p-2", children: [_jsx(Col, { xs: 12, sm: 12, md: 4 }), _jsx(Col, { xs: 12, sm: 12, md: 4, children: _jsxs(Form.Group, { controlId: "validationEmail", children: [_jsx(Form.Control, { required: true, type: "email", name: "email", placeholder: "Email", className: "me-2 custom-border form-control custom-placeholder" }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please provide a valid email." })] }) }), _jsx(Col, { xs: 12, sm: 12, md: 4 })] }), _jsxs(Row, { id: "contact", className: "text-center p-2", children: [_jsx(Col, { xs: 12, sm: 12, md: 4 }), _jsx(Col, { xs: 12, sm: 12, md: 4, children: _jsxs(Form.Group, { controlId: "validationMessage", children: [_jsx(Form.Control, { required: true, as: "textarea", name: "message", placeholder: "Message", className: "me-2 custom-border form-control custom-placeholder message-inp" }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter a message." })] }) }), _jsx(Col, { xs: 12, sm: 12, md: 4 })] }), _jsx(Row, { id: "contact", className: "text-center p-2", children: _jsxs(Col, { className: "text-center", children: [_jsx(Button, { type: "submit", className: "button-custom-color", children: "Submit" }), success && (_jsx("div", { className: "text-success mt-2", children: "Form submitted successfully!" }))] }) }), _jsx(Row, { id: "contact", className: "text-center p-2", children: _jsx(Col, { className: "text-center", children: _jsxs("div", { className: "mb-3 mt-3", children: ["\u00A9 ", currentYear, " Copyright:", _jsx("a", { className: "copyright", href: "https://meabhi.me/", children: " meabhi.me" })] }) }) })] }) }));
};
export default Footer;
