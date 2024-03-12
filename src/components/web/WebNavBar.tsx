import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import NavBarButton from "./NavBarButton";
import SocialMediaIcon from "./SocialMediaIcon";

import Link from "next/link";
import Image from "next/image";

export default function WebNavBar() {
  const expand = "md";

  return (
    <Container>
      <Row style={{ marginTop: 20 }}>
        <Col xs={12}>
          <Container className="d-flex align-items-center justify-content-end">
            <NavBarButton
              label="Idioma"
              href="/auth/sign-in"
              iconSrc="/web/lang-icon.png"
            />
            <NavBarButton
              href="/auth/sign-in"
              label="Iniciar sesión"
              iconSrc="/web/sign-in-icon.png"
            />
            <SocialMediaIcon
              width={32}
              height={32}
              src="/web/x-icon.png"
              alt="SingularDocs en X"
            />
            <SocialMediaIcon
              width={32}
              height={32}
              src="/web/facebook-icon.png"
              alt="SingularDocs en Facebook"
            />
            <SocialMediaIcon
              width={32}
              height={32}
              src="/web/linkedin-icon.png"
              alt="SingularDocs en Linkedin"
            />
          </Container>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Container>
            <hr />
          </Container>
        </Col>
      </Row>

      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link href={"sdfs"}>
              <Image
                src="/web/singulardocs-logo.png"
                alt="SingularDocs"
                width={176}
                height={42}
              />
            </Link>
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
                <Nav.Link href="#action1" className="navbar-link">
                  ¿Quiénes somos?
                </Nav.Link>
                <Nav.Link href="#action2" className="navbar-link">
                  ¿Qué es blockchain?
                </Nav.Link>
                <Nav.Link href="#action3" className="navbar-link">
                  ¿Para qué sirve?
                </Nav.Link>
                <Nav.Link href="#action4" className="navbar-link">
                  Testimonios
                </Nav.Link>
                <Nav.Link href="#action5" className="navbar-link">
                  Costos
                </Nav.Link>
                <Nav.Link href="#action6" className="navbar-link">
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

/*




            <Image src="/web/x-icon.png" alt="sdfdfds" width="32" height="32" />
            <Image
              src="/web/facebook-icon.png"
              alt="sdfdfds"
              width="32"
              height="32"
            />
            <Image
              src="/web/linkedin-icon.png"
              alt="sdfdfds"
              width="32"
              height="32"
            />


*/
