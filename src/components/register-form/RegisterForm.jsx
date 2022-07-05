import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import "./registerForm.css";

const RegisterForm = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    // console.log(form);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, password } = form;
    password === confirmPassword ? setError(false) : setError(true);
    console.log(error);
    console.log(form);
  };

  return (
    <Container>
      <div className="form-content mb-5 mt-5">
        <h1>Register Form</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="fName"
              onChange={handleOnChange}
              type="text"
              placeholder="Sam"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lName"
              onChange={handleOnChange}
              type="text"
              placeholder="Smith"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              name="dob"
              onChange={handleOnChange}
              type="date"
              placeholder="1996/01/01"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              onChange={handleOnChange}
              type="text"
              placeholder="55 Street Road"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone </Form.Label>
            <Form.Control
              name="phone"
              onChange={handleOnChange}
              type="text"
              placeholder="0232424521"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={handleOnChange}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
              required
            />

            <Alert variant="danger" show={error}>
              Passwords do not match
            </Alert>
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
