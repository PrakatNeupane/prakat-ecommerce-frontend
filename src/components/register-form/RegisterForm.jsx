import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import "./registerForm.css";
import { useDispatch, useSelector } from "react-redux";
import { postUserAction } from "../../pages/register-login/signInUpAction";

const initialState = {
  fName: "Prakat",
  lName: "Neupane",
  email: "prakat@gmail.com",
  password: "123",
  phone: "9841444488",
  confirmPassword: "123",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);

  // pull data from the redux store
  const { isLoading, response } = useSelector((state) => state.signInUp);

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
    if (form.password !== form.confirmPassword) {
      return setError(true);
    }
    setError(false);
    console.log(form);

    const { confirmPassword, ...rest } = form;
    // dispatch the action to the reducer here
    dispatch(postUserAction(rest));
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
              value={form.fName}
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
              value={form.lName}
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
              value={form.phone}
              onChange={handleOnChange}
              type="text"
              placeholder="0232424521"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={form.email}
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
              value={form.password}
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
              value={form.confirmPassword}
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
              required
            />

            <Alert variant="danger" show={error}>
              Passwords do not match
            </Alert>
          </Form.Group>

          <Form.Group>
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {response.message}
              </Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Button type="submit">
              {isLoading ? (
                <Spinner variant="primary" animation="border" size="sm" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterForm;
