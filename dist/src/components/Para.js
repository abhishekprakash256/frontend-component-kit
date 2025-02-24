"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/style.css"); // Custom CSS
require("../styles/Para.css"); // Custom CSS
var Para = function (_a) {
    var description = _a.description;
    return (<react_bootstrap_1.Container>
      <react_bootstrap_1.Row className="rounded background-color-body mt-3 p-2">
        <react_bootstrap_1.Col>
          <p className="mb-2 mt-2 font-color-class bio-desc justify-content" dangerouslySetInnerHTML={{ __html: description }} // Allows rendering HTML
    />
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </react_bootstrap_1.Container>);
};
exports.default = Para;
