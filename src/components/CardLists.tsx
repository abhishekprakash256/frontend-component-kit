/*
The componet to display max cards and leave space for cards as well , the paignation login is not there
*/

"use client";
import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import '../styles/style.css';
import '../styles/Card.css';

// Define CardExp First
const CardExp: React.FC<CardExpProps> = ({ card_para, img_src, card_url, card_title }) => {
  //console.log("✅ CardExp is rendering:", { card_title, card_para, img_src, card_url });
  return (
    <Card className="">
      <Card.Img className="card-img-container p-3 " variant="top" src={`/images/${img_src}`} />
      <Card.Body>
        <div className="font-color-class text-center card-title">
          <Card.Title>{card_title}</Card.Title>
        </div>
        <Card.Text className="card-text font-color-class justify-content">
          {card_para}
        </Card.Text>
        <div className="text-center">
        <a href={card_url} style={{ color: 'inherit', textDecoration: 'none' }}>
          Explore
        </a>
        </div>
      </Card.Body>
    </Card>
  );
};

// Interfaces
interface CardExpProps {
  card_para: string;
  img_src: string;
  card_url: string;
  card_title: string;
}

interface CardExpListProps {
  cardData: CardExpProps[];
}

// ✅ Then Define CardLists
const CardLists: React.FC<CardExpListProps> = ({ cardData }) => {
  //console.log("✅ CardLists is rendering with data:", cardData);
  return (
    <Row>
      {cardData.map((card, index) => (
        <Col key={index} xs={12} sm={12} md={4} className="mt-3">
          <CardExp 
            card_title={card.card_title} 
            card_para={card.card_para} 
            img_src={card.img_src} 
            card_url={card.card_url} 
          />
        </Col>
      ))}
    </Row>
  );
};

export default CardLists;

