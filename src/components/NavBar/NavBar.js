import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import pdf from "../../pages/Aboutme/resumeats.pdf";

export default function NavTop() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav">
      <Navbar.Brand to="/" as={Link}>
        Jessica Whitman
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link to="/" as={Link}>
            About Me
          </Nav.Link>
          <Nav.Link eventKey={2} to="/portfolio" as={Link}>
            Portfolio
          </Nav.Link>
          <Nav.Link eventKey={2} href={pdf}>
            Resume
          </Nav.Link>
          <Nav.Link eventKey={2} to="/contact" as={Link}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
