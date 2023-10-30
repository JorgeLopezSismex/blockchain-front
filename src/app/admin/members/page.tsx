"use client";

import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Link from "next/link";

import { Fragment } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";


export default function Members() {
  return (
    <Fragment>
      <AdminPageHeader title="Miembros">
        <Link className="breadcrumb-item" href={"../admin"}>
          Inicio
        </Link>
        <Breadcrumb.Item active>Miembros</Breadcrumb.Item>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>Table de miembros</AdminCardContainer>
    </Fragment>
  );
}
