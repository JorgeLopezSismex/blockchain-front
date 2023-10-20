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

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function SendInvitation(){
  
  return(
    <>
      <AdminPageHeader title="Envio de invitaciones">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{textDecoration: "none"}}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Detalles</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <Row>
        <Col lg={5} sm={12}>
          <AdminCardContainer xs={12}>
            <p>Por favor ingrese el archivo excel con los correos a los que desea enviar invitaciones.</p>
            <Form>
              <FormInputFile
                name={"invitationfile"}
              />
              <Button className="float-sm-right">Enviar</Button>
            </Form>
          </AdminCardContainer>
        </Col>
        <Col lg={7} sm={12}>
          <Editor
          apiKey='4id6oio7kmtapurdds49ame637qwnn4dj2f4r1oc1kf8io74'
          initialValue="<p>This is the initial content of the editor.</p>"
          
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          />
        </Col>
      </Row>

      
    </>
  );
}