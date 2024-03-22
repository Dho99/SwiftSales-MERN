import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import "../../assets/css/Breadcrumb.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function ShowProduct(props) {

  const product = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/category/${product.category}`}>{product.category}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-light">
            {product.product_name}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container fluid className="">
        <h3 className="text-center text-light">
          Showing Products {product.product_name}
        </h3>
        <Container className="my-5 d-flex justify-content-center">
          <Container>
            <div className="bg-light rounded py-3">
              <Row className="d-flex align-items-center w-100">
                <Col lg={6}>
                  <img
                    src={product.image}
                    alt="Product Image"
                    className="img-fluid rounded w-75 d-flex m-auto"
                  />
                </Col>
                <Col lg={6}>
                  <Row className="d-flex mt-lg-0 mt-md-5 px-5">
                    <Col lg={7}>
                      <h5>Product Name :</h5>
                      <p>{product.product_name}</p>
                    </Col>
                    <Col lg={5}>
                      <h5>Category :</h5>
                      <p>{product.category}</p>
                    </Col>
                    <Col lg={7}>
                      <h5>Old Price :</h5>
                      <p className="text-decoration-line-through text-danger">
                        {product.old_price}
                      </p>
                    </Col>
                    <Col lg={5}>
                      <h5>New Price :</h5>
                      <p>{product.new_price}</p>
                    </Col>
                    <Col>
                      <Button className="btn btn-primary d-flex align-items-center py-0" onClick={() => addToCart(product.id)}>
                        <i className="bi bi-cart-plus me-3 fs-4"></i>
                        <span className="fs-6">Add To Cart</span>
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col className="my-5 px-5">
                    <Tabs
                      defaultActiveKey="home"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="home" title="Descriptions">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, saepe quos placeat eius aliquid debitis excepturi. Assumenda libero ut ab voluptatibus deserunt recusandae, ipsum delectus aperiam cupiditate praesentium. Optio illo maiores in iure sint saepe dolore neque doloribus repudiandae! Libero ipsum impedit dolores cupiditate similique error, minima labore atque, est exercitationem dolorem at perspiciatis qui quidem ratione facere inventore aut saepe pariatur illo obcaecati eaque. Debitis impedit accusamus quidem voluptatibus quibusdam eos voluptates quo non suscipit ex, harum corporis. Dignissimos rerum iure nulla, suscipit reiciendis iste quasi eos! Totam numquam a, nihil quis neque eveniet officiis ratione vitae perferendis nisi!
                      </Tab>
                      <Tab eventKey="profile" title="Ratings">
                        Tab content for Ratings
                      </Tab>
                    </Tabs>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default ShowProduct;
