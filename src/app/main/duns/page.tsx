"use client";
//Ventana de DUNS ᕦ(ò_óˇ)ᕤ
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Clients() {
  return (
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
        <Row className="my-5">
            <Col>
                <h3>Como obtener un número DUNS</h3>
                <p>Para obtener un número D.U.N.S. (Data Universal Numbering System), generalmente necesitas seguir estos pasos:</p>
                <p><b>Accede a la página web de Dun & Bradstreet (D&B)</b></p>
                <p>Ve al sitio web oficial de Dun & Bradstreet (D&B), que es la empresa encargada de administrar el sistema D.U.N.S.</p>
            </Col>
        </Row>
    </Container>
  );
}
