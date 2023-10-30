"use client";
//Invitaciones o(TヘTo)
import moment from "moment";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminTable from "@/components/admin/AdminTable";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminInvitationModal from "@/components/admin/AdminInvitationModal";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { faEye, faTrash, faXmark, faMailReply } from "@fortawesome/free-solid-svg-icons";

import { IssuerData } from "@/types/issuers";
import { apiFetch } from "@/helpers/api-fetch";
import { createColumnHelper } from "@tanstack/react-table";

export default function Invitations() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedInvitation, setSelectedInvitation] = useState<IssuerData | null>(null);

  const [issuers, setIssuers] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<IssuerData>();

  useEffect(() => {
    loadRoles();

    getIssuers();
  }, []);

  const openDetailsModal = (invitation: IssuerData) => {
    setSelectedInvitation(invitation);
    setModalShow(true);
  };  

  const loadRoles = async () => {
    try {
      const res = await apiFetch("roles");
      if (res.data) {
        const data = res.data;

        const options = data.map((item: any) => ({
          value: item.roleId,
          label: item.name,
        }));

        return options;
      }

      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getIssuers = async () => {
    setDataLoading(true);
    const res = await apiFetch("issuers");
    // alert("Termino la peticion de datos");
    console.log(res);

    if (res.success) {
      setDataLoading(false);
      setIssuers(res.data);
    }
  };

  const columns = [
    columnHelper.accessor("issuerId", {
      header: () => "Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Correo",
      cell: (info) => info.getValue(),
    }), 
    columnHelper.accessor("name", {
      header: () => "Receptor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("issuerVerificationStatusName", {
      header: () => "Estado",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        return (
          <ButtonGroup aria-label="Basic example"> 
            <AdminTableActionButton icon={faEye} tooltip="Detalles" onClick = {() => openDetailsModal(info.row.original)}/>
            <AdminTableActionButton icon={faMailReply} tooltip="Reenviar" onClick={null}/>
            <AdminTableActionButton icon={faTrash} tooltip="Borrar" onClick={null}/>
            <AdminTableActionButton icon={faXmark} tooltip="Cancelar" onClick={null}/>
          </ButtonGroup>
        );
      },
    }),
  ];

  return (
    <Fragment>
      <AdminPageHeader title="Invitaciones">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Invitaciones</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminInvitationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="Detalles de la Invitación"
        id={selectedInvitation ? selectedInvitation.issuerId : ""}
        email={selectedInvitation ? selectedInvitation.email : ""}
        date={selectedInvitation ? selectedInvitation.createdAt : ""}
        state={selectedInvitation ? selectedInvitation.issuerVerificationStatusName : ""}
      />

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable columns={columns} defaultData={issuers}>

        <Link href={"/admin/invitations/send-invitation"}>
          <Button variant="primary">
            Nuevo
          </Button>
        </Link>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
