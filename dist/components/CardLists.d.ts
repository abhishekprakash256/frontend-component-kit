import React from "react";
import '../styles/style.css';
import '../styles/Card.css';
interface CardExpProps {
    card_para: string;
    img_src: string;
    card_url: string;
    card_title: string;
}
interface CardExpListProps {
    cardData: CardExpProps[];
}
declare const CardLists: React.FC<CardExpListProps>;
export default CardLists;
