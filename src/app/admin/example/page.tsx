"use client";

import { Fragment } from "react";

import AdminPageHeader from "@/components/admin/AdminPageHeader";

import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

export default function Example() {
  return (
    <Fragment>
      <AdminPageHeader title="Bitácora">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Bitácora</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminFilterContainer>
        <h1>Estos son los filtros</h1>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
        <h1>este es el contenido</h1>
      </AdminCardContainer>
    </Fragment>
  );
}
