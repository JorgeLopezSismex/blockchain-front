import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

function MainNav() {
  const expand = "sm";
  return (
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/" className="ms-3">
          Sismex - Blockchain
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <Link href="/main/about-us">Blockcerts</Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/main/benefits">Beneficios</Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/main/clients">Clientes</Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/main/pricing">Precios</Link>
              </Nav.Link>

              <Link href="/auth/sign-in">
                <Button className="mx-2" variant="outline-success">
                  Iniciar sesión
                </Button>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MainNav;
