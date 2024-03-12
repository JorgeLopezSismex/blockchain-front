import { Container, Col, Row, Button } from "react-bootstrap";
import WebButton from "./WebButton";

export default function WebWhatIs() {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={10} className="d-flex justify-content-center">
            <h3>¿Qué es blockchain?</h3>
          </Col>

          <Col md={10} className="d-flex justify-content-center">
            <p className="blue-subtitle">
              Blockchain es un libro mayor compartido e inmutable que facilita
              el proceso de registro de transacciones y de seguimiento de
              activos en una red de negocios.
            </p>
          </Col>

          <Col md={10} className="d-flex justify-content-center">
            <p className="gray-subtitle">
              La relevancia de blockchain se fundamenta en la esencia de que los
              negocios operan en base a información. La velocidad y precisión
              con la que se obtiene esta información impacta directamente en su
              rendimiento.
            </p>
          </Col>

          <Col md={10}>
            <Row>
              <Col md={6} className="background-what-is "></Col>
              <Col md={6}>
                <p className="gray-text">
                  Blockchain emerge como una soluciónóptima al proporcinar datos
                  inmediatos, compartidos y totalmente transparentes almacenados
                  en un registro distribuido e inmutable al que sólo los
                  miembros autorizados pueden acceder, este beneficio simplifica
                  el proceso de generar transacciones y rastrear activos en el
                  entorno empresarial.
                </p>

                <p className="gray-text">
                  Los activos, ya sean tangibles (propiedades, vehículos,
                  efectivo, terrenos) o intangibles (propiedad intelectual,
                  patentes, derechos de autor, marcas), encuentran en la red de
                  blockchain un medio para ser rastreados y negociados, lo que
                  reduce los riesgos y costos para todos los participantes.
                </p>

                <p className="gray-text">
                  Una red blockchain tiene la capacidad de monitorear pedidos,
                  pagos, cuentas, detalles de producción y otros aspectos.
                  Además, al compartir una fuente única y confiable de
                  información, los usuarios pueden examinar todos los detalles
                  de una transacción desde su inicio hasta su conclusión,
                  generando así una mayor confianza, eficiencia y oportunidades.
                </p>

                <WebButton label="Testimonios" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
