/*
The cards paignantion that puts 9 cards in one page and if less no other page 

*/


"use client";
import React, { useState } from "react";
import { Card, Button, Row, Col, Container, Pagination } from "react-bootstrap";
import '../styles/style.css';
import '../styles/Card.css';
import '../styles/PaignatationExp.css'; // the custom import file



// Card Component

const CardExp: React.FC<CardExpProps> = ({ card_para, img_src, card_url, card_title }) => {
  //console.log("CardExp is rendering:", { card_title, card_para, img_src, card_url });
  

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
        <Button className="button-custom-color">
        <a href={card_url} style={{ color: 'inherit', textDecoration: 'none' }}>
          Explore
        </a>
      </Button>
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

// Main Component with Pagination
const CardsPaignation: React.FC<CardExpListProps> = ({ cardData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // set the number of cards per page 
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  // Slice data for current page
  const currentCards = cardData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };



  return (
    <Container className="p-0">
      <Row className="">
        {currentCards.map((card, index) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
            <Row className="rounded background-color-body mt-3 p-3 justify-content-center m-0">
                <Col className="text-center">
          <Pagination size="sm" className="justify-content-center">
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item 
                key={i + 1} 
                active={i + 1 === currentPage} 
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}

            <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CardsPaignation;
