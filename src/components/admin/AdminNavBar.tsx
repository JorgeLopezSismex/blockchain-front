import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";

import { EnvelopeFill } from "react-bootstrap-icons";

export default function AdminNavBar() {
  const expand = "xs";
  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <Navbar bg="primary" key={expand} expand={expand} data-bs-theme="dark">
      <Container fluid>
        <div className="d-flex align-items-center">
          <Navbar.Toggle
            onClick={toggleOffCanvas}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Brand href="#">Blockchain - Admin</Navbar.Brand>
        </div>

        <Navbar.Brand href="#">Blockchain - Admin</Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          show={show}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton onHide={toggleOffCanvas}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="">
              <Link href={"/../admin/issuers"}>Emisores</Link>
              <Link href={"/../admin/invitations"}>Invitaciones</Link>
              <Link href={"/../admin/certificates"}>Certificados</Link>
              <Link href={"/../admin/log"}>Bitácora</Link>
              <Link href={"/../admin/profile"}>Perfil</Link>

              {/* <NavDropdown
                title="jalopez@sismex.com"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">
                  <Link
                    href="/admin/profile"
                    onClick={() => {
                      toggleOffCanvas();
                    }}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Mi perfil
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

{
  /*
  

  
  */
}
