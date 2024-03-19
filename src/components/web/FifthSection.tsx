import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import { Nav } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import CaseCard from "./CaseCard";

export default function FifthSection() {
  return (
    <Tab.Container id="my-tabs" defaultActiveKey="supply-&-logistics">
      <div className="tabs-container">
        <Container>
          <Row>
            <Col xs={12}>
              <div id="blue-navbar">
                <Nav variant="tabs" className="d-flex justify-content-center">
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
          <Container className="">
            <Row className="">
              <CaseCard
                title="Seguimiento de la Cadena de Suministro:"
                imageAlt="Seguimiento de la Cadena de Suministro"
                text="Utilizar SingularDocs para rastrear el movimiento de bienes desde su origen hasta su destino. Cada transacción se registra documentos certificados, lo que permite una visibilidad completa y en tiempo real de la cadena de suministro."
                imagePath="/web/cases/supply-&-logistics/supply-chain.png"
              />

              <CaseCard
                title="Gestión de Inventarios:"
                imageAlt="Gestión de Inventarios"
                text="Mejora la gestión de inventarios mediante el registro de información en SingularDocs utilizando documentos confiables e inalterables. Esto facilitaría la coordinación entre diferentes partes de la cadena de suministro, reduciendo la probabilidad de errores y escasez de existencias."
                imagePath="/web/cases/supply-&-logistics/inventories.png"
              />

              <CaseCard
                title="Autenticidad de Productos:"
                imageAlt="Autenticidad de Productos"
                text="Utilizar certificados emitidos a través de SingularDocs para verificar la autenticidad de productos a lo largo de la candena de suministro. Esto es especialmente relevante para productos de alto valor o propensos a la falsificación."
                imagePath="/web/cases/supply-&-logistics/protocols.png"
              />

              <CaseCard
                title="Contratos Inteligentes en Logística:"
                imageAlt="Contratos Inteligentes en Logística"
                text="Implementar contratos inteligentes para automatizar y hacer más eficientes ciertos aspectos de la logística, como la gestión de rutas, la facturación y la programación de entregas."
                imagePath="/web/cases/supply-&-logistics/logistics.png"
              />

              <CaseCard
                title="Gestión de Devoluciones y Reclamaciones:"
                imageAlt="Gestión de Devoluciones y Reclamaciones"
                text="Facilitar el proceso de devoluciones y reclamaciones mediante la transparecia y la trazabilidad proporcionadas por documentos generados en SingularDocs. Los problemas pueden ser identificados y resultos más rápidamente."
                imagePath="/web/cases/supply-&-logistics/returns.png"
              />

              <CaseCard
                title="Gestión de Activos y Equipos:"
                imageAlt="Gestión de Activos y Equipos"
                text="Registrar activos y equipos para realizar un seguimiento eficiente de su ubicación, mantenimiento y estado. Esto ayuda a optimizar la utilización de recursos y prolongar la vida útil de los activos."
                imagePath="/web/cases/supply-&-logistics/actives.png"
              />

              <CaseCard
                title="Cumplimiento de Normativas y Certificaciones:"
                imageAlt="Cumplimiento de Normativas y Certificacione"
                text="Facilitar el cumplimiento de normativas y certificaciones al proporcionar registros transparentes y a prueba de manipuliciones en SingularDocs."
                imagePath="/web/cases/supply-&-logistics/regulations.png"
              />

              <CaseCard
                title="Pagos y Financiamiento:"
                imageAlt="Pagos y Financiamiento"
                text="Utilizar contratos inteligentes para gestionar pagos automáticos basados en el cumplimiento de ciertos hitos en la cadena de suministro. Esto agiliza los pagos y reduce los riesgos financieros."
                imagePath="/web/cases/supply-&-logistics/payments.png"
              />

              <CaseCard
                title="Gestión de la Cadena de Frío:"
                imageAlt="Gestión de la Cadena de Frío"
                text="Registrar la temperatura y condiciones de almacenamiento de productos perecederos en SingularDocs para garantizar el cumplimiento de los requisitos de la cadena de frío y la calidad de los productos."
                imagePath="/web/cases/supply-&-logistics/cold-chain.png"
              />
            </Row>
          </Container>
        </Tab.Pane>

        <Tab.Pane eventKey="health">
          <h1>Salud</h1>
        </Tab.Pane>

        <Tab.Pane eventKey="real-state">
          <h1>Inmobiliaria</h1>
        </Tab.Pane>

        <Tab.Pane eventKey="education">
          <h1>Educación</h1>
        </Tab.Pane>

        <Tab.Pane eventKey="entertainment">
          <Container>
            <Row>
              <CaseCard
                title="Venta de boletos:"
                imageAlt="Gestión de la Cadena de Frío"
                text="Utiliza SingularDocs para la venta de boletos de eventos, garantizando la autenticidad de los tickets y evitando la reventa fraudulenta."
                imagePath="/web/cases/supply-&-logistics/cold-chain.png"
              />
            </Row>
          </Container>
        </Tab.Pane>

        <Tab.Pane eventKey="government">
          <h1>Gobierno</h1>
        </Tab.Pane>

        <Tab.Pane eventKey="human-resources">
          <Container>
            <Row>
              <CaseCard
                title="Empleo:"
                imageAlt="Gestión de la Cadena de Frío"
                text="Simplifica la gestión de contratos laborales mediante la emisión y verificación de certificados respaldados por blockchain."
                imagePath="/web/cases/supply-&-logistics/cold-chain.png"
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
