import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Container from "react-bootstrap/Container";
import Item from "../Components/Item/Item";
import formatRupiah from "../assets/js/formatRupiah";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ShopCategory = (props) => {
  // console.log(props.category);
  const allProductContext = useContext(ShopContext);
  const allProduct = allProductContext.allProducts;
  return ( 
    <div className="container py-5 my-3">
      <h1 className="text-light text-center">{props.category}</h1>
      <Container className="py-3 d-flex justify-content-center">
        <Row>
          {allProduct.map((p, i) => {
            if (p.category === props.category) {
              return (
                <Col key={i}>
                  <Item
                    id={p.id}
                    image={p.image}
                    product_name={p.product_name}
                    old_price={formatRupiah(p.old_price)}
                    new_price={formatRupiah(p.new_price)}
                  />
                </Col>
              );
            } else {
              return null;
            }
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ShopCategory;
