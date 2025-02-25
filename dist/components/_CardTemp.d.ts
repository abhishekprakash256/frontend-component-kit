import React from "react";
import '../styles/style.css';
import '../styles/Card.css';
interface CardTempProps {
    card_para: string;
    img_src: string;
    card_url: string;
    card_title: string;
}
declare const CardTemp: React.FC<CardTempProps>;
export default CardTemp;
