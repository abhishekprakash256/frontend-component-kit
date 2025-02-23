import React from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/style.css'; // the custom import file
import '../styles/Card.css'; // the custom import file

interface CardTempProps {
  card_para: string;
  img_src: string;
  card_url: string;
  card_title: string;
}

const CardTemp: React.FC<CardTempProps> = ({ card_para, img_src, card_url, card_title }) => {
  return (
    <Card className="">
      <Card.Img className="card-img-container p-3" variant="top" src={img_src} />
      <Card.Body>
        <div className="font-color-class text-center card-title">
          <Card.Title>{card_title}</Card.Title>
        </div>
        <Card.Text className="card-text font-color-class justify-content">
          {card_para}
        </Card.Text>
        <div className="text-center">
          <Button className="button-custom-color" href={card_url}>
            Explore
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardTemp;
