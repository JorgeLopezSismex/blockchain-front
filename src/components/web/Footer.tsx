import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import SocialMediaIcon from "./SocialMediaIcon";
import { Fragment } from "react";

export default function Footer({
  aboutUsSection,
  blockchainSection,
  whatIsItForSection,
  featuresSection,
  useCasesSection,
  contactSection,
  setShowPrivacyModal,
}: {
  aboutUsSection: any;
  blockchainSection: any;
  whatIsItForSection: any;
  featuresSection: any;
  useCasesSection: any;
  contactSection: any;
  setShowPrivacyModal: any;
}) {
  const scrollToSection = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop - 97,
      behavior: "smooth",
    });
  };

  const showPrivacy = () => {
    setShowPrivacyModal(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <Row>
              <Col xs={8} md={10}>
                <Link href={"/"}>
                  <Image
                    width={353}
                    height={84}
                    alt="SingularDocs"
                    layout="responsive"
                    className="footer-logo"
                    src="/web/singulardocs-logo.png"
                  />
                </Link>
              </Col>
            </Row>

            <Row>
              <Col xs={12}></Col>
            </Row>
          </Col>

          <Col md={4} className="mb-3">
            <div>
              <span
                className="navbar-link"
                style={{ display: "block" }}
                onClick={() => scrollToSection(aboutUsSection)}
              >
                - ¿Quiénes somos?
              </span>
              <span
                className="navbar-link"
                style={{ display: "block" }}
                onClick={() => scrollToSection(blockchainSection)}
              >
                - ¿Qué es blockchain?
              </span>
              <span
                className="navbar-link"
                style={{ display: "block" }}
                onClick={() => scrollToSection(whatIsItForSection)}
              >
                - ¿Para qué sirve?
              </span>
              <span
                className="navbar-link"
                style={{ display: "block" }}
                onClick={() => scrollToSection(featuresSection)}
              >
                - Características de un SingularDocs
              </span>
              <span
                className="navbar-link"
                style={{ display: "block" }}
                onClick={() => scrollToSection(useCasesSection)}
              >
                - Casos de uso
              </span>
              {/* <span className="navbar-link" style={{ display: "block" }}>
              - Testimonios
            </span> */}
              {/* <span className="navbar-link" style={{ display: "block" }}>
              - Costos
            </span> */}
              <span
                className="navbar-link"
                style={{ display: "block" }}
                onClick={() => scrollToSection(contactSection)}
              >
                - Contacto
              </span>
            </div>
          </Col>

          <Col md={4} className="mb-3">
            <span
              onClick={showPrivacy}
              className="navbar-link"
              style={{ display: "block" }}
            >
              - Aviso de privacidad
            </span>
          </Col>
        </Row>
      </Container>

      <div className="blue-footer">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col xs={12}>
              <p className="d-flex align-items-center footer-legals-text">
                {`©    ${currentYear} - Derechos reservados`}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
