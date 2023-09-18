"use client";
//Ventana About us (*/ω＼*)
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import BenefitsCard from "../../components/main/BenefitsCard";

export default function AboutUs() {
  return (
    <section>
      <Container fluid>
        <Row className='px-5'>
          <Col xs={12} lg={5} className="px-3 py-3">
            <Image
              style={{ width: "100%" }}
              src="https://static.vecteezy.com/system/resources/previews/005/915/627/non_2x/hand-drawn-doodle-set-of-blockchain-theme-items-round-composition-sketch-style-cryptocurrency-electronic-commerce-concept-illustration-vector.jpg"
            ></Image>
          </Col>

          <Col xs={12} lg={7} className="px-5 py-3 align-items-center" style={{display:'flex'}}>
            <div className="wrapper align-left">
              <h2 style={{fontSize:'50px'}}>Blockchain</h2>
              <p>
                Nuestra historia comenzó con la visión de transformar 
                la educación y la autenticación de documentos. 
                Desde [año de fundación], hemos estado comprometidos 
                en proporcionar una solución innovadora y segura 
                basada en Ethereum.
              </p>
              <p>
                Nuestra misión es empoderar a instituciones educativas,
                empresas y particulares con herramientas que garanticen 
                la integridad de sus certificados y documentos digitales.
              </p>
              <p>
                Nuestros expertos en blockchain, educación y tecnología 
                trabajan incansablemente para ofrecerte una solución de 
                vanguardia.
              </p>
            </div>
          </Col>

        </Row>
        
        {/* Mision/Vision */}
        <Row className='py-5 px-5 mt-5' style={{textAlign:'center', backgroundColor:'#F8F9FA'}}>
          <Col xm={12} md={6} className='my-5'>
            <h2>Nuestra Misión</h2>
            <p className='px-5 mx-5'>
              Nuestra misión es revolucionar la forma en que se emiten y verifican los certificados,
              brindando seguridad, confiabilidad y transparencia a cada paso del proceso.
            </p>
          </Col>
          <Col xm={12} md={6} className='my-5'>
            <h2>Nuestra Visión</h2>
            <p className='px-5 mx-5'>
              Buscamos construir un mundo donde cada logro, habilidad y logro pueda ser certificado de manera inmutable en la blockchain    Ethereum,
              proporcionando a las personas y organizaciones una forma infalible de demostrar su autenticidad.
            </p>
          </Col>
        </Row>

          {/* Valores */}
          <Row className='py-5 px-5 mt-5 mb-3'>
          <h2 className='mb-5' style={{textAlign:'center', fontSize:'40px'}}>Nuestros Valores</h2>
          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
              titulo="Integridad"
              contenido="Creemos en la honestidad y la integridad en todo lo que hacemos."
            />
          </Col>
          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
              titulo="Innovación"
              contenido="Nos esforzamos por estar a la vanguardia de la tecnología blockchain y la seguridad digital."
            />
          </Col>
          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
              titulo="Colaboración"
              contenido="Fomentamos la colaboración y el trabajo en equipo para alcanzar nuestros objetivos."
            />
          </Col>
          <Col className='my-3' xs={12} md={6} lg={3}>
            <BenefitsCard
              titulo="Transparencia"
              contenido="Mantenemos una total transparencia en nuestros procesos y operaciones."
            />
          </Col>
          
        </Row>

      </Container>
    </section>
  );
}
