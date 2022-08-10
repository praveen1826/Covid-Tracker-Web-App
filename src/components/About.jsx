import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import Badge from "react-bootstrap/Badge";

function About() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="http://www.praveenreddy.tech">
            Covid19 Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="http://www.praveenreddy.tech">Home</Nav.Link>
              <Nav.Link href="https://dashboard.cowin.gov.in/">
                Vaccinations
              </Nav.Link>
              <Nav.Link href="http://www.praveenreddy.tech">Analytics</Nav.Link>
              <Nav.Link href="/#/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "0",
          fontSize: "90px",
        }}
      >
        <Badge bg="primary">Made By Praveen</Badge>
      </div>
    </div>
  );
}

export default About;
