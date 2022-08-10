import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Cases() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Covid19 Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="http://www.praveenreddy.tech">Home</Nav.Link>
                <Nav.Link href="https://dashboard.cowin.gov.in/">
                  Vaccinations
                </Nav.Link>
                <Nav.Link href="http://www.praveenreddy.tech">
                  Analytics
                </Nav.Link>
                <Nav.Link href="/#/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 style={{ textAlign: "center" }}>Todays Cases In Andhra Pradesh</h1>
        <div className="d-flex justify-content-center">
          <Card
            className="example-square bg-danger shadow-1-strong"
            style={{
              width: "18rem",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Confirmed</Card.Title>
              <Card.Text style={{ color: "white" }}>{0}</Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="example-square bg-primary shadow-1-strong"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Active</Card.Title>
              <Card.Text style={{ color: "white" }}>11558</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="example-square bg-success shadow-1-strong"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Recovered</Card.Title>
              <Card.Text style={{ color: "white" }}>{0}</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className="example-square bg-dark shadow-1-strong"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title style={{ color: "white" }}>Deceased</Card.Title>
              <Card.Text style={{ color: "white" }}>{0}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <p className="text-primary" style={{ fontSize: "20px" }}>
          Coronavirus disease 2019 (COVID-19) is a contagious disease caused by
          a virus, the severe acute respiratory syndrome coronavirus 2
          (SARS-CoV-2). The first known case was identified in Wuhan, China, in
          December 2019. The disease has since spread worldwide, leading to an
          ongoing pandemic.{" "}
        </p>

        <p className="text-primary" style={{ fontSize: "20px" }}>
          Symptoms of COVID-19 are variable, but often include fever, cough,
          headache, fatigue, breathing difficulties, loss of smell, and loss of
          taste. Symptoms may begin one to fourteen days after exposure to the
          virus. At least a third of people who are infected do not develop
          noticeable symptoms. Of those people who develop symptoms noticeable
          enough to be classed as patients, most (81%) develop mild to moderate
          symptoms (up to mild pneumonia), while 14% develop severe symptoms
          (dyspnea, hypoxia, or more than 50% lung involvement on imaging), and
          5% suffer critical symptoms (respiratory failure, shock, or multiorgan
          dysfunction). Older people are at a higher risk of developing severe
          symptoms. Some people continue to experience a range of effects (long
          COVID) for months after recovery, and damage to organs has been
          observed.Multi-year studies are underway to further investigate the
          long-term effects of the disease.
        </p>
      </div>
    </div>
  );
}

export default Cases;
