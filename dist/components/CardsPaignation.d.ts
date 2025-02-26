import React from "react";
import '../styles/style.css';
import '../styles/Card.css';
import '../styles/PaignatationExp.css';
interface CardExpProps {
    card_para: string;
    img_src: string;
    card_url: string;
    card_title: string;
}
interface CardExpListProps {
    cardData: CardExpProps[];
}
declare const CardsPaignation: React.FC<CardExpListProps>;
export default CardsPaignation;
