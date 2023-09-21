"use client";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

import FormInput from '../../components/admin/FormInput';
import FormFile from '../../components/admin/FormFile';
import FormButton from '../../components/admin/FormButton';

export default function Documents(){
  const [validated, setValidated] = useState(false);
  //const [loading, setLoading] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

    return(
        <>
          <Container fluid className='px-5 pt-4'>
            <Row className='mb2'>
              <Col className="pb-4">
                <h1>Carga de documentos</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Card className='py-4 px-5' style={{marginBottom:50}}>
                  <Card.Body>
                    <Row>
                      <h2>Titulo</h2>
                      <p>Por favor llene los campos que se le indican</p>
                      <Form>
                          <FormInput
                            label={'Titulo'}
                            type={'text'}
                            name={'titulo'}
                            // value={''}
                            placeholder={'Certificado en cocina'}
                            error={''}
                          />

                          <FormInput
                            label='Descripcion'
                            type={'text'}
                            name={'descripcion'}
                            // value={''}
                            placeholder={'El siguiente sertificados se entrega por..'}
                            error={''}
                          />

                          <FormInput
                            label='Correo'
                            type={'email'}
                            name={'correo'}
                            // value={''}
                            placeholder={'example@email.com'}
                            error={''}
                          />

                          <FormFile
                            label='Correos'
                          />

                          <FormFile
                            label='Logo'
                          />

                          <FormFile
                            label='Firma'
                          />

                      </Form>
                    </Row>

                    <Row className="mt-3">
                      <FormButton text={"Crear"} /*loading={loading}*//>
                    </Row>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
    );
}