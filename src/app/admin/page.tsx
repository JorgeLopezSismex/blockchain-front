"use client";

import AdminAlert from "@/components/admin/AdminAlert";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { Fragment } from "react";

export default function Admin() {
  return (
    <Fragment>
      <AdminPageHeader title="Dashboard">HOLA</AdminPageHeader>

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
