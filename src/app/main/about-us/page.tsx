"use client";
//Ventana About us (*/ω＼*)
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function AboutUs() {
  return (
    <section>
      <Container>
        <Row>

          <Col xs={12} lg={5} className="px-3 py-3">
            <Image
              style={{ width: "100%" }}
              src="https://static.vecteezy.com/system/resources/previews/005/915/627/non_2x/hand-drawn-doodle-set-of-blockchain-theme-items-round-composition-sketch-style-cryptocurrency-electronic-commerce-concept-illustration-vector.jpg"
            ></Image>
          </Col>

          <Col xs={12} lg={7} className="px-5 py-3 align-items-center" style={{display:'flex'}}>
            <div className="wrapper align-left">
              <h2 style={{fontSize:'50px'}}>Blockchain</h2>
              <p>
                Nuestra historia comenzó con la visión de transformar 
                la educación y la autenticación de documentos. 
                Desde [año de fundación], hemos estado comprometidos 
                en proporcionar una solución innovadora y segura 
                basada en Ethereum.
              </p>
              <p>
                Nuestra misión es empoderar a instituciones educativas,
                empresas y particulares con herramientas que garanticen 
                la integridad de sus certificados y documentos digitales.
              </p>
              <p>
                Nuestros expertos en blockchain, educación y tecnología 
                trabajan incansablemente para ofrecerte una solución de 
                vanguardia.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
