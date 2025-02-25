/*
The component to make the paignanton only the paignation bar
*/

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/style.css'; // the custom import file
import '../styles/PaignatationExp.css'; // the custom import file
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];

for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const PaginationExp: React.FC = () => {
return (
<Container>
    <Row className="rounded background-color-body mt-3 p-3 justify-content-center">
        <Col className="text-center">
            <Pagination size="sm" className="justify-content-center">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Ellipsis />
                {items}
                <Pagination.Ellipsis />
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </Col>
    </Row>
</Container>
            
    );
  };

export default PaginationExp;