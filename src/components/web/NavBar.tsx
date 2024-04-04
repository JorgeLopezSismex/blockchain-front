import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Col, Row } from "react-bootstrap";

import NavBarButton from "./NavBarButton";
import SocialMediaIcon from "./SocialMediaIcon";

export default function NavBar() {
  const expand = "lg";
  const [show, setShow] = useState(false);

  const movileToggleOffCanvas = () => {
    if (show) {
      setShow(false);
    }
  };

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <Container>
      {/* <Row style={{ marginTop: 20 }}>
        <Col xs={12}>
          <Container className="d-flex align-items-center justify-content-end">
            <NavBarButton
              label="Idioma"
              href="/auth/sign-in"
              iconSrc="/web/icons/lang-icon.png"
            />
            <NavBarButton
              href="/auth/sign-in"
              label="Iniciar sesión"
              iconSrc="/web/icons/sign-in-icon.png"
            />
            <SocialMediaIcon
              width={32}
              height={32}
              src="/web/socials/x-icon.png"
              alt="SingularDocs en X"
            />
            <SocialMediaIcon
              width={32}
              height={32}
              src="/web/socials/facebook-icon.png"
              alt="SingularDocs en Facebook"
            />
            <SocialMediaIcon
              width={32}
              height={32}
              src="/web/socials/linkedin-icon.png"
              alt="SingularDocs en Linkedin"
            />
          </Container>
        </Col>
      </Row> */}

      <Row>
        <Col xs={12}>
          <Container>
            <hr />
          </Container>
        </Col>
      </Row>

      <Navbar
        fixed="top"
        key={expand}
        expand={expand}
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <Link href={"/"}>
            <Image
              style={{ marginLeft: 20, marginTop: 10, marginBottom: 10 }}
              width={200}
              height={50}
              alt="SingularDocs"
              src="/web/singulardocs-logo.png"
            />
          </Link>
          <Navbar.Toggle
            onClick={toggleOffCanvas}
            aria-controls={"navbarScroll"}
          />
          <Navbar.Offcanvas
            show={show}
            onHide={toggleOffCanvas}
            id={"navbarScroll"}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          >
            <Offcanvas.Header closeButton>
              <Link href={"/"}>
                <Image
                  width={200}
                  height={50}
                  alt="SingularDocs"
                  src="/web/singulardocs-logo.png"
                />
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                navbarScroll
              >
                <Nav.Link
                  href="#about-us"
                  className="navbar-link"
                  onClick={movileToggleOffCanvas}
                >
                  ¿Quiénes somos?
                </Nav.Link>
                <Nav.Link
                  className="navbar-link"
                  href="#what-is-blockchain"
                  onClick={movileToggleOffCanvas}
                >
                  ¿Qué es blockchain?
                </Nav.Link>
                <Nav.Link
                  href="#what-is-it-for"
                  className="navbar-link"
                  onClick={movileToggleOffCanvas}
                >
                  ¿Para qué sirve?
                </Nav.Link>
                {/* <Nav.Link href="#testimonials" className="navbar-link">
                  Características
                </Nav.Link> */}
                {/* <Nav.Link href="#testimonials" className="navbar-link">
                  Casos de uso
                </Nav.Link> */}
                {/* <Nav.Link href="#testimonials" className="navbar-link">
                  Testimonios
                </Nav.Link> */}
                {/* <Nav.Link href="#action5" className="navbar-link">
                  Costos
                </Nav.Link> */}
                <Nav.Link href="#contact" className="navbar-link">
                  Contacto
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  );
}
