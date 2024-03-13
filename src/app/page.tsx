"use client";

import Image from "next/image";

import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, NavbarBrand } from "react-bootstrap";
import BlueButton from "@/components/web/BlueButton";
import FeatureCard from "@/components/web/FeatureCard";
import { Fragment } from "react";
import FifthSection from "@/components/web/FifthSection";
import NavBar from "@/components/web/NavBar";

export default function Home() {
  return (
    <Fragment>
      {/* --------------------------------- NavBar --------------------------------- */}
      <NavBar></NavBar>

      {/* --------------------------- ¿Qué es blockchain? -------------------------- */}
      <div className="section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <h4 className="section-title">¿Qué es blockchain?</h4>
                <p className="blue-subtitle">
                  Blockchain es un libro mayor compartido e inmutable que
                  facilita el proceso de registro de transacciones y de
                  seguimiento de activos en una red de negocios.
                </p>

                <p className="gray-text-subtitle">
                  La relevancia de blockchain se fundamenta en la esencia de que
                  los negocios operan en base a información. La velocidad y
                  precisión con la que se obtiene esta información impacta
                  directamente en su rendimiento.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={12} md={6}>
              <p className="gray-text">
                Blockchain emerge como una soluciónóptima al proporcinar datos
                inmediatos, compartidos y totalmente transparentes almacenados
                en un registro distribuido e inmutable al que sólo los miembros
                autorizados pueden acceder, este beneficio simplifica el proceso
                de generar transacciones y rastrear activos en el entorno
                empresarial.
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
                pagos, cuentas, detalles de producción y otros aspectos. Además,
                al compartir una fuente única y confiable de información, los
                usuarios pueden examinar todos los detalles de una transacción
                desde su inicio hasta su conclusión, generando así una mayor
                confianza, eficiencia y oportunidades.
              </p>

              <BlueButton label="Testimonios" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* ---------------------------- ¿Para qué sirve? ---------------------------- */}
      <div className="section blue-background-section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <h4 className="section-title-white">¿Para qué sirve?</h4>
                <p className="light-blue-subtitle">
                  Nuestra plataforma fue creada con el objetivo de
                  transmitir/traducir los beneficios de blockchain a las
                  necesidades de la industria, por medio de macanismos claros y
                  accesibles para todos.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={12} md={6}>
              <p className="white-text">
                Por medio de nuestra plataforma se pueden crear documentos con
                plantillas específicas y certificados, esto garantiza que son
                originales, únicos e inalterables.
              </p>

              <p className="white-text">
                Adicionalmente nuestra plataforma cuenta con mecanismos útiles
                para almacenar de forma segura y distribuir los documentos
                certificados a todos los involucrados.
              </p>

              <p className="white-text">
                Con la ayuda de nuestra plataforma se puede consultar toda la
                información relacionada al certificado: ¿cuándo fue hecho?,
                ¿quién lo solicitó?, ¿para quién está dirigido?, fecha de
                caducidad (si es que la tiene), fecha de revocación (en caso de
                que lo esté), además de contar con los mecanismos necesarios
                para comprobar su autenticidad y para compartirlo con otras
                personas u organizaciones.
              </p>

              <BlueButton label="Contacto" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* ------------------- Características de un SingularDocs ------------------- */}
      <div className="section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <h4 className="section-title">
                  Características de un SingularDocs
                </h4>
                <p className="blue-subtitle">
                  La resultante de nuestra plataforma deberá garantizar que toda
                  información que sea cargada para ser convertida en un
                  SingularDocs, tendrá las siguientes características:
                </p>
              </div>
            </Col>
          </Row>

          <Row className="feature-container">
            <FeatureCard
              title="Auténtico"
              iconPath="/web/lock-icon.png"
              iconAlt=""
              text="La información cargada proviene de un emisor, su información está proporcionada por el mismo y proviene de una sola fuente:"
            />

            <FeatureCard
              title="Original"
              iconPath="/web/original-icon.png"
              iconAlt=""
              text="El documento resultante será auténtico y original ya que será 1 sola versión del mismo."
            />

            <FeatureCard
              title="Único"
              iconPath="/web/unique-icon.png"
              iconAlt=""
              text="El resultado de la carga de información y su construcción gráfica, digital y de metadatos es única en el mundo y no podrá existir otro resultado igual al emitido."
            />

            <FeatureCard
              title="Inalterable"
              iconPath="/web/unalterable-icon.png"
              iconAlt=""
              text="La información que se haya cargado permanecerá de forma inviolable por el resto de su existencia y de la existencia de la red."
            />
          </Row>
        </Container>
      </div>

      {/* ------------------------------ Casos de uso ------------------------------ */}
      <div className="section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <h4 className="section-title">Casos de uso</h4>
              </div>
            </Col>
          </Row>
        </Container>

        <FifthSection />
      </div>
    </Fragment>
  );
}

/*

<Fragment>
      <WebNavBar></WebNavBar>
      <WebStart />
      <WebWhatIs />
      <WebWhatIsItFor></WebWhatIsItFor>
      <Features></Features>
    </Fragment>

*/
