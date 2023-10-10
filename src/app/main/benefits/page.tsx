"use client";
//Ventana About us (*/ω＼*)
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import BenefitsCard from "@/components/main/BenefitsCard";

export default function AboutUs() {
  return (
    <section>
      <Container>
        <Row>

            <Col xs={12} lg={7} className="px-5 py-3 align-items-center" style={{display:'flex'}}>
              <div className="wrapper align-left">
                <h2 style={{fontSize:'50px'}}>Por que deberias usar Blockchain</h2>
                <p style={{fontSize:'25px'}}>
                Blockchain está diseñado para proporcionarte 
                una experiencia excepcional en la generación 
                y verificación de certificados digitales. 
                Descubre los beneficios de utilizar nuestros 
                servicios:
                 
                </p>
              </div>
            </Col>

            <Col xs={12} lg={5} className="px-3 py-3">
              <Image
                style={{ width: "100%" }}
                src="https://create.vista.com/s3-static/create/uploads/2022/09/make-participation-certificate-online.webp"
              ></Image>
            </Col>

        </Row>

        <Row>
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WSG%20(2).png"
            alt="WebPage"
            className="img-fluid mx-3"
            style={{width:'100%', height:'auto'}}
          />
          
          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
                titulo="Seguridad inquebrantable"
                contenido="La tecnología blockchain asegura que tus certificados 
                sean inmutables y a prueba de falsificaciones."
            />
          </Col>
          
          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
                titulo="Verificación Instantánea"
                contenido="Valida la autenticidad de tus certificados en 
                segundos, en cualquier lugar y en cualquier momento."
            />
          </Col>

          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
                titulo="Sencillez en la Emisión"
                contenido="Emite certificados de forma rápida y eficiente, 
                reduciendo la carga administrativa."
            />
          </Col>

          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
                titulo="Transparencia Total"
                contenido="Todas las partes interesadas pueden rastrear el 
                historial de emisión y verificación de certificados."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}