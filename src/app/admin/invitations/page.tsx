"use client";
//Invitaciones o(TヘTo)
import moment from "moment";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminTable from "@/components/admin/AdminTable";
import AdminModal from "@/components/admin/AdminModal";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminInvitationModal from "@/components/admin/AdminInvitationModal";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import Alert from "react-bootstrap/Alert";

import { apiFetch } from "@/helpers/api-fetch";
import { InvitationsData } from "@/types/invitation";
import { createColumnHelper } from "@tanstack/react-table";
import { faEye, faTrash, faXmark, faMailReply } from "@fortawesome/free-solid-svg-icons";

export default function Invitations() {
  const [modalShow, setModalShow] = useState(false);
  const [sendModal, setSendModal] = useState(false);
  const [selectedInvitation, setSelectedInvitation] = useState<InvitationsData | null>(null);

  const [invitations, setInvitations] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<InvitationsData>();

  const [showAlert, setShowAlert] =useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  useEffect(() => {
    loadRoles();

    getInvitations();
  }, []);

  const openDetailsModal = (invitation: InvitationsData) => {
    setSelectedInvitation(invitation);
    setModalShow(true);
  }; 

  const openSendModal = (invitation : InvitationsData) => {
    if(invitation !== null){
      setSelectedInvitation(invitation);
    }
    setSendModal(true);
  };

  const handleResend = (invitation : InvitationsData) => {
    console.log ("Datos del reenvio:");
    console.log (invitation);
    setSendModal(false);
    setShowAlert(true);
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

  const getInvitations = async () => {
    setDataLoading(true);
    const res = await apiFetch("authorization/invitation");
    // alert("Termino la peticion de datos");
    console.log(res);

    if (res.success) {
      setDataLoading(false);
      setInvitations(res.data);
    }
  };

  const columns = [
    columnHelper.accessor("addressee", {
      header: () => "Correo",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: () => "Receptor",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha de creación",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("invitationStatusId", {
      header: () => "Estado",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      header: () => "Descripción",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        return (
          <ButtonGroup aria-label="Basic example"> 
            <AdminTableActionButton icon={faEye} tooltip="Detalles" onClick = {() => openDetailsModal(info.row.original)}/>
            <AdminTableActionButton icon={faMailReply} tooltip="Reenviar" onClick={() => openSendModal(info.row.original)}/>
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
        email={selectedInvitation ? selectedInvitation.addressee : ""}
        date={selectedInvitation ? moment(selectedInvitation.createdAt).format("DD/MM/YYYY") : ""}
        state={selectedInvitation ? selectedInvitation.invitationStatusId : ""}
      />
      <AdminModal
        show={sendModal}
        onHide={() => setSendModal(false)}
        onClick={ () => {
          if(selectedInvitation){
            handleResend(selectedInvitation);
            setAlertVariant("success");
            setAlertMessage("La invitación a sido reenviada con exito");
          }else{
            setAlertVariant("danger");
            setAlertMessage("No se pudo reenviar la invitación");
            console.log("No se puede reenviar la invitación porque el valor es nulo");
          }
        }
        }
        title="Reenvio"
        text={`Desea reenviar la invitación a ${selectedInvitation?.addressee}`}
        buttonText="Reenviar"
      />

      <Alert show={showAlert} variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
        {alertMessage}
      </Alert>

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable columns={columns} defaultData={invitations}>

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
