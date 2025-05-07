import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Button } from "react-bootstrap";
import '../styles/style.css'; // the custom import file
import '../styles/Card.css'; // the custom import file
const CardTemp = ({ card_para, img_src, card_url, card_title }) => {
    return (_jsxs(Card, Object.assign({ className: "" }, { children: [_jsx(Card.Img, { className: "card-img-container p-3", variant: "top", src: img_src }), _jsxs(Card.Body, { children: [_jsx("div", Object.assign({ className: "font-color-class text-center card-title" }, { children: _jsx(Card.Title, { children: card_title }) })), _jsx(Card.Text, Object.assign({ className: "card-text font-color-class justify-content" }, { children: card_para })), _jsx("div", Object.assign({ className: "text-center" }, { children: _jsx(Button, Object.assign({ className: "button-custom-color", href: card_url }, { children: "Explore" })) }))] })] })));
};
export default CardTemp;
