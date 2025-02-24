"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/style.css"); // the custom import file
require("../styles/CustomBody.css"); // the custom import file
var CustomBody = function (_a) {
    var children = _a.children;
    return (<div className="custom-body">
      <react_bootstrap_1.Container>
        <react_bootstrap_1.Row>
          <react_bootstrap_1.Col>{children}</react_bootstrap_1.Col>
        </react_bootstrap_1.Row>
      </react_bootstrap_1.Container>
    </div>);
};
exports.default = CustomBody;
