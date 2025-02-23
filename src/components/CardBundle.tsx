import React from "react";
import { Row, Col } from "react-bootstrap";
import '../styles/style.css'; // the custom import file
import '../styles/Card.css'; // the custom import file
import Card from "./Card";

interface CardData {
  card_title: string;
  card_para: string;
  img_src: string;
  card_url: string;
}

const CardBundle: React.FC = () => {
  const cardData: CardData[] = [
    {
      card_title: "Card Title 1",
      card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems. ",
      img_src: "cards.jpg",  /* the image file is in the public folder */
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
      img_src: "image_1.png",  /* the image file is in the public folder */
      card_url: "https://example.com/card3",
    },
    {
      card_title: "Card Title 4",
      card_para: "System design is a multidisciplinary field that encompasses various aspects of designing distributed systems.",
      img_src: "image_1.png",
      card_url: "https://example.com/card4",
    },
  ];

  return (
    <Row>
      {cardData.map((card, index) => (
        <Col key={index} xs={12} sm={12} md={4} className="mt-3">
          <Card
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

export default CardBundle;
