import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const FoodItem = (props) => {
    const {category,image,title,price} =props.data;
    return (
        <div class="col-sm-4" >
            <CardGroup  >
  <Card >
    <Card.Img variant="top" src={image}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">${price}</small>
    </Card.Footer>
  </Card>
  </CardGroup>
        </div>
    );
};

export default FoodItem;