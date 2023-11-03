"use client"
//Envio de invitaciones
import Link from "next/link";
import * as formik from "formik";
import React, { useState } from 'react';

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormInput from "@/components/form/FormInput";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import FormInputFile from "@/components/form/FormInputFile";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { Editor } from '@tinymce/tinymce-react';
import { excelFromSchema, manualFormSchema } from "@/validations/validation_request";

export default function SendInvitation(){
  const { Formik } = formik;
  // const [formData, setFormData] = useState({
  //   name:"",
  //   email:"",
  //   file: "",
  //   editor: "<p><img style'display: block; margin-left: auto; margin-right: auto;' title='Tiny Logo' src='https://i.pinimg.com/474x/d5/6b/5c/d56b5cdeefd69204d9d1a194cdbcce54.jpg' alt='TinyMCE Logo' width='128' height='128'></p><h2 style='text-align: center;'>TinyMCE Code Sample Plugin</h2>",
  // });
  const [key, setKey] = useState('manual');
  const [manualForm, setManualForm] = useState({ name:"", lastname:"", email:"" });
  const [excelForm, setExcelForm] = useState({ file:"" });
  const excel = process.env.PUBLIC_URL + '/ruta/archivo.xlsx'

  const handleManual = (values:any) => {
    console.log("Formulario manual");
    setManualForm(values);
    console.log(values);
  };
  const handleExcel = (values:any) =>{
    console.log("Formulario con excel");
    setExcelForm(values);
    console.log(values);
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = excel;
    link.download = 'archivo.xlsx';
    link.click();
  };

  return(
    <>
      <AdminPageHeader title="Envio de invitaciones">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"/admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"/admin/invitations"}>
            Invitaciones
          </Link>
          <Breadcrumb.Item active>Enviar invitation</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        <Tabs
          id="form-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k || "")}
          transition={false}
          className="mb-3"
        >
          <Tab eventKey="manual" title="Individual">
            <Formik
            validationSchema={manualFormSchema}
            onSubmit={handleManual}
            initialValues={manualForm}
            >
            {({handleSubmit, handleChange, values, errors}) =>(
              <Form
              noValidate
              onSubmit={handleSubmit}
              >
                <Row>
                  <p>Ingrese los datos que se le solicitan</p>
                  <FormInput
                    label={"Nombre"}
                    md={6}
                    sm={12}
                    name={"name"}
                    type={"text"}
                    disabled={false}
                    controlId={"name"}
                    value={values.name}
                    errors={errors.name}
                    handleChange={handleChange}
                    placeholder={"John"}
                  />

                  <FormInput
                    label={"Apellido"}
                    md={6}
                    sm={12}
                    name={"lastname"}
                    type={"text"}
                    disabled={false}
                    controlId={"lastname"}
                    value={values.lastname}
                    errors={errors.lastname}
                    handleChange={handleChange}
                    placeholder={"Smith"}
                  />

                  <FormInput
                    label={"Correo"}
                    md={6}
                    sm={12}
                    name={"email"}
                    type={"email"}
                    disabled={false}
                    controlId={"email"}
                    value={values.email}
                    errors={errors.email}
                    handleChange={handleChange}
                    placeholder={"example@mail.com"}
                  />
                </Row>
                <Button type='submit' className="float-sm-right mt-2">
                  Enviar
                </Button>
              </Form>
            )}
            </Formik>
          </Tab>

          <Tab eventKey="excel" title="Por lote">
            <Formik
            validationSchema={excelFromSchema}
            onSubmit={handleExcel}
            initialValues={excelForm}
            >
            {({handleSubmit, handleChange, setFieldValue, values, errors}) =>(
              <Form
              noValidate
              onSubmit={handleSubmit}
              >
                <Row>
                  <p>Por favor ingrese el archivo excel con los correos a los que desea enviar invitaciones.</p>
                  <FormInputFile
                    md={7}
                    sm={12}
                    accept="*"
                    name="file"
                    label="Excel"
                    controlId="file"
                    value={values.file}
                    errors={errors.file}
                    setFieldValue={setFieldValue}
                  />
                  <Col md={5} xs={12}>
                    <p>Descarga tu plantilla Excel aquí:</p>
                    <Button onClick={handleDownload} className="mt-2 mx-auto my-auto" >
                      Descargar
                    </Button>
                  </Col>
                </Row>

                <Button type='submit' className="float-sm-right">
                  Enviar
                </Button>
              </Form>
            )}
            </Formik>
          </Tab>
        </Tabs>
      </AdminCardContainer>
      
    </>
  );
}

// <Col lg={7} sm={12} className="px-4">
// <Editor
//   apiKey='4id6oio7kmtapurdds49ame637qwnn4dj2f4r1oc1kf8io74'   
//     id="miTinyMCE" //No lo quites o marcara error, el id debe ser unico
//     value={values.editor}
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
//       }}
//     onEditorChange={(content) => {
//       handleChange('editor')(content); // Actualiza el valor del campo del editor
//     }}
// />
// </Col>