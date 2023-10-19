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
        <Col lg={6} sm={12}>
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
        <Col lg={6} sm={12}>
          <p>El editor de correo debería ir aquí.</p>
        </Col>
      </Row>
    </>
  );
}