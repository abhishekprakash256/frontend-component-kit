"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Container_1 = require("react-bootstrap/Container");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
require("../styles/style.css"); // the custom import file
require("../styles/More.css"); // the custom import file
var More = function (_a) {
    var more_link = _a.more_link;
    // Ensure the link is absolute
    var normalizedLink = more_link.startsWith('http://') || more_link.startsWith('https://')
        ? more_link
        : "https://".concat(more_link); // Default to HTTPS if no protocol is provided
    return (<Container_1.default>
      <Row_1.default className="">
        <Col_1.default className="text-center">
          <h1 className="animate bounce">
            <a className="text-decoration-none more-color" href={normalizedLink} 
    // target="_blank" // Uncomment if you want links to open in a new tab
    rel="noopener noreferrer" // Security best practices
    >
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </a>
          </h1>
        </Col_1.default>
      </Row_1.default>
    </Container_1.default>);
};
exports.default = More;
