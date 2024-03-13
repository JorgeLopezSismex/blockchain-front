import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import { Nav } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import CaseCard from "./CaseCard";

export default function FifthSection() {
  return (
    <Tab.Container id="my-tabs" defaultActiveKey="home">
      <div className="tabs-container">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="supply-&-logistics">
                      Suministro y Lógistica
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="health">Salud</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="real-state">Inmobiliaria</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="education">Educación</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="entertainment">
                      Entretenimiento
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="government">Gobierno</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="human-resources">
                      Recursos humanos
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Tab.Content>
        <Tab.Pane eventKey="supply-&-logistics">
          <Container>
            <Row className="d-flex justify-content-center">
              <CaseCard
                title="Seguimiento de la Cadena de Suministro:"
                iconAlt="fsdfsdfsdfs"
                text="Utilizar SingularDocs para rastrear el movimiento de bienes desde su origen hasta su destino. Cada transacción se registra documentos certificados, lo que permite una visibilidad completa y en tiempo real de la cadena de suministro."
                iconPath="/web/cases/supply-&-logistics/supply-chain.png"
              />

              <CaseCard
                title="Gestión de Inventarios:"
                iconAlt="fsdfsdfsdfs"
                text="Mejora la gestión de inventarios mediante el registro de información en SingularDocs utilizando documentos confiables e inalterables. Esto facilitaría la coordinación entre diferentes partes de la cadena de suministro, reduciendo la probabilidad de errores y escasez de existencias."
                iconPath="/web/cases/supply-&-logistics/inventories.png"
              />

              <CaseCard
                title="Autenticidad de Productos:"
                iconAlt="fsdfsdfsdfs"
                text="Utilizar certificados emitidos a través de SingularDocs para verificar la autenticidad de productos a lo largo de la candena de suministro. Esto es especialmente relevante para productos de alto valor o propensos a la falsificación."
                iconPath="/web/cases/supply-&-logistics/protocols.png"
              />

              <CaseCard
                title="Contratos Inteligentes en Logística:"
                iconAlt="fsdfsdfsdfs"
                text="Implementar contratos inteligentes para automatizar y hacer más eficientes ciertos aspectos de la logística, como la gestión de rutas, la facturación y la programación de entregas."
                iconPath="/web/lock-icon.png"
              />

              <CaseCard
                title="Gestión de Devoluciones y Reclamaciones:"
                iconAlt="fsdfsdfsdfs"
                text="Facilitar el proceso de devoluciones y reclamaciones mediante la transparecia y la trazabilidad proporcionadas por documentos generados en SingularDocs. Los problemas pueden ser identificados y resultos más rápidamente."
                iconPath="/web/lock-icon.png"
              />

              <CaseCard
                title="Gestión de Activos y Equipos:"
                iconAlt="fsdfsdfsdfs"
                text="Registrar activos y equipos para realizar un seguimiento eficiente de su ubicación, mantenimiento y estado. Esto ayuda a optimizar la utilización de recursos y prolongar la vida útil de los activos."
                iconPath="/web/lock-icon.png"
              />

              <CaseCard
                title="Cumplimiento de Normativas y Certificaciones:"
                iconAlt="fsdfsdfsdfs"
                text="Facilitar el cumplimiento de normativas y certificaciones al proporcionar registros transparentes y a prueba de manipuliciones en SingularDocs."
                iconPath="/web/lock-icon.png"
              />

              <CaseCard
                title="Pagos y Financiamiento:"
                iconAlt="fsdfsdfsdfs"
                text="Utilizar contratos inteligentes para gestionar pagos automáticos basados en el cumplimiento de ciertos hitos en la cadena de suministro. Esto agiliza los pagos y reduce los riesgos financieros."
                iconPath="/web/lock-icon.png"
              />

              <CaseCard
                title="Gestión de la Cadena de Frío:"
                iconAlt="fsdfsdfsdfs"
                text="Registrar la temperatura y condiciones de almacenamiento de productos perecederos en SingularDocs para garantizar el cumplimiento de los requisitos de la cadena de frío y la calidad de los productos."
                iconPath="/web/lock-icon.png"
              />
            </Row>
          </Container>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

/*





*/

/*

 <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Suministro y Logística">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Salud">
            Tab content for Profile
          </Tab>
          <Tab eventKey="longer-tab" title="Inmobiliaria">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="contact" title="Educación" disabled>
            Tab content for Contact
          </Tab>

          <Tab eventKey="contact" title="Entretenimietno" disabled>
            Tab content for Contact
          </Tab>

          <Tab eventKey="contact" title="Gobierno" disabled>
            Tab content for Contact
          </Tab>

          <Tab eventKey="contact" title="Recursos humanos" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>

*/
