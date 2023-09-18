'use client';
//Pagina de inicio (￣y▽,￣)╭ 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import MainNav from './components/main/MainNav';
import MainFoot from './components/main/MainFoot';

export default function Home() {
  return (
      <div>
        <MainNav/>
        <Container>
          <Row className='py-3 px-3'>
            <Col xs={12} md={6} className='mb-4 align-items-center' style={{display:'flex'}}>
            <div className="wrapper align-left">
              <h1>Emite, Gestiona y Verifica Certificados en Blockchain</h1>
              <p>La plataforma líder en Ethereum para certificados digitales seguros y verificables. Almacena de manera segura y siempre accesible.</p>
              <p>Bienvenido a nuestra plataforma de certificados en blockchain, donde la seguridad y la autenticidad se encuentran en el corazón de la educación digital. Descubre cómo nuestra tecnología blockchain revoluciona la emisión, gestión y verificación de certificados.</p>
            </div>
            </Col>
            <Col xs={12} md={6}>
              <Image
                style={{ width: "100%" }}
                src="https://create.vista.com/s3-static/create/uploads/2022/09/certificate-maker.webp"
              ></Image>
            </Col>
          </Row>
          <hr className='my-5'/>
          <Row className='py-3 px-3 mb-3'>
            <Col xs={12} md={6} className='mb-4'>
              <Image
                style={{ width: "100%" }}
                src="https://www.smartsheet.com/sites/default/files/2022-06/Mobile%20Web%20Page%20Images_hero%20header%20%281%29.png"
              ></Image>
            </Col>
            <Col xs={12} md={6}>
              <h1>Complementa con nuestra Aplicación Móvil</h1>
              <p>
              Lleva todos tus certificados contigo, en cualquier 
              lugar y en cualquier momento. Nuestra aplicación 
              móvil te permite acceder, compartir y verificar 
              fácilmente todos tus certificados digitales de 
              manera rápida y conveniente.
              </p>
              <Image
                style={{ width: "100%" }}
                src="https://t4.ftcdn.net/jpg/03/98/05/95/360_F_398059575_h3XJtdGMNhieUcDYwwkrSVt0PoVGAuai.jpg"
              ></Image>
            </Col>
          </Row>
        </Container>

        <hr className='my-5'/>
        
        <Container>
         <h1 className="my-5 text-center" >Preguntas frecuentes</h1>
         <Row>
            <Col>
                <h4>¿Qué es la tecnología blockchain y cómo la utilizan en su plataforma?</h4>
                <p>
                    <b>Respuesta: </b>La tecnología blockchain es un 
                    registro digital seguro y descentralizado que 
                    garantiza la integridad y la autenticidad de los 
                    datos. En nuestra plataforma, utilizamos Ethereum, 
                    una de las principales blockchains, para registrar 
                    y verificar certificados. Cada certificado se 
                    almacena en la blockchain, lo que lo hace 
                    inmutable y resistente a la falsificación.
                </p>
            </Col>
         </Row>   

         <Row>
          <Col>
            <h4>¿Cómo puedo emitir un certificado en su plataforma?</h4>
            <p>
                <b>Respuesta: </b> Emitir un certificado es 
                fácil. Después de registrarte y seleccionar 
                tu plan, puedes cargar los detalles del 
                certificado, como el nombre del destinatario,
                la fecha de emisión y la descripción. 
                Nuestra plataforma generará automáticamente 
                un certificado único y seguro que se almacena 
                en la blockchain.
            </p>
          </Col>
         </Row>

         <Row>
          <Col>
              <h4>¿Cómo verifico la autenticidad de un certificado?</h4>
              <p>
                  <b>Respuesta: </b>Utiliza nuestra aplicación 
                  móvil para escanear el código QR del certificado. 
                  Nuestra plataforma verificará instantáneamente la 
                  autenticidad del certificado y te proporcionará 
                  la información necesaria.
              </p>
          </Col>
         </Row>

         <Row>
          <Col>
                 <h4>¿Cuáles son los beneficios de su plataforma para las instituciones educativas?</h4>
                 <p>
                     <b>Respuesta: </b> Nuestra plataforma simplifica la 
                     emisión y verificación de certificados, lo que 
                     ahorra tiempo y recursos. Además, aumenta la 
                     confianza en los certificados emitidos, lo que 
                     puede mejorar la reputación de la institución y 
                     la empleabilidad de sus graduados.
                 </p>
          </Col>
         </Row>

         <Row>
             <Col>
                 <h4>¿Ofrecen soporte técnico?</h4>
                 <p>
                     <b>Respuesta: </b> Sí, ofrecemos soporte técnico a 
                     todos nuestros usuarios. Los clientes de planes premium 
                     tienen acceso a soporte 24/7, mientras que los clientes
                     de otros planes pueden contactarnos por correo 
                     electrónico durante el horario comercial.
                 </p>
             </Col>
         </Row>

         <Row>
             <Col>
                 <h4>¿Cómo puedo registrarme en su plataforma?</h4>
                 <p>
                     <b>Respuesta: </b> El proceso de registro es simple. 
                     Visita nuestra página de inicio y haz clic en el 
                     botón "Registrarse". Luego, sigue los pasos para 
                     crear una cuenta y seleccionar el plan que mejor 
                     se adapte a tus necesidades.
                 </p>
             </Col>
         </Row>

         <Row>
             <Col>
                 <h4>¿Qué sucede si pierdo mi acceso a la plataforma?</h4>
                 <p>
                     <b>Respuesta: </b> Si pierdes tu acceso, puedes utilizar 
                     la función de recuperación de contraseña en la página 
                     de inicio de sesión para restablecer tu contraseña. 
                     Si necesitas ayuda adicional, puedes ponerte en contacto 
                     con nuestro equipo de soporte.
                 </p>
             </Col>
         </Row>
        </Container>

        <MainFoot/>
      </div>
  );
}
