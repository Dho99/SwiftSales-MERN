import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Images/logo.png";
import allProducts from "../assets/Dummy/allProduct";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

function NavbarComponent() {
  const [categoriesState, setCategory] = useState([]);
  const [sluggedCategory, setSluggedCategory] = useState([]);
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const categoriesArray = [];
    const sluggedCategories = [];
    allProducts.map((category) => {
      if (!categoriesArray.includes(category.category)) {
        let categories = category.category;
        categoriesArray.push(categories);
        const slugCategory = categories.replace(/\s+/g, "-");
        sluggedCategories.push(slugCategory);
      }
    });
    setCategory(categoriesArray);
    setSluggedCategory(sluggedCategories);
  }, []);

  return (
    <Navbar
      expand="lg"
      className="bg-dark bg-opacity-75 navbar-dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="180"
            height="100"
            className="img-fluid"
            alt="React Bootstrap logo "
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex ms-auto pe-5">
            <Nav.Link
              href=""
              className={menu === "home" ? "active" : ""}
              onClick={() => {
                setMenu("home");
              }}
            >
              <Link to="/" className="text-decoration-none text-light">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link
              href=""
              className={"pe-2" + (menu === "login" ? "active" : "")}
              onClick={() => {
                setMenu("login");
              }}
            >
              <Link to="/login" className="text-decoration-none text-light">
                Login
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              className="ms-0"
            >
              {categoriesState.map((category, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={() => {
                    setMenu(sluggedCategory[index]);
                  }}
                  className={
                    "navLinkHover " +
                    (menu === sluggedCategory[index] ? "active" : "")
                  }
                >
                  <Link
                    to={"/category/" + category}
                    className="text-decoration-none"
                  >
                    {category}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link
              href=""
              className="bg-primary bg-opacity-50 d-flex position-relative pe-1"
            >
              <Link
                to="/cart"
                className="text-decoration-none text-light d-flex"
              >
                <i className="bi bi-cart h5 m-auto"></i>
                <Badge bg="secondary" className="m-auto ms-2">
                  9
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
