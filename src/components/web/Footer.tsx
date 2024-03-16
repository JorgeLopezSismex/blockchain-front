import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import SocialMediaIcon from "./SocialMediaIcon";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <Container className="footer-container">
        <Row>
          <Col md={5}>
            <Row>
              <Col xs={12}>
                <Link href={"/"}>
                  <Image
                    width={353}
                    height={84}
                    alt="SingularDocs"
                    className="footer-logo"
                    src="/web/singulardocs-logo.png"
                  />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="footer-icons-container">
                <SocialMediaIcon
                  width={32}
                  height={32}
                  spacing={true}
                  src="/web/socials/x-icon.png"
                  alt="SingularDocs en X"
                />
                <SocialMediaIcon
                  width={32}
                  height={32}
                  spacing={true}
                  src="/web/socials/facebook-icon.png"
                  alt="SingularDocs en Facebook"
                />
                <SocialMediaIcon
                  width={32}
                  height={32}
                  spacing={true}
                  src="/web/socials/linkedin-icon.png"
                  alt="SingularDocs en Linkedin"
                />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <ul className="footer-list">
              <li>
                <a className="footer-list-item" href="#about-us">
                  - ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a className="footer-list-item" href="#what-is-blockchain">
                  - ¿Qué es blockchain?
                </a>
              </li>
              <li>
                <a className="footer-list-item" href="#what-is-it-for">
                  - ¿Para qué sirve?
                </a>
              </li>
              <li>
                <a className="footer-list-item" href="#features">
                  - Características de un SingularDocs
                </a>
              </li>
              <li>
                <a className="footer-list-item" href="#use-cases">
                  - ¿Casos de uso?
                </a>
              </li>
              <li>
                <a className="footer-list-item" href="#testimonials">
                  - Testimonios
                </a>
              </li>
              {/* <li className="footer-list-item">
                <a href="#costs">- Costos</a>
              </li> */}
              <li>
                <a className="footer-list-item" href="#contact">
                  - Contacto
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <a className="footer-list-item" href="#contact">
              - Aviso de privacidad
            </a>
          </Col>
        </Row>
      </Container>

      <div className="blue-footer">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col xs={12}>
              <p className="d-flex align-items-center footer-legals-text">
                Links legales 2024 Derechos reservados SingularDocs
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
