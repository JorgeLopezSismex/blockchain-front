"use client";
//Ventana de clientes (╯°□°）╯︵ ┻━┻

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ClientCard from "../../components/main/ClientCard";

const testimonios = [
  {
    nombre: "William Hartnell",
    puesto: "Gerente de Ventas",
    ciudad: "Ciudad de México",
    opinion: "Excelente producto, muy satisfecho con los resultados.",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  {
    nombre: "Patrick Troughton",
    puesto: "Diseñadora Gráfica",
    ciudad: "Madrid, España",
    opinion: "El mejor servicio que he utilizado, altamente recomendado.",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  {
    nombre: "Jon Perwee",
    puesto: "Gerente de Ventas",
    ciudad: "Ciudad de México",
    opinion: "Excelente producto, muy satisfecho con los resultados.",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  {
    nombre: "Tom Baker",
    puesto: "Diseñadora Gráfica",
    ciudad: "Madrid, España",
    opinion:
      "Han informado una reducción del 50% en el tiempo de incorporación.",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  {
    nombre: "Peter Davison",
    puesto: "Gerente de Ventas",
    ciudad: "Ciudad de México",
    opinion:
      "La empresa ABC ha simplificado la contratación al verificar de manera rápida. ",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  {
    nombre: "Colin Baker",
    puesto: "Diseñadora Gráfica",
    ciudad: "Madrid, España",
    opinion:
      "Han experimentado un aumento del 30% en la verificación de certificados por parte de empleadores.",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  {
    nombre: "Sylvester McCoy",
    puesto: "Diseñadora Gráfica",
    ciudad: "Madrid, España",
    opinion:
      "Universidad XYZ ha mejorado la confianza en sus diplomas y títulos gracias a nuestra plataforma. ",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  {
    nombre: "Paul McGann",
    puesto: "Diseñadora Gráfica",
    ciudad: "Madrid, España",
    opinion:
      "Universidad XYZ ha mejorado la confianza en sus diplomas y títulos gracias a nuestra plataforma. ",
    imagen:
      "https://i.pinimg.com/564x/e2/0f/9c/e20f9ce9a516c6c91f6efef842a7d0a8.jpg",
  },
  // Agrega más testimonios según sea necesario
];

export default function Clients() {
  const itemsPerSlide = 3; // Número de tarjetas a mostrar por diapositiva

  return (
    <Container className="mt-5">
      <div className="my-5">
        <h1 style={{ textAlign: "center" }}>
          Qué dicen nuestro usuarios sobre Blockchain.
        </h1>
      </div>
      <Carousel indicators={false} touch={true}>
        {testimonios.map((testimonial, index) =>
          index % itemsPerSlide === 0 ? (
            <Carousel.Item key={index}>
              <Row className="d-flex justify-content-center">
                {testimonios
                  .slice(index, index + itemsPerSlide)
                  .map((item, subIndex) => (
                    <Col
                      key={subIndex}
                      sm={3}
                      style={{ display: "flex", justifyItems: "center" }}
                    >
                      <ClientCard item={item} />
                    </Col>
                  ))}
              </Row>
            </Carousel.Item>
          ) : null
        )}
      </Carousel>
    </Container>
  );
}
