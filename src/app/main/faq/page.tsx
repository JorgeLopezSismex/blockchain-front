"use client";
//Ventana About us (*/ω＼*)
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function FAQ() {
  return (
   <Container>
    <h1 className="my-5 text-center" >Preguntas frecuentes</h1>
    <Row>
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
    </Row>   

    <Row>
        <div>
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
        </div>
    </Row>

    <Row>
        <div>
            <h4>¿Cómo verifico la autenticidad de un certificado?</h4>
            <p>
                <b>Respuesta: </b>Utiliza nuestra aplicación 
                móvil para escanear el código QR del certificado. 
                Nuestra plataforma verificará instantáneamente la 
                autenticidad del certificado y te proporcionará 
                la información necesaria.
            </p>
        </div>
    </Row>

    <Row>
        <div>
            <h4>¿Cuáles son los beneficios de su plataforma para las instituciones educativas?</h4>
            <p>
                <b>Respuesta: </b> Nuestra plataforma simplifica la 
                emisión y verificación de certificados, lo que 
                ahorra tiempo y recursos. Además, aumenta la 
                confianza en los certificados emitidos, lo que 
                puede mejorar la reputación de la institución y 
                la empleabilidad de sus graduados.
            </p>
        </div>
    </Row>

    <Row>
        <div>
            <h4>¿Ofrecen soporte técnico?</h4>
            <p>
                <b>Respuesta: </b> Sí, ofrecemos soporte técnico a 
                todos nuestros usuarios. Los clientes de planes premium 
                tienen acceso a soporte 24/7, mientras que los clientes
                de otros planes pueden contactarnos por correo 
                electrónico durante el horario comercial.
            </p>
        </div>
    </Row>

    <Row>
        <div>
            <h4>¿Cómo puedo registrarme en su plataforma?</h4>
            <p>
                <b>Respuesta: </b> El proceso de registro es simple. 
                Visita nuestra página de inicio y haz clic en el 
                botón "Registrarse". Luego, sigue los pasos para 
                crear una cuenta y seleccionar el plan que mejor 
                se adapte a tus necesidades.
            </p>
        </div>
    </Row>

    <Row>
        <div>
            <h4>¿Qué sucede si pierdo mi acceso a la plataforma?</h4>
            <p>
                <b>Respuesta: </b> Si pierdes tu acceso, puedes utilizar 
                la función de recuperación de contraseña en la página 
                de inicio de sesión para restablecer tu contraseña. 
                Si necesitas ayuda adicional, puedes ponerte en contacto 
                con nuestro equipo de soporte.
            </p>
        </div>
    </Row>
   </Container>
  );
}