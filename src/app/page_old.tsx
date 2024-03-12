"use client";
//Pagina de inicio (￣y▽,￣)╭
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import MainNav from "@/components/main/MainNav";
import MainFoot from "@/components/main/MainFoot";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "@/translations/es/global.json";
import global_en from "@/translations/en/global.json";

i18next.init({
  lng: "es",
  debug: true,
  interpolation: { escapeValue: false },
  resources: {
    es: { global: global_es, translations: "" },
    en: { global: global_en },
  },
});

export default function Home() {
  return (
    <I18nextProvider i18n={i18next}>
      <MainNav />
      <Container fluid>
        {/* Inicio */}
        <Row className="py-3 mx-5">
          <Col
            xs={12}
            md={6}
            className="mb-4 align-items-center"
            style={{ display: "flex" }}
          >
            <div className="wrapper align-left">
              <h1 style={{ fontSize: "40px" }}>
                Emite, Gestiona y Verifica Certificados en Blockchain
              </h1>
              <p style={{ fontSize: "25px" }}>
                La plataforma líder en Ethereum para certificados digitales
                seguros y verificables. Almacena de manera segura y siempre
                accesible.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image
              style={{ width: "100%" }}
              src="https://create.vista.com/s3-static/create/uploads/2022/09/certificate-maker.webp"
            ></Image>
          </Col>
        </Row>

        {/* Que es blockchain */}
        <Row
          className="py-5"
          style={{ backgroundColor: "#F8F9FA", textAlign: "center" }}
        >
          <Col>
            <div className="px-5 mx-2">
              <h2 className="mb-4">¿Qué es Blockchain?</h2>
              <p style={{ fontSize: "18px" }}>
                Blockchain es una innovadora plataforma que te permite crear y
                validar certificados de manera segura en la blockchain de
                Ethereum. Con Blockchain, tus logros académicos y profesionales
                son inmutables y accesibles en cualquier momento y lugar.
                Nuestra tecnología de vanguardia garantiza la autenticidad y la
                integridad de tus certificados. ¡Comienza a usar Blockchain hoy
                mismo!
              </p>
            </div>

            <Link href={"/auth/sign-up"}>
              <Button variant="secondary" className="my-3">
                Empezar
              </Button>
            </Link>
          </Col>
        </Row>

        {/* Apliacion movil */}
        <Row className="py-3 px-3 mb-3 mt-5">
          <Col xs={12} md={6} className="mb-4">
            <Image
              style={{ width: "100%" }}
              src="https://www.smartsheet.com/sites/default/files/2022-06/Mobile%20Web%20Page%20Images_hero%20header%20%281%29.png"
            ></Image>
          </Col>
          <Col
            sm={12}
            md={6}
            className="px-5 align-items-center"
            style={{ display: "flex" }}
          >
            <div>
              <h1>Complementa con nuestra Aplicación Móvil</h1>
              <p>
                Lleva todos tus certificados contigo, en cualquier lugar y en
                cualquier momento. Nuestra aplicación móvil te permite acceder,
                compartir y verificar fácilmente todos tus certificados
                digitales de manera rápida y conveniente.
              </p>
              <a
                href="https://www.apple.com/mx/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Available_on_the_App_Store_%28black%29.png/799px-Available_on_the_App_Store_%28black%29.png"
                  alt="Descargar en AppStore"
                  className="img-fluid px-3 py-1"
                  style={{ width: "200px", height: "auto" }}
                />
              </a>

              <a
                href="https://play.google.com/store/apps?hl=es_MX&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 mb-1"
              >
                <img
                  src="https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png"
                  alt="Descargar en PlayStore"
                  className="img-fluid px-3 py-1"
                  style={{ width: "200px", height: "auto" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Preguntas frecuentes */}
      <Container>
        <h1 className="my-5 text-center">Preguntas frecuentes</h1>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              ¿Qué es la tecnología blockchain y cómo la utilizan en su
              plataforma?
            </Accordion.Header>
            <Accordion.Body>
              <b>Respuesta: </b>La tecnología blockchain es un registro digital
              seguro y descentralizado que garantiza la integridad y la
              autenticidad de los datos. En nuestra plataforma, utilizamos
              Ethereum, una de las principales blockchains, para registrar y
              verificar certificados. Cada certificado se almacena en la
              blockchain, lo que lo hace inmutable y resistente a la
              falsificación.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿Cómo puedo emitir un certificado en su plataforma?
            </Accordion.Header>
            <Accordion.Body>
              <b>Respuesta: </b> Emitir un certificado es fácil. Después de
              registrarte y seleccionar tu plan, puedes cargar los detalles del
              certificado, como el nombre del destinatario, la fecha de emisión
              y la descripción. Nuestra plataforma generará automáticamente un
              certificado único y seguro que se almacena en la blockchain.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Cómo verifico la autenticidad de un certificado?
            </Accordion.Header>
            <Accordion.Body>
              <b>Respuesta: </b>Utiliza nuestra aplicación móvil para escanear
              el código QR del certificado. Nuestra plataforma verificará
              instantáneamente la autenticidad del certificado y te
              proporcionará la información necesaria en la blockchain.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Cuáles son los beneficios de su plataforma para las instituciones
              educativas?
            </Accordion.Header>
            <Accordion.Body>
              <b>Respuesta: </b> Nuestra plataforma simplifica la emisión y
              verificación de certificados, lo que ahorra tiempo y recursos.
              Además, aumenta la confianza en los certificados emitidos, lo que
              puede mejorar la reputación de la institución y la empleabilidad
              de sus graduados.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>¿Ofrecen soporte técnico?</Accordion.Header>
            <Accordion.Body>
              <b>Respuesta: </b> Sí, ofrecemos soporte técnico a todos nuestros
              usuarios. Los clientes de planes premium tienen acceso a soporte
              24/7, mientras que los clientes de otros planes pueden
              contactarnos por correo electrónico durante el horario comercial.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              ¿Cómo puedo registrarme en su plataforma?
            </Accordion.Header>
            <Accordion.Body>
              <b>Respuesta: </b> El proceso de registro es simple. Visita
              nuestra página de inicio y haz clic en el botón "Registrarse".
              Luego, sigue los pasos para crear una cuenta y seleccionar el plan
              que mejor se adapte a tus necesidades.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              ¿Qué sucede si pierdo mi acceso a la plataforma?
            </Accordion.Header>
            <Accordion.Body>
              <b>Respuesta: </b> Si pierdes tu acceso, puedes utilizar la
              función de recuperación de contraseña en la página de inicio de
              sesión para restablecer tu contraseña. Si necesitas ayuda
              adicional, puedes ponerte en contacto con nuestro equipo de
              soporte.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <MainFoot />
    </I18nextProvider>
  );
}
