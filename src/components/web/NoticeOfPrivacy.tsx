import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function NoticeOfPrivacy({
  showPrivacyModal,
  setShowPrivacyModal,
}: {
  showPrivacyModal: boolean;
  setShowPrivacyModal: any;
}) {
  const handleClose = () => setShowPrivacyModal(false);
  const handleShow = () => setShowPrivacyModal(true);

  return (
    <Modal
      size="lg"
      scrollable={true}
      onHide={handleClose}
      show={showPrivacyModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Aviso de privacidad</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h6 className="privacy-title">Propósito</h6>
          <p>
            El propósito de esta Política de Privacidad es proteger la confianza
            que ha depositado en SingularDocs. SingularDocs se compromete a
            mantener la confidencialidad, integridad y seguridad de información
            personal que nos confían los donantes actuales y potenciales, los
            usuarios del sitio web, usuarios de la aplicación, suscriptores,
            funcionarios y personal de agencias sin fines de lucro que se
            acercan a nosotros para financiación y las personas a las que
            sirven, y todas las demás personas asociadas con cualquiera de los
            servicios y productos que ofrecemos. La información personal que
            recopilamos de usted será manejada con cuidado y puede usarse con el
            propósito de dar un mejor servicio en nuestra plataforma.
          </p>

          <p>
            Le pedimos que lea las disposiciones a continuación a través de las
            cuales se cumplen nuestros objetivos con su consentimiento
            informado.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">Nuestro objetivo principal</h6>
          <p>Celebrar y proteger tus éxitos.</p>
        </div>

        <div>
          <h6 className="privacy-title">Información personal</h6>
          <p>
            Consideramos cualquier información de identificación individual
            recopilada en relación con su uso del sitio web
            https://www.sungulardocs.com/ (el "Sitio") y las aplicaciones
            SingularDocs disponible en App Store y Google Play (las
            "Aplicaciones") como Información personal. Esto incluye, pero no se
            limita a, nombre y apellido, imagen grabada desde su dispositivo
            móvil cámaras y / o fotografías / imágenes de cuentas de redes
            sociales, dirección (incluida la dirección de residencia, ciudad de
            residencia, estado / país de residencia y código postal), número de
            teléfono, número de teléfono cellular, correo electrónico, fecha de
            nacimiento, sexo y estado civil. No está obligado(a) a proporcionar
            información personal; sin embargo, se requiere el registro de una
            cuenta para acceder a ciertos aspectos y funciones del Sitio. Toda
            esa información personal será protegida y manejada de conformidad
            con esta Política de privacidad.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">
            Recopilación y uso de información personal
          </h6>
          <p>
            SingularDocs reserva el derecho de compartir su información personal
            con cualquiera de sus socios o entidades externas o utilizar su
            información personal para fines comerciales relacionados en el
            cumplimiento de nuestro objetivo de evangelizar y transmitir el
            mensaje de Cristo y la Iglesia Católica. Es posible que también
            necesitemos compartir su información personal con agencias del
            gobierno u otros organismos reguladores y funcionarios encargados de
            hacer cumplir la ley para cumplir con las leyes o procesos legales
            válidos. Recopilamos su información personal de las siguientes
            maneras:
          </p>

          <ol>
            <li>
              Solicitud de cuenta. Una aplicación para abrir una cuenta puede
              incluir su nombre completo, dirección, correo electrónico, número
              de teléfono, sexo, fecha de nacimiento y cualquier nombre de
              usuario que pueda utilizar. Esta información se utiliza para
              responder a sus consultas, administrar su cuenta y recomendar
              servicios que puedan ser de su interés.
            </li>
            <li>
              Email. Solo después de que opte al (“Opt-in”) suscribirse,
              usaremos su dirección de correo electrónico para enviarle
              actualizaciones e información sobre sus cuentas y los servicios
              que proporcionar, información de servicio de cuenta y boletines
              electrónicos.
            </li>
            <li>
              Pagos. Podremos recopilar y mantener información sobre pagos,
              contribuciones, recomendaciones de subvenciones e información
              relacionada con su pago. Esta información se utiliza para
              administrar su cuenta y recomendar servicios que pueden ser de su
              interés.
            </li>
            <li>
              Tecnologías de seguimiento. Cuando visita nuestro Sitio y nuestras
              Aplicaciones, podremos utilizar herramientas para mejorar su
              experiencia de navegación por Internet. Estas herramientas nos
              permiten reconocerle cuando regrese a nuestro Sitio, para mantener
              su sesión mientras navega, y para ayúdanos a brindarle una
              experiencia más personalizada. Esto puede incluir el uso de
              detalles, direcciones IP, sistema operativo y tipo de navegador.
              Puede configurar su navegador para rechazar todas o algunas
              cookies del navegador, o para avisarle cuándo cookies sean
              enviadas. Si desactiva o rechaza las cookies, tenga en cuenta que
              algunas partes de el Sitio puede ser inaccesible o no funcionar
              correctamente.
            </li>
            <li>
              Sitios web de terceros. SingularDocs podrá celebrar, tener
              convenios con, tener enlaces y / o remitirlo a otros sitios
              electrónicos de terceros. Nosotros no controlamos la recopilación
              o el uso de su información por terceros. La información que
              transmita a sitios que no sean el Sitio están sujetos a las
              políticas de privacidad de aquellos sitios de terceros. Por esta
              razón SingularDocs no se hace responsable de ningunas políticas de
              privacidad establecidas fuera del Sitio. Estos terceros pueden
              proporcionarle formas de elegir que no se recopile ni utilice su
              información. Cuando interactúa con nuestra publicidad y
              aplicaciones en sitios web de terceros y servicios, sólo si esas
              aplicaciones o publicidad incluyen enlaces a esta Política de
              privacidad se protegerá y manejará su información personal de
              conformidad con esta Política de privacidad.
            </li>
            <li>
              Publicaciones (o “Posts”). Puede proporcionar información para que
              sea publicada o mostrada (en adelante, "Publicado") en áreas
              públicas del Sitio, o transmitido a otros usuarios del Sitio o
              terceros (colectivamente, "Contribuciones del usuario"). Sus
              contribuciones de usuario son publicadas y transmitidas a otros
              bajo su propio riesgo. Aunque limitamos el acceso a ciertas
              páginas para obtener dicha información iniciando sesión en el
              perfil de su cuenta, tenga en cuenta que ninguna medida de
              seguridad es perfecta o impenetrable. Además, no podemos controlar
              las acciones de otros usuarios del Sitio con quienes puede optar
              por compartir sus Contribuciones de usuario. Por lo tanto, no
              podemos y no hacemos garantiza que sus Contribuciones de usuario
              no serán vistas por personas no autorizadas.
            </li>
            <li>
              Aplicaciones (o “Apps”). A través de las aplicaciones móviles y de
              escritorio que descarga de este Sitio, que proporcionan
              interacción dedicada no basada en navegador entre usted y este
              Sitio. Consulte nuestra Política de privacidad para aplicaciones
              aquí. [https://singulardocs.com/politicasapp]
            </li>
          </ol>
        </div>

        <div>
          <h6 className="privacy-title">Seguimiento online</h6>
          <p>
            Nuestro Sitio no admite la configuración del navegador "No rastrear"
            y no participa en ningún marco de "No rastrear" que nos permitirían
            responder a señales o otros mecanismos de los Usuarios con respecto
            a la recopilación de información de identificación personal o no
            personal.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">Niños menores de 16 años</h6>
          <p>
            Nadie menor de 16 años puede proporcionar información personal al
            Sitio sin antes obtener el consentimiento de sus padres. No
            recopilamos con conocimiento información personal de niños menores
            de 16 años. Si es menor de 16 años, no utilice ni proporcione
            información en este Sitio o a través de cualquiera de sus funciones,
            registrarse o suscribirse en el Sitio, realice compras a través del
            Sitio, utilice cualquiera de las características interactivas o de
            comentarios públicos de este Sitio, o proporcione información sobre
            usted mismo a nosotros, incluido su nombre, dirección, número de
            teléfono, correo electrónico o cualquier nombre de pantalla o nombre
            de usuario que puede utilizar sin antes darnos el consentimiento de
            sus padres. Si nos enteramos que hemos recopilado o recibido
            información personal de un niño menor de 16 años sin verificación
            del consentimiento de los padres, eliminaremos esa información. Si
            cree que podríamos tener cualquier información de o sobre un niño
            menor de 16 años que se proporcionó sin el consentimiento de los
            padres, por favor contáctenos a{" "}
            <a href="mailto:contacto@singulardocs.com">
              contacto@singulardocs.com
            </a>
            .
          </p>
        </div>

        <div>
          <h6 className="privacy-title">
            Divulgación de su información personal
          </h6>
          <p>
            Tomamos precauciones para garantizar la seguridad, integridad y
            privacidad de su información personal. Podemos divulgar la
            información personal que recopilamos o que usted proporciona como
            descrito en esta Política de privacidad:
          </p>

          <ul>
            <li>
              Para contratistas, socios, proveedores de servicios y otros
              terceros que tenemos relaciones con o utilizamos para apoyar
              nuestro objetivo de darle un mejor servicio por medio de nuestra
              plataforma.
            </li>
            <li>
              Para cualquier otro propósito revelado por nosotros cuando usted
              proporciona la información con su consentimiento.
            </li>
          </ul>

          <p>También podemos divulgar su información personal:</p>
          <ul>
            <li>
              Para cumplir con cualquier orden judicial, ley o proceso legal,
              incluso para responder a cualquier solicitud gubernamental o
              regulatoria.
            </li>
            <li>
              Para hacer cumplir o aplicar nuestros Términos de uso y otros
              acuerdos, incluso para facturación y fines de recolección.
            </li>
            <li>
              Si creemos que la divulgación es necesaria o apropiada para
              proteger los derechos, la propiedad o seguridad de SingularDocs,
              nuestros clientes u otros. Esto puede incluir el intercambio de
              información con otras empresas y organizaciones con fines de
              proteger contra el fraude y la reducción del riesgo crediticio.
            </li>
          </ul>
        </div>

        <div>
          <h6 className="privacy-title">Medidas de seguridad</h6>
          <p>
            Hemos implementado medidas diseñadas para proteger su información
            personal contra pérdidas accidentales y por acceso, uso, alteración
            y divulgación no autorizados. Si bien usamos razonables medidas de
            seguridad administrativas, técnicas y físicas para proteger su
            información personal del acceso y uso no autorizados, no utilice el
            correo electrónico para enviarnos información privada, información
            no cifrada que puede ser leída por cualquiera que la reciba o la
            intercepte.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">Tu elección</h6>
          <p>
            Puede revisar y cambiar su información personal iniciando sesión en
            el sitio y visitando la página de su perfil de cuenta. Después de
            optar por suscribirse para recibir los boletines electrónicos de
            SingularDocs, puede cancelar la suscripción en cualquier momento.
            Cuando la suscripción es finalizada, nuestro Sitio y nuestras
            Aplicaciones dejarán de recopilar su Información personal. Asimismo,
            el USUARIO puede cancelar el registro de su cuenta y eliminar sus
            datos personales de nuestros sistemas iniciando sesión con su
            usuario y visitando su página de perfil. Cuando se cancela su
            cuenta, nuestras aplicaciones dejarán de recopilar su información
            personal.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">Consentimiento informado</h6>
          <p>
            Si no hace ninguna objeción a esta Política de privacidad,
            SingularDocs lo considerará como ha proporcionado un consentimiento
            informado efectivo a esta Política de privacidad.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">
            Consentimiento expreso sobre información personal sensible
          </h6>
          <p>
            De acuerdo con cualquier ley aplicable, la Información Personal
            Sensible se conoce como aquella que puede revelar aspectos tales
            como origen racial o étnico, estado de salud presente y futuro,
            genética información, creencias religiosas, filosóficas y / o
            morales, afiliación sindical, opiniones políticas, preferencia
            sexual. En el caso de que SingularDocs requiera su Sensitive
            Personal Información, se le pedirá que proporcione un consentimiento
            expreso adicional y por separado.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">Exclusión de responsabilidad</h6>
          <p>
            El Sitio puede contener hipervínculos o hipertextos (en adelante,
            "Enlaces") y / o herramientas que, cuando sean utilizados, le
            transportarán a otros portales o sitios de Internet (en adelante,
            "Sitios") que podrían contener información de terceros. La
            información que se le puede solicitar o solicitar en esos Sitios no
            están contemplados en esta Política de Privacidad. Cualquier
            tratamiento de información personal por esos Sitios de terceros no
            es responsabilidad de SingularDocs. A la luz de los anteriores, le
            recomendamos que revise los Avisos de privacidad o las Políticas de
            los Sitios que visite.
          </p>

          <p>
            Dentro del sitio web y / o App de SingularDocs, se puede encontrar
            acceso a otros servicios que puedan ser compartidos con terceros y
            que puedan solicitar información personal. Toda la información
            proporcionada en estas circunstancias está condicionada a las
            respectivas Avisos de privacidad que cada uno de los sitios contiene
            a menos que SingularDocs indique lo contrario.
          </p>

          <p>
            SingularDocs le informa que dentro de su Sitio y Aplicaciones,
            SingularDocs puede incluir foros, páginas personales y avisos,
            controlados y gestionados por terceros. Por lo tanto, la información
            personal revelada a través de estos enlaces no es responsabilidad de
            SingularDocs y no está protegido por esta Política de Privacidad.
          </p>

          <p>
            La ley de California “Shine the Light” (Sección 1798.83 del Código
            Civil) permite a los usuarios de nuestro Sitio o Aplicación que son
            residentes de California solicitar cierta información sobre nuestra
            divulgación de Información personal a terceros para sus fines de
            marketing directo. Para hacer tal solicitud, envíe un correo
            electrónico a{" "}
            <a href="mailto:contacto@singulardocs.com">
              contacto@singulardocs.com
            </a>
            .
          </p>

          <p>
            Enfatizamos que usted es el único responsable cuando comparte
            información personal, incluyendo pero no limitado a la información
            personal sensible aquí definida, con estos enlaces de terceros y
            sitios. Le recomendamos que actúe con diligencia y cuidado sobre el
            uso y divulgación de información personal en estos enlaces y sitios.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">
            Cambios a nuestra política de privacidad
          </h6>
          <p>
            SingularDocs puede modificar esta política de privacidad de vez en
            cuando. La fecha en la cual la política fue revisada por última vez
            se identifica en la parte inferior de la página. Cualquier cambio en
            nuestra política de privacidad se publicará en la página de inicio
            de nuestro Sitio y en nuestras páginas de descarga de aplicaciones
            en App Store y Google Play. Si realizamos cambios sustanciales en la
            forma en que tratamos la información personal de nuestros usuarios,
            le notificaremos por correo electrónico a la dirección de correo
            electrónico especificada en su cuenta. Si es uno de nuestros
            suscriptores, es responsable de asegurarse de que tengamos un
            dirección de correo electrónico activa y entregable para usted, y
            por visitar periódicamente nuestro Sitio y esta política de
            privacidad para verificar si hay cambios.
          </p>
        </div>

        <div>
          <h6 className="privacy-title">Contáctenos</h6>
          <p>
            Si tiene alguna pregunta o sugerencia, envíe un correo electrónico a{" "}
            <a href="mailto:contacto@singulardocs.com">
              contacto@singulardocs.com
            </a>
            .
          </p>
        </div>

        <div>
          <h6 className="privicy-date">Última revisión: 5/Mar/2024 </h6>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
