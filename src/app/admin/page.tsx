"use client";

import "bootstrap/dist/css/bootstrap.css";

import AdminAlert from "@/components/admin/AdminAlert";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { Fragment } from "react";

import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Admin() {
  return (
    <Fragment>
      <AdminPageHeader title="Dashboard">
        <Breadcrumb className="float-sm-right">
          {/* <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item> */}
          <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminAlert
        variant="warning"
        title="Estado de verificación"
        text="Emisor no verificado."
      />

      <AdminAlert
        variant="warning"
        title="Membresía actual"
        text="Sin membresia activa."
      />
    </Fragment>
  );
}
