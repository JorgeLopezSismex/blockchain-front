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
                      Suministro y Logística
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
                text="Utilizar certificados emitidos a través de SingularDocs para verificar la autenticidad de productos a lo largo de la cadena de suministro. Esto es especialmente relevante para productos de alto valor o propensos a la falsificación."
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
                text="Facilitar el proceso de devoluciones y reclamaciones mediante la transparencia y la trazabilidad proporcionadas por documentos generados en SingularDocs. Los problemas pueden ser identificados y resueltos más rápidamente."
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
                text="Facilitar el cumplimiento de normativas y certificaciones al proporcionar registros transparentes y a prueba de manipulaciones en SingularDocs."
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
          <Container>
            <Row className="d-flex justify-content-center">
              <CaseCard
                title="Autenticación de Identidad en Salud:"
                imageAlt="Autenticación de Identidad en Salud"
                text="Utilizar SingularDocs para avalar la autenticidad de identidades digitales en el ámbito de la
                salud, permitiendo a los profesionales de la salud verificar la autenticidad de sus colegas y de
                los pacientes de manera rápida y segura."
                imagePath="/web/cases/health/health-identity-authentication.jpg"
              />

              <CaseCard
                title="Gestión de Suministros y Cadena de Frío:"
                imageAlt="Gestión de Suministros y Cadena de Frío"
                text="Utilizar SingularDocs para rastrear la cadena de suministro de medicamentos y dispositivos
                médicos, garantizando la autenticidad y la seguridad de los productos. Además, en el caso de
                medicamentos sensibles a la temperatura, la cadena de frío podría monitorizarse de manera
                más eficiente."
                imagePath="/web/cases/health/supply-management-and-cold-chain.jpg"
              />

              <CaseCard
                title="Prescripciones Electrónicas:"
                imageAlt="Prescripciones Electrónicas"
                text="Implementar prescripciones electrónicas seguras mediante contratos inteligentes en SingularDocs. Esto reduciría los errores en las prescripciones y facilita el seguimiento de los medicamentos recetados."
                imagePath="/web/cases/health/electronic-prescriptions.jpg"
              />

              <CaseCard
                title="Gestión de Consentimientos y Privacidad:"
                imageAlt="Gestión de Consentimientos y Privacidad"
                text="Utilizar SingularDocs para avalar el consentimiento del paciente y garantizar un acceso controlado a la información médica. Los pacientes podrían otorgar y revocar fácilmente el acceso a sus datos de manera segura."
                imagePath="/web/cases/health/consent-and-privacy-management.jpg"
              />

              <CaseCard
                title="Prevención de Fraudes en Seguros de Salud:"
                imageAlt="Prevención de Fraudes en Seguros de Salud"
                text="Reducir el riesgo de fraudes en seguros de salud mediante la inmutabilidad de los datos en SingularDocs. La información sobre reclamaciones y procedimientos médicos sería transparente y difícil de manipular."
                imagePath="/web/cases/health/health-insurance-fraud-prevention.jpg"
              />

              <CaseCard
                title="Telemedicina y Registro de Consultas:"
                imageAlt="Telemedicina y Registro de Consultas"
                text="Registrar de manera segura las consultas médicas realizadas a través de plataformas de telemedicina, asegurando un historial confiable y accesible para los profesionales de la salud."
                imagePath="/web/cases/health/telemedicine-and-consultation-registration.jpg"
              />
            </Row>
          </Container>
        </Tab.Pane>

        <Tab.Pane eventKey="real-state">
          <Container>
            <Row className="d-flex justify-content-center">
              <CaseCard
                title="Registro de Propiedad:"
                imageAlt="Registro de Propiedad"
                text="Utilizar SingularDocs para crear un registro inmutable de propiedades. Los registros de propiedad descentralizados y seguros podrían reducir fraudes y disputas, proporcionando una fuente confiable y transparente de información sobre la propiedad."
                imagePath="/web/cases/real-state/property-registry.jpg"
              />

              <CaseCard
                title="Transacciones Inmobiliarias:"
                imageAlt="Transacciones Inmobiliarias"
                text="Agilizar y asegurar las transacciones inmobiliarias mediante contratos inteligentes en SingularDocs. Estos contratos podrían ejecutar automáticamente pasos clave en el proceso de compra o alquiler, como la transferencia de fondos y la transferencia de propiedad, cuando se cumplen ciertas condiciones."
                imagePath="/web/cases/real-state/real-estate-transactions.jpg"
              />

              <CaseCard
                title="Tokenización de Bienes Raíces:"
                imageAlt="Tokenización de Bienes Raíces"
                text='Tokenizar propiedades inmobiliarias, dividiéndolas en "tokens" que pueden ser comprados y vendidos. Esto facilita la inversión fraccionada en bienes raíces, permitiendo a los inversores poseer partes de propiedades sin necesidad de comprar la propiedad completa.'
                imagePath="/web/cases/real-state/real-estate-tokenization.jpg"
              />

              <CaseCard
                title="Contratos de Arrendamiento Inteligentes:"
                imageAlt="Contratos de Arrendamiento Inteligentes"
                text="Implementar contratos de arrendamiento en SingularDocs que se ejecuten automáticamente cuando se cumplan las condiciones establecidas, como el pago del alquiler. Esto podría simplificar la gestión de propiedades y reducir disputas entre propietarios e inquilinos."
                imagePath="/web/cases/real-state/smart-lease-contracts.jpg"
              />

              <CaseCard
                title="Evaluación de Propiedades:"
                imageAlt="Evaluación de Propiedades"
                text="Facilitar la evaluación de propiedades al mantener registros inalterables de las mejoras realizadas, tasaciones y cambios de propiedad. Esto proporciona a compradores, vendedores y tasadores un historial confiable de la propiedad."
                imagePath="/web/cases/real-state/property-evaluation.jpg"
              />

              <CaseCard
                title="Financiamiento Inmobiliario:"
                imageAlt="Financiamiento Inmobiliario"
                text="Mejorar la eficiencia y transparencia en el proceso de financiamiento inmobiliario mediante contratos inteligentes y registros de propiedad en SingularDocs. Esto podría reducir el tiempo necesario para aprobar préstamos y facilitar la verificación de la propiedad."
                imagePath="/web/cases/real-state/real-estate-financing.jpg"
              />

              <CaseCard
                title="Gestión de Propiedades:"
                imageAlt="Gestión de Propiedades"
                text="Utilizar SingularDocs para gestionar eficientemente la información relacionada con la gestión de propiedades, como reparaciones, mantenimiento y cambios en la titularidad."
                imagePath="/web/cases/real-state/property-management.jpg"
              />

              <CaseCard
                title="Crowdfunding Inmobiliario:"
                imageAlt="Crowdfunding Inmobiliario"
                text="Permitir el crowdfunding inmobiliario mediante la emisión de tokens respaldados por propiedades. Esto facilita la participación de pequeños inversores en proyectos inmobiliarios de mayor escala."
                imagePath="/web/cases/real-state/real-estate-crowdfunding.jpg"
              />
            </Row>
          </Container>
        </Tab.Pane>

        <Tab.Pane eventKey="education">
          <Container>
            <Row className="d-flex justify-content-center">
              <CaseCard
                title="Verificación de Credenciales:"
                imageAlt="Verificación de Credenciales"
                text="Garantizar la autenticidad de certificados, títulos y diplomas en SingularDocs para que puedan ser fácilmente verificados por empleadores, otras instituciones académicas o cualquier entidad que requiera autenticar las credenciales de un individuo."
                imagePath="/web/cases/education/credential-verification.jpg"
              />

              <CaseCard
                title="Gestión de Expedientes Académicos:"
                imageAlt="Gestión de Expedientes Académicos"
                text="Registrar de manera segura y transparente el historial académico de los estudiantes mediante documentos de certificados de Singulardocs. Esto incluiría notas, cursos, actividades extracurriculares y cualquier otro logro académico, proporcionando un registro confiable que puede ser accesible a lo largo del tiempo."
                imagePath="/web/cases/education/academic-records-management.jpg"
              />

              <CaseCard
                title="Autenticación de Investigaciones:"
                imageAlt="Autenticación de Investigaciones"
                text="Registrar investigaciones y proyectos académicos en SingularDocs para asegurar la autoría y la integridad de la investigación. Esto puede ser particularmente útil en entornos académicos donde la originalidad y la autoría son cruciales."
                imagePath="/web/cases/education/research-authentication.jpg"
              />

              <CaseCard
                title="Programas de Certificación y Formación Continua:"
                imageAlt="Programas de Certificación y Formación Continua"
                text="Registrar programas de certificación y educación continua, emitiendo certificados en SigularDocs para facilitar la verificación y el reconocimiento de habilidades y conocimientos adicionales adquiridos después de la graduación."
                imagePath="/web/cases/education/certification-and-continuing-training-programs.jpg"
              />
            </Row>
          </Container>
        </Tab.Pane>

        <Tab.Pane eventKey="entertainment">
          <Container>
            <Row className="d-flex justify-content-center">
              <CaseCard
                title="Distribución de Contenido:"
                imageAlt="Distribución de Contenido"
                text="Utilizar SingularDocs para facilitar la distribución de contenido digital, permitiendo a los creadores vender directamente a los consumidores sin la necesidad de intermediarios. Los contratos inteligentes pueden automatizar los pagos y asegurar un reparto justo de ingresos."
                imagePath="/web/cases/entertainment/content-distribution.jpg"
              />

              <CaseCard
                title="Gestión de Derechos de Autor:"
                imageAlt="Gestión de Derechos de Autor"
                text="Registrar derechos de autor y propiedad intelectual en SingularDocs para garantizar la autenticidad y la trazabilidad. Esto facilita la gestión y protección de los derechos de los creadores de contenido."
                imagePath="/web/cases/entertainment/copyright-management.jpg"
              />

              <CaseCard
                title="Venta de Boletos y Eventos:"
                imageAlt="Venta de Boletos y Eventos"
                text="Utilizar SingularDocs para la venta de boletos de eventos, garantizando la autenticidad de los tickets y evitando la reventa fraudulenta. Los contratos inteligentes podrían gestionar automáticamente la transferencia de la propiedad del boleto."
                imagePath="/web/cases/entertainment/ticket-sales-and-events.jpg"
              />

              <CaseCard
                title="Gestión de Regalías:"
                imageAlt="Gestión de Regalías"
                text="Mejorar la transparencia y precisión en el seguimiento y distribución de Regalías a través de contratos inteligentes en SingularDocs. Los artistas y creadores recibirán pagos de manera más rápida y directa."
                imagePath="/web/cases/entertainment/royalty-management.jpg"
              />

              <CaseCard
                title="Gestión de Licencias y Contratos:"
                imageAlt="Gestión de Licencias y Contratos"
                text="Utilizar contratos inteligentes en SingularDocs para gestionar automáticamente licencias y contratos en la industria del entretenimiento. Esto agilizaría procesos y reduciría la necesidad de intermediarios."
                imagePath="/web/cases/entertainment/license-and-contract-management.jpg"
              />

              <CaseCard
                title="Autenticidad de Artículos de Colección:"
                imageAlt="Autenticidad de Artículos de Colección"
                text="Certificar la autenticidad de artículos de colección, como arte digital o mercancía, mediante registros en SingularDocs. Esto proporciona a los compradores garantías sobre la originalidad y propiedad de los artículos."
                imagePath="/web/cases/entertainment/authenticity-of-collectibles.jpg"
              />

              <CaseCard
                title="Colaboraciones y Producciones:"
                imageAlt="Colaboraciones y Producciones"
                text="Facilitar la colaboración entre artistas y productores mediante contratos inteligentes que definen automáticamente la distribución de ingresos y derechos en función de los términos preestablecidos."
                imagePath="/web/cases/entertainment/collaborations-and-productions.jpg"
              />
            </Row>
          </Container>
        </Tab.Pane>

        <Tab.Pane eventKey="government">
          <Container>
            <Row className="d-flex justify-content-center">
              <CaseCard
                title="Votación Electrónica Segura:"
                imageAlt="Votación Electrónica Segura"
                text="Utilizar SingularDocs para crear sistemas de votación electrónica seguros y transparentes, garantizando la integridad de los resultados y reduciendo el riesgo de manipulación."
                imagePath="/web/cases/government/secure-electronic-voting.jpg"
              />

              <CaseCard
                title="Gestión de Identidad Digital:"
                imageAlt="Gestión de Identidad Digital"
                text="Desarrollar sistemas de gestión de identidad basados en SingularDocs para garantizar la autenticidad y seguridad de la información personal. Los ciudadanos podrían tener control sobre su propia identidad y proporcionar acceso selectivo a servicios gubernamentales."
                imagePath="/web/cases/government/digital-identity-management.jpg"
              />

              <CaseCard
                title="Contratación Pública Transparente:"
                imageAlt="Contratación Pública Transparente"
                text="Mejorar la transparencia en los procesos de contratación pública mediante el registro de contratos en SingularDocs. Esto reduce la posibilidad de corrupción y garantiza una gestión más transparente de los fondos públicos."
                imagePath="/web/cases/government/transparent-public-procurement.jpg"
              />

              <CaseCard
                title="Registro de Tierras Descentralizado:"
                imageAlt="Registro de Tierras Descentralizado"
                text="Utilizar SingularDocs para mantener registros inmutables y transparentes de la propiedad de la tierra, reduciendo la posibilidad de fraudes y disputas relacionadas con la propiedad."
                imagePath="/web/cases/government/decentralized-land-registry.jpg"
              />

              <CaseCard
                title="Gestión de Ayudas y Subsidios:"
                imageAlt="Gestión de Ayudas y Subsidios"
                text="Implementar contratos inteligentes para la gestión eficiente y transparente de programas de ayuda y subsidios. Los ciudadanos podrían recibir beneficios de manera más rápida y segura."
                imagePath="/web/cases/government/aid-and-subsidy-management.jpg"
              />

              <CaseCard
                title="Seguimiento de Gastos Gubernamentales:"
                imageAlt="Seguimiento de Gastos Gubernamentales"
                text="Registrar los gastos gubernamentales enSingularDocs para proporcionar una visión clara y transparente de cómo se asignan y utilizan los fondos públicos."
                imagePath="/web/cases/government/tracking-government-expenditures.jpg"
              />

              <CaseCard
                title="Gestión de Servicios Sociales:"
                imageAlt="Gestión de Servicios Sociales"
                text="Utilizar SingularDocs para gestionar la distribución de servicios sociales, como la atención médica, educación y vivienda, asegurando que los beneficios lleguen a quienes los necesitan de manera eficiente."
                imagePath="/web/cases/government/social-services-management.jpg"
              />

              <CaseCard
                title="Registro Civil y Nacimientos:"
                imageAlt="Registro Civil y Nacimientos"
                text="Registrar eventos civiles, como nacimientos y matrimonios, en SingularDocs para garantizar la autenticidad y disponibilidad de estos registros."
                imagePath="/web/cases/government/civil-registry-and-births.jpg"
              />

              <CaseCard
                title="Transparencia en la Administración Pública:"
                imageAlt="Transparencia en la Administración Pública"
                text="Publicar información gubernamental relevante en una SingularDocs para garantizar la transparencia y permitir que los ciudadanos accedan fácilmente a datos sobre políticas, decisiones gubernamentales y estadísticas."
                imagePath="/web/cases/government/transparency-in-public-administration.jpg"
              />

              <CaseCard
                title="Gestión de Documentos Oficiales:"
                imageAlt="Gestión de Documentos Oficiales"
                text="Garantizar la integridad de documentos oficiales, como leyes, regulaciones y contratos, en una SingularDocs para garantizar su integridad y autenticidad."
                imagePath="/web/cases/government/official-document-management.jpg"
              />
            </Row>
          </Container>
        </Tab.Pane>

        <Tab.Pane eventKey="human-resources">
          <Container>
            <Row className="d-flex justify-content-center">
              <CaseCard
                title="Gestión de Identidad y Acceso:"
                imageAlt="Gestión de Identidad y Acceso"
                text="Utilizar SingularDocs para avalar la identidad digital de los empleados, lo que permite un acceso seguro y verificado a sistemas y recursos internos. Los empleados podrían tener un perfil digital inmutable que contiene sus credenciales y certificaciones."
                imagePath="/web/cases/human-resources/identity-and-access-management.jpg"
              />

              <CaseCard
                title="Selección y Contratación:"
                imageAlt="Selección y Contratación"
                text="Avalar la autenticidad de manera segura y transparente los datos de candidatos, como historial laboral, habilidades y certificaciones. Esto podría simplificar y agilizar el proceso de selección al verificar automáticamente la autenticidad de la información proporcionada por los candidatos."
                imagePath="/web/cases/human-resources/selection-and-hiring.jpg"
              />

              <CaseCard
                title="Gestión de Recompensas y Beneficios:"
                imageAlt="Gestión de Recompensas y Beneficios"
                text="Facilitar la administración de programas de recompensas y beneficios mediante contratos inteligentes en SingularDocs. Los empleados podrían acceder y gestionar sus beneficios de manera eficiente, y los registros de beneficios serían transparentes y a prueba de manipulaciones."
                imagePath="/web/cases/human-resources/rewards-and-benefit-management.jpg"
              />

              <CaseCard
                title="Registro de Desempeño y Evaluación:"
                imageAlt="Registro de Desempeño y Evaluación"
                text="Mantener un registro inmutable y transparente del desempeño de los empleados a lo largo del tiempo. Esto podría incluir evaluaciones, logros y retroalimentación, proporcionando un historial confiable y a prueba de alteraciones."
                imagePath="/web/cases/human-resources/performance-and-evaluation-record.jpg"
              />

              <CaseCard
                title="Gestión de Nómina:"
                imageAlt="Gestión de Nómina"
                text="Agilizar el proceso de nómina mediante la automatización basada en contratos inteligentes. Garantizar pagos precisos y transparentes, y proporcionar a los empleados acceso directo a su historial de compensación."
                imagePath="/web/cases/human-resources/payroll-management.jpg"
              />

              <CaseCard
                title="Formación y Desarrollo Profesional:"
                imageAlt="Formación y Desarrollo Profesional"
                text="Registrar de manera segura las credenciales de capacitación y desarrollo profesional en SingularDocs. Esto facilita la verificación de habilidades y certificaciones cuando sea necesario, tanto para la empresa como para los propios empleados."
                imagePath="/web/cases/human-resources/training-and-professional-development.jpg"
              />

              <CaseCard
                title="Contratos Laborales Inteligentes:"
                imageAlt="Contratos Laborales Inteligentes"
                text="Utilizar contratos inteligentes en SingularDocs para avalar automáticamente ciertos aspectos de los contratos laborales, como renovaciones, bonificaciones y cláusulas específicas."
                imagePath="/web/cases/human-resources/smart-labor-contracts.jpg"
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
