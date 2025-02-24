"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Container_1 = require("react-bootstrap/Container");
var Row_1 = require("react-bootstrap/Row");
var Col_1 = require("react-bootstrap/Col");
var react_markdown_1 = require("react-markdown");
require("../styles/style.css"); // Custom styles
require("../styles/MarkDown.css"); // Custom styles
var MarkDown = function (_a) {
    var mark_down_data = _a.mark_down_data;
    return (<Container_1.default>
      <Row_1.default className="rounded background-color-body mt-3 p-2">
        <Col_1.default>
          {/* Wrap ReactMarkdown in a div and apply className to the div */}
          <div className="mb-0 font-color-class bio-desc markdown-body">
            <react_markdown_1.default>{mark_down_data}</react_markdown_1.default>
          </div>
        </Col_1.default>
      </Row_1.default>
    </Container_1.default>);
};
exports.default = MarkDown;
