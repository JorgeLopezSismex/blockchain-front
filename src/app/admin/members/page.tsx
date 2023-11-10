"use client";

import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import Link from "next/link";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import Button from "react-bootstrap/Button";

import { createColumnHelper } from "@tanstack/react-table";

import { Fragment, useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { apiFetch } from "@/helpers/api-fetch";

import { MemberData } from "@/types/members";
import AdminTable from "@/components/admin/AdminTable";

export default function Members() {
  const [issuers, setIssuers] = useState([]);
  const [members, setMembers] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const columnHelper = createColumnHelper<MemberData>();

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    setDataLoading(true);

    const res = await apiFetch("members");
   
    if (res.success) {
      console.log(res);
      console.log(res.data);

      setDataLoading(false);
      setMembers(res.data);
    }
    console.log(res);
  };

  const columns = [
    columnHelper.accessor("name", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Apellido",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Correo Electrónico",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("roleName", {
      header: () => "Rol",
      cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor("createdAt", {
    //   header: () => "Registro",
    //   cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    // }),
    // columnHelper.accessor("issuerVerificationStatusName", {
    //   header: () => "Verificación",
    //   cell: (info) => info.getValue(),
    // }),
    // columnHelper.accessor("lastValidationSubmit", {
    //   header: () => "Últ. solicitud de verif.",
    //   cell: (info) => info.getValue(),
    // }),
    // columnHelper.display({
    //   id: "actions",
    //   header: () => "Acciones",
    //   cell: (info) => {
    //     console.log(info.row.original);

    //     const row = info.row.original;

    //     return (
    //       <ButtonGroup aria-label="Basic example">
    //         <AdminTableActionButton icon={faPencil} tooltip="Editar" />
    //         <AdminTableActionButton icon={faTrash} tooltip="Borrar" />
    //         <AdminTableActionButton icon={faCheck} tooltip="Verificar" />
    //         <AdminTableActionButton icon={faXmark} tooltip="Rechazar" />
    //       </ButtonGroup>
    //     );
    //   },
    // }),
  ];

  return (
    <Fragment>
      <AdminPageHeader title="Miembros">
        <Link className="breadcrumb-item" href={"../admin"}>
          Inicio
        </Link>
        <Breadcrumb.Item active>Miembros</Breadcrumb.Item>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable columns={columns} defaultData={members}>
            <Button variant="primary">Nuevo</Button>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
