import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {Card, CardDeck, Form} from 'react-bootstrap';
import { Component } from 'react';


function Categories(props) {
  return (
    <>
      <div className="title">
        <Form inline>
          <button id="see-all">See all Categories</button>
        </Form>
        <h3>Choice favourite course from top category</h3>
      </div>
      <CardDeck className="none"></CardDeck>
      {/* Because the first card deck always align to right. */}
      <CardDeck>
        <RowCategories data={props.data} />
      </CardDeck>
    </>
  );
}
function RowCategories(props) {
  var rows = [];
  for (var i = 0; i < props.data.length; i++) {
    rows.push(CategoryCard(props.data[i]));
  }
  return rows;
}

function CategoryCard(props) {
  return (
    <Card className="category-card" style={{backgroundColor: props.backcolor}}>
      <Card.Img variant="top" src={props.icon} />
      <Card.Body >
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Categories;
