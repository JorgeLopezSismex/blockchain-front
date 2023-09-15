"use client";
//Ventana About us (*/ω＼*)
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function AboutUs() {
  return (
    <section>
      <Container>
        <Row>

            <Col xs={12} lg={7} className="px-5 py-3 align-items-center" style={{display:'flex'}}>
              <div className="wrapper align-left">
                <h2 style={{fontSize:'50px'}}>Por que deberias usar Blockchain</h2>
                <p>
                Nuestros expertos en blockchain, educación y 
                tecnología trabajan incansablemente para 
                ofrecerte una solución de vanguardia. 
                </p>
              </div>
            </Col>

            <Col xs={12} lg={5} className="px-3 py-3">
              <Image
                style={{ width: "100%" }}
                src="https://static.vecteezy.com/system/resources/previews/005/915/627/non_2x/hand-drawn-doodle-set-of-blockchain-theme-items-round-composition-sketch-style-cryptocurrency-electronic-commerce-concept-illustration-vector.jpg"
              ></Image>
            </Col>

        </Row>
        <Row>
          <Col>
            <h3>Seguridad inquebrantable</h3>
            <p>
              La tecnología blockchain asegura que tus certificados 
              sean inmutables y a prueba de falsificaciones.
            </p>
          </Col>
          <Col>
            <h3>Verificación Instantánea</h3>
            <p>
              Valida la autenticidad de tus certificados en 
              segundos, en cualquier lugar y en cualquier momento.
            </p>
          </Col>
          <Col>
            <h3>Sencillez en la Emisión</h3>
            <p>
              Emite certificados de forma rápida y eficiente, 
              reduciendo la carga administrativa.
            </p>
          </Col>
          <Col>
            <h3>Transparencia Total</h3>
            <p>
              Todas las partes interesadas pueden rastrear el 
              historial de emisión y verificación de certificados.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}