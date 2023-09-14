"use client";
//Ventana de DUNS ᕦ(ò_óˇ)ᕤ
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export default function Clients() {
  return (
    <div>
        <Container>
            <Row className="my-5">
                <Col><h1 style={{textAlign:"center"}}>Número DUNS</h1></Col>
            </Row>
            <Row className="my-1">
                <Col xm={12} lg={7} className="align-items-center" style={{display:'flex'}}>
                    <div className="wrapper align-left">
                        <h3>¿Qué es un número DUNS?</h3>
                        <p>
                        D.U.N.S. son las siglas de "Data Universal Numbering System" o 
                        "Sistema Universal de Numeración de Datos" en español. 
                        Es un sistema de numeración único que se utiliza para identificar 
                        de manera única a empresas y organizaciones en todo el mundo. 
                        Fue desarrollado y es gestionado por Dun & Bradstreet (D&B), 
                        una empresa de análisis comercial.
                        Es un identificador numérico de nueve dígitos que se asigna a cada 
                        ubicación física de una empresa u organización. Esto permite rastrear 
                        y categorizar la información sobre las diferentes partes de una empresa 
                        y facilita el intercambio de información comercial entre organizaciones.
                        </p>
                    </div>
                </Col>
                <Col xm={12} lg={5}>
                    <Image
                      style={{ width: "100%"}}
                      src="https://www.dnb.co.uk/content/dam/english/image-library/Modernization/illustrations/illustration_dunsnumber.png"
                    ></Image>
                </Col>
            </Row>
        </Container>

        <Container className="mt-5">
            <div  style={{textAlign:'center'}}>
                <h1 className="mb-3">Cómo obtener un número D.U.N.S.</h1>
                <p>Para obtener un número D.U.N.S. (Data Universal Numbering System), generalmente necesitas seguir estos pasos:</p>
            </div>
            <Row>
                <Col className="d-flex align-items-stretch" xs={12} sm={6} lg={3}>
                    <Card className="my-3">
                        <Card.Header>Paso 1</Card.Header>
                        <Card.Body>
                            <Card.Title>Accede a la página web de Dun & Bradstreet (D&B)</Card.Title>
                            <Card.Text>Ve al sitio web oficial de Dun & Bradstreet (D&B), que es la empresa encargada de administrar el sistema D.U.N.S.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex align-items-stretch" xs={12} sm={6} lg={3}>
                    <Card className="my-3">
                        <Card.Header>Paso 2</Card.Header>
                        <Card.Body>
                            <Card.Title>Verifica si ya tienes un número D.U.N.S.</Card.Title>
                            <Card.Text>Antes de solicitar un nuevo número D.U.N.S., verifica si tu empresa ya tiene uno.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex align-items-stretch" xs={12} sm={6} lg={3}>
                    <Card className="my-3">
                        <Card.Header>Paso 3</Card.Header>
                        <Card.Body>
                            <Card.Title>Completa el formulario de solicitud:</Card.Title>
                            <Card.Text>En el sitio web de D&B, deberás completar un formulario de solicitud que solicitará la información necesaria para tu solicitud.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex align-items-stretch" xs={12} sm={6} lg={3}>
                    <Card className="my-3">
                        <Card.Header>Paso 4</Card.Header>
                        <Card.Body>
                            <Card.Title>Recibe el número D.U.N.S.</Card.Title>
                            <Card.Text>D&B revisará la información proporcionada y, si todo está en orden, asignará un número D.U.N.S. a tu empresa. Recibirás la confirmación y el número en la dirección de correo electrónico que proporcionaste.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className="text-center mt-3">
                <Button href="https://www.cialdnb.com/es/numero-d-u-n-s/" size="lg">D.U.N.S.</Button>
            </div>
        </Container>
    </div>
  );
}
