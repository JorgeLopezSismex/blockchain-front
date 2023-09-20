"use client";
import "bootstrap/dist/css/bootstrap.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import FormInput from '../../components/admin/FormInput';
import FormFile from '../../components/admin/FormFile';

export default function Documents(){
    return(
        <div style={{backgroundColor:'#f4f6f9', height: '100vh'}}>
          <Container fluid className='px-5 py-5' style={{ height: '100%' }}>
            <Row className='mb2'>
              <Col className="pb-4">
                <h1>Carga de documentos</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card className='py-4 px-5' style={{marginBottom:30}}>
                  <Card.Body>
                    <Row>
                      <h2>Titulo</h2>
                      <p>Por favor llene los campos que se le indican</p>
                      <Col lg={6}>
                        <FormInput
                          label='Titulo'
                        />
                      </Col>
                      <Col lg={6}>
                        <FormInput
                          label='Descripcion'
                        />
                      </Col>
                      <Col lg={6}>
                        <FormInput
                          label='Correo'
                        />
                      </Col>
                      <Col lg={6}>
                        <FormFile
                          label='Correos'
                        />
                      </Col>
                      <Col lg={6}>
                        <FormFile
                          label='Logo'
                        />
                      </Col>
                      <Col lg={6}>
                        <FormFile
                          label='Firma'
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    );
}