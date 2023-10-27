"use client"

import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import FormInputFile from "@/components/form/FormInputFile";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import * as yup from 'yup';
import * as formik from "formik";
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState, useEffect } from 'react';
import {clientAddSchema} from "@/validations/validation_request";
//Solo esta aquí para hacer pruebas.Debe ser los detalles de la tabla.
import AdminInvitationModal from "@/components/admin/AdminInvitationModal";

export default function SendInvitation(){
  //Se usa para el modal que se esta probando.
  // const [modalShow, setModalShow] = useState(false);
  const { Formik } = formik;
  // const [editorContent, setEditorContent] = useState(
  //   "<p><img style'display: block; margin-left: auto; margin-right: auto;' title='Tiny Logo' src='https://i.pinimg.com/474x/d5/6b/5c/d56b5cdeefd69204d9d1a194cdbcce54.jpg' alt='TinyMCE Logo' width='128' height='128'></p><h2 style='text-align: center;'>TinyMCE Code Sample Plugin</h2>"
  // );
  const [formData, setFormData] = useState({
    file: "",
    editor: "<p><img style'display: block; margin-left: auto; margin-right: auto;' title='Tiny Logo' src='https://i.pinimg.com/474x/d5/6b/5c/d56b5cdeefd69204d9d1a194cdbcce54.jpg' alt='TinyMCE Logo' width='128' height='128'></p><h2 style='text-align: center;'>TinyMCE Code Sample Plugin</h2>",
  })

  const handleSubmit = (values :any, editor:any) => {
    setFormData(values);
    console.log(values);
  }
  return(
    <>
      <AdminPageHeader title="Envio de invitaciones">
        {/* <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{textDecoration: "none"}}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Enviar invitation</Breadcrumb.Item>
        </Breadcrumb> */}
      </AdminPageHeader>

      <Formik
        validationSchema={clientAddSchema}
        onSubmit={handleSubmit}
        initialValues={formData}
        >
        {({handleSubmit, handleChange, setFieldValue, values, errors}) =>(
          <Form>
            <Row>
              <Col lg={3} sm={12}>
              <AdminCardContainer xs={12}>
                <p>Por favor ingrese el archivo excel con los correos a los que desea enviar invitaciones.</p>
                  <FormInputFile
                    md={12}
                    sm={12}
                    accept="*"
                    name="file"
                    label="Excel"
                    controlId="file"
                    value={values.file}
                    errors={errors.file}
                    setFieldValue={setFieldValue}
                  />
                  <Button className="float-sm-right">
                    Enviar
                  </Button>
              </AdminCardContainer>
              </Col>
              <Col lg={9} sm={12} className="px-4">
              <Editor
                apiKey='4id6oio7kmtapurdds49ame637qwnn4dj2f4r1oc1kf8io74'   
                  id="miTinyMCE" //No lo quites o marcara error
                  // initialValue={editorContent}
                  value={formData.editor}
                  init={{
                    language: 'es',
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'wordcount', 'media'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' + '| link image media preview | ' +
                      'removeformat',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                // onEditorChange={handleSubmit}
              />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>

      
    </>
  );
}




{/* <Row>
        <Col lg={4} sm={12}>
          <AdminCardContainer xs={12}>
            <p>Por favor ingrese el archivo excel con los correos a los que desea enviar invitaciones.</p>
            <Form>
              <FormInputFile
                name={"invitationfile"}
              /> */}
              {/* <Button className="float-sm-right" onClick={()=>setModalShow(true)}>
                Enviar
              </Button> */}
              {/* <Button className="float-sm-right">
                Enviar
              </Button>
            </Form> */}

            {/* <AdminInvitationModal
              show={modalShow}
              onHide={()=> setModalShow(false)}
              title={"Detalles"}
              id={"0000"}
              email={"example@email.com"}
              date={"20/02/2023"}
              state={"Sin verificar"}
            /> */}

      //     </AdminCardContainer>
      //   </Col>

      //   <Col lg={8} sm={12} className="px-4">
      //   <Editor
      //     apiKey='4id6oio7kmtapurdds49ame637qwnn4dj2f4r1oc1kf8io74'
      //     id="miTinyMCE" //No lo quites o marcara error
      //     // initialValue={editorContent}
      //     value={editorContent}
      //     init={{
      //       language: 'es',
      //       menubar: false,
      //       plugins: [
      //         'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
      //         'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
      //         'insertdatetime', 'media', 'table', 'code', 'wordcount', 'media'
      //       ],
      //       toolbar: 'undo redo | blocks | ' +
      //         'bold italic forecolor | alignleft aligncenter ' +
      //         'alignright alignjustify | bullist numlist outdent indent | ' + '| link image media preview | ' +
      //         'removeformat',
      //       content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      //     }}
      //     onEditorChange={handleEditorChange}
      //   />
      //   </Col>
      // </Row>