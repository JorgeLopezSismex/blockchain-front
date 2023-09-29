"use client";
import "bootstrap/dist/css/bootstrap.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import FormInput from '../../components/admin/FormInput';
import FormInputFile from '../../components/admin/FormFileInput';
import FormButton from '../../components/admin/FormButton';

export default function Update(){
    return(
        <div>
            <Container fluid className='px-5 pt-4'>
                <Row className='mb2'>
                    <Col className="pb-4">
                        <h1>Update</h1>
                    </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Card className='py-4 px-5' style={{marginBottom:50}}>
                      <Card.Body>
                        <Row>
                          <h2>Titulo</h2>
                          <p>Por favor llene los campos que se le indican</p>
                          <Col lg={6}>
                            <FormInput
                              label={'Titulo'}
                              type={'text'}
                              name={'titulo'}
                              // value={''}
                              placeholder={'Certificado en cocina'}
                              error={''}
                            />
                          </Col>
                          <Col lg={6}>
                            <FormInput
                              label='Descripcion'
                              type={'text'}
                              name={'descripcion'}
                              // value={''}
                              placeholder={'El siguiente sertificados se entrega por..'}
                              error={''}
                            />
                          </Col>
                          <Col lg={6}>
                            <FormInput
                              label='Correo'
                              type={'email'}
                              name={'correo'}
                              // value={''}
                              placeholder={'example@email.com'}
                              error={''}
                            />
                          </Col>
                          <Col lg={6}>
                            <FormInputFile
                              label='Correos'
                            />
                          </Col>
                          <Col lg={6}>
                            <FormInputFile
                              label='Logo'
                            />
                          </Col>
                          <Col lg={6}>
                            <FormInputFile
                              label='Firma'
                            />
                          </Col>
                        </Row>

                        <Row>
                          <FormButton text={"Crear"} /*loading={loading}*//>
                        </Row>

                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
            </Container>
        </div>
    );
}