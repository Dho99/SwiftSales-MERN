import React from "react";
import Card from "react-bootstrap/Card";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/product/${props.id}`}><Card.Img variant="top" src={props.image} /></Link>
      <Card.Body>
        <Card.Text>
          <Row className="w-100 gap-3">
            <Col>
                <h5>Product Name :</h5>
                <h5>{props.product_name}</h5>
            </Col>
            <Col>
                <h5>Old Price :</h5>
                <h5>{props.old_price}</h5>
            </Col>
            <Col>
                <h5>New Price :</h5>
                <h5>{props.new_price}</h5>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
