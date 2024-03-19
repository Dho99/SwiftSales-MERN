import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function LoginSignUp() {
  return (
    <Container className="w-100 d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "18rem" }} className="w-auto py-4 px-4 mb-5">
        <Card.Body>
          <Card.Title className="text-center fw-bold fs-3">Sign Up</Card.Title>
          <Card.Text>
            <Container>
              <Form>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-2">
                  Submit
                </Button>
                <small className="">Already have an Account ? Sign in <a href="" className="text-primary">Here</a></small>
                <Form.Group className="my-2" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="By Continuing, I agree to the terms of use & privacy policy." />
                </Form.Group>
              </Form>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginSignUp;
