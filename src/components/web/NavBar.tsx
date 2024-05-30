import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Col, Row } from "react-bootstrap";

import { useRef } from "react";

import NavBarButton from "./NavBarButton";
import SocialMediaIcon from "./SocialMediaIcon";

export default function NavBar({
  aboutUsSection,
  blockchainSection,
  whatIsItForSection,
  contactSection,
}: {
  aboutUsSection: any;
  blockchainSection: any;
  whatIsItForSection: any;
  contactSection: any;
}) {
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

  const scrollToSection = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop - 97,
      behavior: "smooth",
    });

    if (show) {
      setShow(false);
    }
  };

  return (
    <Navbar
      sticky="top"
      key={expand}
      expand={expand}
      className="bg-body-tertiary"
    >
      <Container>
        <Link href={"/"}>
          <Image
            width={256}
            height={61}
            alt="SingularDocs"
            src="/web/singulardocs-logo.png"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
        </Link>

        <Navbar.Toggle
          onClick={toggleOffCanvas}
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />

        <Navbar.Offcanvas
          show={show}
          placement="end"
          onHide={toggleOffCanvas}
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Image
                width={256}
                height={61}
                alt="SingularDocs"
                src="/web/singulardocs-logo.png"
                style={{ marginTop: 10, marginBottom: 10 }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Navbar.Text
                className="navbar-link"
                onClick={() => scrollToSection(aboutUsSection)}
              >
                ¿Quiénes somos?
              </Navbar.Text>

              <Navbar.Text
                className="navbar-link"
                onClick={() => scrollToSection(blockchainSection)}
              >
                ¿Qué es blockchain?
              </Navbar.Text>

              <Navbar.Text
                className="navbar-link"
                onClick={() => scrollToSection(whatIsItForSection)}
              >
                ¿Para qué sirve?
              </Navbar.Text>

              <Navbar.Text
                className="navbar-link"
                onClick={() => scrollToSection(contactSection)}
              >
                Contacto
              </Navbar.Text>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
