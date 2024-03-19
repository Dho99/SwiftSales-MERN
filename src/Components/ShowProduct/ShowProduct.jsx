import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ShowProduct(props) {
  return (
    <Container fluid className="py-5">
      <h3 className="text-center text-light">
        Showing Products {props.product_name}
      </h3>
      <Container className="my-5 d-flex justify-content-center">
        <Card className="">
          <Card.Body>
            <Row className="d-flex w-100 m-0 p-0 align-items-center">
              <Col lg={6}>
                <img
                  src={props.image}
                  alt="Product Image"
                  className="img-fluid rounded w-75 d-flex m-auto"
                />
              </Col>
              <Col lg={6}>
                <Card.Text>
                  <Container>
                    <Row className="d-flex mt-lg-0 mt-md-5">
                      <Col lg={7}>
                        <h5>Product Name :</h5>
                        <p>{props.product_name}</p>
                      </Col>
                      <Col lg={5}>
                        <h5>Category :</h5>
                        <p>{props.category}</p>
                      </Col>
                      <Col lg={7}>
                        <h5>Old Price :</h5>
                        <p className="text-decoration-line-through text-danger">{props.old_price}</p>
                      </Col>
                      <Col lg={5}>
                        <h5>New Price :</h5>
                        <p>{props.new_price}</p>
                      </Col>
                      <Col className="mt-3 mb-4 m-auto" lg={10}>
                        <Button className="btn btn-primary d-flex align-items-center"><i className="bi bi-cart-plus me-3 fs-4"></i><span className="fs-6">Add To Cart</span></Button>
                      </Col>
                      {/* <Col className="mt-3 mb-4" lg={5}>
                        <Button className="btn btn-primary d-flex align-items-center"><i className="bi bi-cart-plus me-3 fs-4"></i><span className="fs-6">Add To Cart</span></Button>
                      </Col> */}
                    </Row>
                  </Container>
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default ShowProduct;
