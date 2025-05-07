/*
The componet to display max cards and leave space for cards as well , the paignation login is not there
*/
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Row, Col } from "react-bootstrap";
import '../styles/style.css';
import '../styles/Card.css';
// Define CardExp First
const CardExp = ({ card_para, img_src, card_url, card_title }) => {
    //console.log("✅ CardExp is rendering:", { card_title, card_para, img_src, card_url });
    return (_jsxs(Card, Object.assign({ className: "" }, { children: [_jsx(Card.Img, { className: "card-img-container p-3 ", variant: "top", src: `/images/${img_src}` }), _jsxs(Card.Body, { children: [_jsx("div", Object.assign({ className: "font-color-class text-center card-title" }, { children: _jsx(Card.Title, { children: card_title }) })), _jsx(Card.Text, Object.assign({ className: "card-text font-color-class justify-content" }, { children: card_para })), _jsx("div", Object.assign({ className: "text-center" }, { children: _jsx("a", Object.assign({ href: card_url, style: { color: 'inherit', textDecoration: 'none' } }, { children: "Explore" })) }))] })] })));
};
// ✅ Then Define CardLists
const CardLists = ({ cardData }) => {
    //console.log("✅ CardLists is rendering with data:", cardData);
    return (_jsx(Row, { children: cardData.map((card, index) => (_jsx(Col, Object.assign({ xs: 12, sm: 12, md: 4, className: "mt-3" }, { children: _jsx(CardExp, { card_title: card.card_title, card_para: card.card_para, img_src: card.img_src, card_url: card.card_url }) }), index))) }));
};
export default CardLists;
