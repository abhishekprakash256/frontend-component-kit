"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/style.css"); // the custom import file
require("../styles/Card.css"); // the custom import file
var CardTemp = function (_a) {
    var card_para = _a.card_para, img_src = _a.img_src, card_url = _a.card_url, card_title = _a.card_title;
    return (<react_bootstrap_1.Card className="">
      <react_bootstrap_1.Card.Img className="card-img-container p-3" variant="top" src={img_src}/>
      <react_bootstrap_1.Card.Body>
        <div className="font-color-class text-center card-title">
          <react_bootstrap_1.Card.Title>{card_title}</react_bootstrap_1.Card.Title>
        </div>
        <react_bootstrap_1.Card.Text className="card-text font-color-class justify-content">
          {card_para}
        </react_bootstrap_1.Card.Text>
        <div className="text-center">
          <react_bootstrap_1.Button className="button-custom-color" href={card_url}>
            Explore
          </react_bootstrap_1.Button>
        </div>
      </react_bootstrap_1.Card.Body>
    </react_bootstrap_1.Card>);
};
exports.default = CardTemp;
