"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/style.css"); // Custom CSS
require("../styles/ArticleImage.css"); // Custom CSS
var ArticleImage = function (_a) {
    var image_link = _a.image_link;
    return (<react_bootstrap_1.Container>
      <react_bootstrap_1.Row className="rounded background-color-body mt-3 p-2">
        <react_bootstrap_1.Col className="text-center">

        <img src={image_link} className="img-fluid rounded mt-2 mb-2" alt="Article"></img>
  
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </react_bootstrap_1.Container>);
};
exports.default = ArticleImage;
