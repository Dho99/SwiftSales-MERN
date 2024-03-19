import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import heroimage from "../../assets/Images/hero.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bannerImage from "../../assets/Images/logo.png"

function Hero() {
  return (
    <div>
      <Container className="mt-5 pb-5">
        <Row>
          <Col lg={6} className="d-flex align-items-center order-lg-1 order-2 mt-lg-0 mt-5">
            <div className="d-block text-light">
              <Image src={bannerImage} className="img-fluid w-75"></Image>
              <h2 className="mt-3">Shop Everywhere</h2>
              {/* <h5>With</h5> */}
            </div>
          </Col>
          <Col lg={6} className="m-0 p-0 order-lg-2 order-1 d-lg-block d-none">
            <Image src={heroimage} className="img-fluid" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
