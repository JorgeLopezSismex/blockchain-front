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
            <Col xs={12} md={6} className='mb-4'>
              <h1>Creador de certificado en blockchain</h1>
              <p>Almacena de manera segura y siempre accesible. Y algo mas de texto para rellenar y no se vea tan solo.</p>
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
              <h1>Complementa con nuestra aplicación</h1>
              <p>
                Todos tus certificados al alcance de tu mano en todo momento. 
                Utiliza nuestra aplicación para ver, compartir y verificar todos tus certificados.
              </p>
              <Image
                style={{ width: "100%" }}
                src="https://t4.ftcdn.net/jpg/03/98/05/95/360_F_398059575_h3XJtdGMNhieUcDYwwkrSVt0PoVGAuai.jpg"
              ></Image>
            </Col>
          </Row>
        </Container>
        <MainFoot/>
      </div>
  );
}
