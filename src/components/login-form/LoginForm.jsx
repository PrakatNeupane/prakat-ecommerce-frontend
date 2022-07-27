import React, { useState, useRef } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import "./loginForm.css";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  email: "prabal@gmail.com",
  password: "123",
};
// useRef=> using data within the component without causing it to rerender
// with handleOnChange, we store the value in a state and state updates everytime the component rerenders. thats what is avoided with useRef
const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  // pull data from the redux store
  const { isLoading, response } = useSelector((state) => state.signInUp);

  const emailRef = useRef();
  const passRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    if (!email || !pass) {
      return alert("Both input fields must be filled");
    }
  };

  return (
    <Container>
      <div className="form-content mb-5 mt-5">
        <h1>Welcome back !!</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef} // trying to grab value as uncontrolled input field => create a reference point to this input field such as getElementById
              name="password"
              type="password"
              placeholder="Password"
              required
            />
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
                "Log In"
              )}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default LoginForm;
