import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../system-state/systemSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="md">
        <Container>
          <Button variant="primary" onClick={() => dispatch(toggleSidebar())}>
            <i class="fa-solid fa-bars"></i>
          </Button>
          <LinkContainer to="/">
            <Navbar.Brand>PR e-shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/register" className="nav-link">
                Register
              </Link>
              <Link to="/" className="nav-link">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
