import { Container, Col, Row, Button } from "react-bootstrap";
import BlueButton from "./BlueButton";

export default function WebWhatIsItFor() {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={10} className="d-flex justify-content-center">
            <h3>¿Para qué sirve?</h3>
          </Col>

          <Col md={10} className="d-flex justify-content-center">
            <p className="blue-subtitle">
              Nuestra plataforma fue creada con el objetivo de
              transmitir/traducir los beneficios de blockchain a las necesidades
              de la industria, por medio de mecanismos claros y accesibles para
              todos.
            </p>
          </Col>

          <Col md={10} className="d-flex justify-content-center">
            <p className="gray-subtitle"></p>
          </Col>

          <Col md={10}>
            <Row>
              <Col md={6} className="background-what-is "></Col>
              <Col md={6}>
                <p className="gray-text">
                  Por medio de nuestra plataforma se pueden crear documentos con
                  plantillas específicas y certificados, esto garantiza que son
                  originales, únicos e inalterables.
                </p>

                <p className="gray-text">
                  Adicionalmente nuestra plataforma cuenta con mecanismos útiles
                  para almacenar de forma segura y distribuir los documentos
                  certificados a todos los involucrados.
                </p>

                <p className="gray-text">
                  Con la ayuda de nuestra plataforma se puede consultar toda la
                  información relacionada al certificado: ¿cuándo fue hecho?,
                  ¿quién lo solicitó?, ¿para quién está dirigido?, fecha de
                  caducidad (si es que la tiene), fecha de revocación (en caso
                  de que lo esté), además de contar con los mecanismos
                  necesarios para comprobar su autenticidad y para compartirlo
                  con otras personas u organizaciones.
                </p>

                <BlueButton label="Testimonios" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
