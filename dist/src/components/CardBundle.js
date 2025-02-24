"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
require("../styles/style.css"); // the custom import file
require("../styles/Card.css"); // the custom import file
var Card_1 = require("./Card");
var CardBundle = function () {
    var cardData = [
        {
            card_title: "Card Title 1",
            card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems. ",
            img_src: "cards.jpg", /* the image file is in the public folder */
            card_url: "https://example.com/card1",
        },
        {
            card_title: "Card Title 2",
            card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
            img_src: "federated-learning-flow.png", /* the image file is in the public folder */
            card_url: "https://example.com/card2",
        },
        {
            card_title: "Card Title 3",
            card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
            img_src: "image_1.png", /* the image file is in the public folder */
            card_url: "https://example.com/card3",
        },
        {
            card_title: "Card Title 4",
            card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
            img_src: "image_1.png",
            card_url: "https://example.com/card4",
        },
    ];
    return (<react_bootstrap_1.Row>
      {cardData.map(function (card, index) { return (<react_bootstrap_1.Col key={index} xs={12} sm={12} md={4} className="mt-3">
          <Card_1.default card_title={card.card_title} card_para={card.card_para} img_src={card.img_src} card_url={card.card_url}/>
        </react_bootstrap_1.Col>); })}
    </react_bootstrap_1.Row>);
};
exports.default = CardBundle;
