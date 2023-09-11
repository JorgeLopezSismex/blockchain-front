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
            </Col>
        </Row>
        <Row className="px-3 py-3">
            <Col>
                <h5>1 Accede a la página web de Dun & Bradstreet (D&B)</h5>
            </Col>
            <Col className="mx-auto my-auto">
                <p>Ve al sitio web oficial de Dun & Bradstreet (D&B), que es la empresa encargada de administrar el sistema D.U.N.S.</p>
            </Col>
        </Row>
        <Row className="px-3 py-3">
            <Col className="mx-auto my-auto">
                <h5>2 Verifica si ya tienes un número D.U.N.S.</h5>
            </Col>
            <Col>
                <p>Antes de solicitar un nuevo número D.U.N.S., verifica si tu empresa ya tiene uno. </p>
            </Col>
        </Row>
        <Row className="px-3 py-3">
            <Col>
                <h5>3 Reúne la información necesaria</h5>
                <p>Necesitarás proporcionar información sobre tu empresa u organización. Esto puede incluir:</p>
                <ul>
                    <li>Nombre legal de la empresa.</li>
                    <li>Dirección física y dirección de correo electrónico.</li>
                    <li>Número de teléfono de la empresa.</li>
                    <li>Forma jurídica de la empresa (por ejemplo, sociedad anónima, sociedad de responsabilidad limitada, etc.).</li>
                    <li>Número de registro mercantil (si aplica).</li>
                    <li>Breve descripción de la actividad comercial de la empresa.</li>
                    <li>Información sobre la propiedad de la empresa.</li>
                    <li>Información financiera básica (por ejemplo, ingresos anuales).</li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <h5>4 Completa el formulario de solicitud</h5>
                <p>En el sitio web de D&B, deberás completar un formulario de solicitud que solicitará la información mencionada anteriormente. Asegúrate de proporcionar información precisa y actualizada.</p>
            </Col>
        </Row>
        <Row>
            <h5>5 Verificación y asignación</h5>
            <p>D&B revisará la información proporcionada y, si todo está en orden, asignará un número D.U.N.S. a tu empresa. Este proceso puede llevar algunos días.</p>
        </Row>
        <Row>
            <Col>
                <h5>6 Recibe tu número DUNS</h5>
                <p>Una vez que se haya asignado el número D.U.N.S., recibirás la confirmación y el número en la dirección de correo electrónico que proporcionaste.</p>
            </Col>
        </Row>
    </Container>
  );
}
