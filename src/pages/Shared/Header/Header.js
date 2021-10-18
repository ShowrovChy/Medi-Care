import React from "react";
import "./Header.css";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" nav-container container-fluid ">
      <Navbar className="  container" expand="lg">
        <Navbar.Brand>
          <h2 className="d-inline-block logo-color mt-1 fw-bold">MediCare</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex align-items-center pt-2 "
            style={{ maxHeight: "240px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="mt-1 text-dark menuText">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mt-1 text-dark menuText">
              About us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className=" mt-1 text-dark menuText"
            >
              Contact
            </Nav.Link>

            <Button className="btn-style loginStyle  bg-transparent  border-info ms-3 mt-1">
              <Nav.Link
                as={Link}
                to="/login"
                className=" p-0 text-dark loginText "
              >
                {" "}
                Login
              </Nav.Link>
            </Button>
            <Button className="btn-style  sign-btn  ms-3 mt-1  border-0">
              <Nav.Link as={Link} to="/signup" className=" text-white p-0">
                {" "}
                Sign up
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
