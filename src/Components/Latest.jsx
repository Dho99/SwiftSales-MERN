import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Item from "./Item/Item";
import allProducts from "../assets/Dummy/allProduct";
import formatRupiah from "../assets/js/formatRupiah";

function Latest() {
  return (
    <div className="mt-5 ">
      <Container className="text-light py-5">
        <h3 className="text-center">Popular Products</h3>
        <Row className="d-flex justify-content-center gap-3 w-100">
          {allProducts.map((product, i) => {
            return (
              <Col lg={3} md={5} sm={6} key={i} className="">
                  <Item
                    id={product.id}
                    image={product.image}
                    product_name={product.product_name}
                    old_price={formatRupiah(product.old_price)}
                    new_price={formatRupiah(product.new_price)}
                  ></Item>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Latest;
