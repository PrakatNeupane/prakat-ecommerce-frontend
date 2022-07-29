import React, { useRef } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import "./loginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAction } from "../../pages/register-login/signInUpAction";

// useRef=> using data within the component without causing it to rerender
// with handleOnChange, we store the value in a state and state updates everytime the component rerenders. thats what is avoided with useRef
const LoginForm = () => {
  const dispatch = useDispatch();

  // pull data from the redux store
  const { isLoading } = useSelector((state) => state.signInUp);

  const emailRef = useRef();
  const passRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (!email || !password) {
      return alert("Both input fields must be filled");
    }
    dispatch(postLoginAction({ email, password }));
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
              value="a@a.com"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef} // trying to grab value as uncontrolled input field => create a reference point to this input field such as getElementById
              name="password"
              value="1234"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Button type="submit">
              {isLoading ? (
                <Spinner variant="danger" animation="border" size="sm" />
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
