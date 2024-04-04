"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "@/components/web/NavBar";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "@/components/web/Footer";
import PriceCard from "@/components/web/PriceCard";
import BlueButton from "@/components/web/BlueButton";
import FeatureCard from "@/components/web/FeatureCard";
import ContactForm from "@/components/web/ContactForm";
import ActionToast from "@/components/main/ActionToast";
import FifthSection from "@/components/web/FifthSection";
import TestimonialCard from "@/components/web/TestimonialCard";
import NoticeOfPrivacy from "@/components/web/NoticeOfPrivacy";
import { Card } from "react-bootstrap";
import NavScrollExample from "@/components/web/NavBarScroll";
import OffcanvasExample from "@/components/web/NavBarScroll";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <Fragment>
      {/* --------------------------------- NavBar --------------------------------- */}
      <NavBar />
      {/* <OffcanvasExample></OffcanvasExample> */}

      {/* ----------------------------- ¿Quiénes somos? ---------------------------- */}
      <div id="about-us" className="d-flex align-items-center header">
        <Container>
          <Row className="d-flex justify-content-start">
            <Col md={8}>
              <h5 className="primary-text">Innovate Technology</h5>
              <h1 className="primary-text">¿Quiénes somos?</h1>
              <p className="seconday-text">
                Somos una empresa confiable que ofrece una plataforma
                tecnológica basada en blockchain con Ethereum con la cual las
                empresas pueden generar información segura y accesible,
                garantizando su integridad.
              </p>
              <BlueButton label="Contacto" href="#contact" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* --------------------------- ¿Qué es blockchain? -------------------------- */}
      <div id="what-is-blockchain" className="section">
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
                  los negocios operan a base de información. La velocidad y
                  precisión con la que se obtiene esta información impacta
                  directamente en su rendimiento.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="left-section-image">
                <Image
                  layout="fill"
                  alt="What is?"
                  objectFit="cover"
                  src="/web/sections/what-is.png"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <p className="gray-text">
                Blockchain emerge como una solución óptima al proporcionar datos
                inmediatos, compartidos y totalmente transparentes almacenados
                en un registro distribuido e inmutable al que solo los miembros
                autorizados pueden acceder. Este beneficio simplifica el proceso
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

              {/* <BlueButton label="Testimonios" href="#testimonials" /> */}
            </Col>
          </Row>
        </Container>
      </div>

      {/* ---------------------------- ¿Para qué sirve? ---------------------------- */}
      <div id="what-is-it-for" className="section blue-background-section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <h4 className="section-title-white">¿Para qué sirve?</h4>
                <p className="light-blue-subtitle">
                  Nuestra plataforma fue creada con el objetivo de
                  transmitir/traducir los beneficios de blockchain a las
                  necesidades de la industria, por medio de mecanismos claros y
                  accesibles para todos.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="left-section-image">
                <Image
                  layout="fill"
                  alt="Blockchain"
                  objectFit="cover"
                  src="/web/sections/blockchain.png"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <p className="white-text">
                Por medio de nuestra plataforma se pueden crear documentos con
                plantillas específicas y certificados, esto garantiza que son
                originales, únicos e inalterables.
              </p>

              <p className="white-text">
                Adicionalmente, nuestra plataforma cuenta con mecanismos útiles
                para almacenar de forma segura y distribuir los documentos
                certificados a todos los involucrados.
              </p>

              <p className="white-text">
                Con la ayuda de nuestra plataforma se puede consultar toda la
                información relacionada con el certificado: ¿cuándo fue hecho?,
                ¿quién lo solicitó?, ¿para quién está dirigido?, fecha de
                caducidad (si es que la tiene), fecha de revocación (en caso de
                que lo esté), además de contar con los mecanismos necesarios
                para comprobar su autenticidad y para compartirlo con otras
                personas u organizaciones.
              </p>

              <BlueButton label="Contacto" href="#contact" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* ------------------- Características de un SingularDocs ------------------- */}
      <div id="features" className="section">
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
              iconPath="/web/features/lock-icon.png"
              iconAlt=""
              text="La información cargada proviene de un emisor, su información está proporcionada por el mismo y proviene de una sola fuente."
            />

            <FeatureCard
              title="Original"
              iconPath="/web/features/original-icon.png"
              iconAlt=""
              text="El documento resultante será auténtico y original ya que será 1 sola versión del mismo."
            />

            <FeatureCard
              title="Único"
              iconPath="/web/features/unique-icon.png"
              iconAlt=""
              text="El resultado de la carga de información y su construcción gráfica, digital y de metadatos es única en el mundo y no podrá existir otro resultado igual al emitido."
            />

            <FeatureCard
              title="Inalterable"
              iconPath="/web/features/unalterable-icon.png"
              iconAlt=""
              text="La información que se haya cargado permanecerá de forma inviolable por el resto de su existencia y de la existencia de la red."
            />
          </Row>
        </Container>
      </div>

      {/* ------------------------------ Casos de uso ------------------------------ */}
      <div id="use-cases" className="section">
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

      {/* ------------------------------- Testimonios ------------------------------ */}
      {/* <div id="testimonials" className="section gray-section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <h4 className="section-title-white">Testimonios</h4>
                <p className="white-subtitle">
                  Blockchain es un libro mayor compartido e inmutable que
                  facilita el proceso de registro de transacciones y de
                  seguimiento de activos en una red de negocios.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Row>
        </Container>
      </div> */}

      {/* --------------------------------- Costos --------------------------------- */}
      {/* <div className="section costs-background-section">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="flex-column align-items-center">
                <h4 className="section-title-white">Costos</h4>
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
            <PriceCard name="Producto 1" price={100} period="MENSUAL">
              <li className="d-flex justify-content-center available-feature">
                Incluido 1
              </li>
              <li className="d-flex justify-content-center available-feature">
                Incluido 2
              </li>
              <li className="d-flex justify-content-center available-feature">
                Incluido 3
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 1
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 2
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 3
              </li>
            </PriceCard>

            <PriceCard name="Producto 2" price={100} period="MENSUAL">
              <li className="d-flex justify-content-center available-feature">
                Incluido 1
              </li>
              <li className="d-flex justify-content-center available-feature">
                Incluido 2
              </li>
              <li className="d-flex justify-content-center available-feature">
                Incluido 3
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 1
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 2
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 3
              </li>
            </PriceCard>

            <PriceCard name="Producto 3" price={100} period="MENSUAL">
              <li className="d-flex justify-content-center available-feature">
                Incluido 1
              </li>
              <li className="d-flex justify-content-center available-feature">
                Incluido 2
              </li>
              <li className="d-flex justify-content-center available-feature">
                Incluido 3
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 1
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 2
              </li>
              <li className="d-flex justify-content-center not-available-feature">
                No incluido 3
              </li>
            </PriceCard>
          </Row>
        </Container>
      </div> */}

      {/* -------------------------------- Contacto -------------------------------- */}

      <div id="contact" className="section">
        <ContactForm
          setShowToast={setShowToast}
          setToastTitle={setToastTitle}
          setToastMessage={setToastMessage}
          setToastVariant={setToastVariant}
        />
      </div>

      {/* --------------------------------- Footer --------------------------------- */}
      <Footer setShowPrivacyModal={setShowPrivacyModal} />

      <ActionToast
        delay={6000}
        show={showToast}
        title={toastTitle}
        variant={toastVariant}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />

      <NoticeOfPrivacy
        showPrivacyModal={showPrivacyModal}
        setShowPrivacyModal={setShowPrivacyModal}
      />
    </Fragment>
  );
}
