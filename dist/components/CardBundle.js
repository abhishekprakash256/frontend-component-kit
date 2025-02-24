import { jsx as _jsx } from "react/jsx-runtime";
import { Row, Col } from "react-bootstrap";
import '../styles/style.css'; // the custom import file
import '../styles/Card.css'; // the custom import file
import Card from "./Card";
const CardBundle = () => {
    const cardData = [
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
    return (_jsx(Row, { children: cardData.map((card, index) => (_jsx(Col, { xs: 12, sm: 12, md: 4, className: "mt-3", children: _jsx(Card, { card_title: card.card_title, card_para: card.card_para, img_src: card.img_src, card_url: card.card_url }) }, index))) }));
};
export default CardBundle;
