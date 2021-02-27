import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import pdf from "../../pages/Aboutme/resume.pdf";

export default function NavTop() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav">
      <Navbar.Brand href="/">Jessica Whitman</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/">About Me</Nav.Link>
          <Nav.Link eventKey={2} href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link eventKey={2} href={pdf}>
            Resume
          </Nav.Link>
          <Nav.Link eventKey={2} href="/React-Portfolio/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
