"use client"
import { Fragment } from "react";
import Link from "next/link";

import AdminPageHeader from "@/components/admin/AdminPageHeader";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

export default function CreateCertificate(){
  return(
    <Fragment>
      <AdminPageHeader title="Crear certificado">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Crear certificado</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>
      
      <AdminCardContainer xs={12}>
        <p>Aquí deberia mostrar las plantillas disponilbes para ser seleccionadas.</p>
        <p>El input para el archivo con los receptores.</p>
        <p>Y el preview del certificado.</p>
      </AdminCardContainer>
    </Fragment>
  );
}