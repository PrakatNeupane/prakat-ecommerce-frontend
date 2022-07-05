import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./registerForm.css";

const RegisterForm = () => {
  return (
    <Container>
      <div className="form-content mb-5 mt-5">
        <h1>Register Form</h1>
        <hr />
        <Form className="registration-form-content">
          <Form.Group className="mb-3" controlId="formBasicPassword" required>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Sam" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" required>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Smith" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="1996/01/01" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="55 Street Road" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone </Form.Label>
            <Form.Control type="text" placeholder="0232424521" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" required>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" required>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" required>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Button type="submit">Sign Up</Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterForm;
