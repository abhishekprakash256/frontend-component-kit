"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("react-bootstrap/Button");
var Container_1 = require("react-bootstrap/Container");
var Form_1 = require("react-bootstrap/Form");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
require("../styles/style.css"); // Custom CSS
require("../styles/Footer.css"); // Custom CSS
var Footer = function () {
    var _a = (0, react_1.useState)(false), validated = _a[0], setValidated = _a[1];
    var currentYear = new Date().getFullYear(); // Dynamically get the current year
    var handleSubmit = function (event) {
        event.preventDefault();
        var form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (<Container_1.default fluid className="footer-header-color ">
      <Form_1.default noValidate validated={validated} onSubmit={handleSubmit}>
        <Row_1.default id="contact" className="text-center">
          <Col_1.default className="text-center">
            <h1 className="bio-font font-color-class heading-responsive-font p-2 mt-3">
              Contact Me
            </h1>
          </Col_1.default>
        </Row_1.default>

        <Row_1.default id="contact" className="text-center p-2">
          <Col_1.default xs={12} sm={12} md={4}></Col_1.default>
          <Col_1.default xs={12} sm={12} md={4}>
            <Form_1.default.Group controlId="validationName">
              <Form_1.default.Control required type="text" placeholder="Name" className="me-2 custom-border form-control custom-placeholder"/>
              <Form_1.default.Control.Feedback type="invalid">
                Please provide your name.
              </Form_1.default.Control.Feedback>
            </Form_1.default.Group>
          </Col_1.default>
          <Col_1.default xs={12} sm={12} md={4}></Col_1.default>
        </Row_1.default>

        <Row_1.default id="contact" className="text-center p-2">
          <Col_1.default xs={12} sm={12} md={4}></Col_1.default>
          <Col_1.default xs={12} sm={12} md={4}>
            <Form_1.default.Group controlId="validationEmail">
              <Form_1.default.Control required type="email" placeholder="Email" className="me-2 custom-border form-control custom-placeholder"/>
              <Form_1.default.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form_1.default.Control.Feedback>
            </Form_1.default.Group>
          </Col_1.default>
          <Col_1.default xs={12} sm={12} md={4}></Col_1.default>
        </Row_1.default>

        <Row_1.default id="contact" className="text-center p-2">
          <Col_1.default xs={12} sm={12} md={4}></Col_1.default>
          <Col_1.default xs={12} sm={12} md={4}>
            <Form_1.default.Group controlId="validationMessage">
              <Form_1.default.Control required as="textarea" placeholder="Message" className="me-2 custom-border form-control custom-placeholder message-inp"/>
              <Form_1.default.Control.Feedback type="invalid">
                Please enter a message.
              </Form_1.default.Control.Feedback>
            </Form_1.default.Group>
          </Col_1.default>
          <Col_1.default xs={12} sm={12} md={4}></Col_1.default>
        </Row_1.default>

        <Row_1.default id="contact" className="text-center p-2">
          <Col_1.default className="text-center">
            <Button_1.default type="submit" className="button-custom-color">
              Submit
            </Button_1.default>
          </Col_1.default>
        </Row_1.default>

        {/* Dynamically generate the current year */}
        <Row_1.default id="contact" className="text-center p-2">
          <Col_1.default className="text-center">
            <div className="mb-3 mt-3">
              © {currentYear} Copyright:  
              <a className="copyright" href="https://meabhi.me/"> meabhi.me</a>
            </div>
          </Col_1.default>
        </Row_1.default>
      </Form_1.default>
    </Container_1.default>);
};
exports.default = Footer;
