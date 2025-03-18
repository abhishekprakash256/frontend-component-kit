/*
The cards paignantion that puts 9 cards in one page and if less no other page

*/
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, Button, Row, Col, Container, Pagination } from "react-bootstrap";
import '../styles/style.css';
import '../styles/Card.css';
import '../styles/PaignatationExp.css'; // the custom import file
// Card Component
const CardExp = ({ card_para, img_src, card_url, card_title }) => {
    //console.log("CardExp is rendering:", { card_title, card_para, img_src, card_url });
    return (_jsxs(Card, { className: "", children: [_jsx(Card.Img, { className: "card-img-container p-3", variant: "top", src: `/images/${img_src}` }), _jsxs(Card.Body, { children: [_jsx("div", { className: "font-color-class text-center card-title", children: _jsx(Card.Title, { children: card_title }) }), _jsx(Card.Text, { className: "card-text font-color-class justify-content", children: card_para }), _jsx("div", { className: "text-center", children: _jsx(Button, { className: "button-custom-color", onClick: () => window.location.href = card_url, children: "Explore" }) })] })] }));
};
// Main Component with Pagination
const CardsPaignation = ({ cardData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9; // set the number of cards per page 
    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    // Slice data for current page
    const currentCards = cardData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (_jsxs(Container, { className: "p-0", children: [_jsx(Row, { className: "", children: currentCards.map((card, index) => (_jsx(Col, { xs: 12, sm: 12, md: 4, className: "mt-3", children: _jsx(CardExp, { card_title: card.card_title, card_para: card.card_para, img_src: card.img_src, card_url: card.card_url }) }, index))) }), totalPages > 1 && (_jsx(Row, { className: "rounded background-color-body mt-3 p-3 justify-content-center m-0", children: _jsx(Col, { className: "text-center", children: _jsxs(Pagination, { size: "sm", className: "justify-content-center", children: [_jsx(Pagination.First, { onClick: () => handlePageChange(1), disabled: currentPage === 1 }), _jsx(Pagination.Prev, { onClick: () => handlePageChange(currentPage - 1), disabled: currentPage === 1 }), [...Array(totalPages)].map((_, i) => (_jsx(Pagination.Item, { active: i + 1 === currentPage, onClick: () => handlePageChange(i + 1), children: i + 1 }, i + 1))), _jsx(Pagination.Next, { onClick: () => handlePageChange(currentPage + 1), disabled: currentPage === totalPages }), _jsx(Pagination.Last, { onClick: () => handlePageChange(totalPages), disabled: currentPage === totalPages })] }) }) }))] }));
};
export default CardsPaignation;
