"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/style.css"); // Custom CSS
require("../styles/HeadingBar.css"); // Custom CSS
var HeadingBar = function (_a) {
    var title = _a.title;
    return (<react_bootstrap_1.Container>
      <react_bootstrap_1.Row className="rounded background-color-body mt-3 p-2">
        <react_bootstrap_1.Col className="text-center">
          <h1 className="bio-font font-color-class heading-responsive-font m-0">
            {title}
          </h1>
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </react_bootstrap_1.Container>);
};
exports.default = HeadingBar;
