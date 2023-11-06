"use client";
//Invitaciones o(TヘTo)
import moment from "moment";
import Link from "next/link";
import * as formik from "formik";
import { Fragment, useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormInput from "@/components/form/FormInput";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminTable from "@/components/admin/AdminTable";
import AdminModal from "@/components/admin/AdminModal";
import ActionToast from "@/components/main/ActionToast";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminInvitationModal from "@/components/admin/AdminInvitationModal";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { apiFetch } from "@/helpers/api-fetch";
import { InvitationsData } from "@/types/invitation";
import { createColumnHelper } from "@tanstack/react-table";
import { faEye, faTrash, faXmark, faMailReply } from "@fortawesome/free-solid-svg-icons";

export default function Invitations() {
  const [modalShow, setModalShow] = useState(false);
  const [sendModal, setSendModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedInvitation, setSelectedInvitation] = useState<InvitationsData | null>(null);

  const [invitations, setInvitations] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<InvitationsData>();

  const [showAlert, setShowAlert] =useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  const { Formik } = formik;
  const [cancelForm, setCancelForm] = useState();

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

  const openCancelModal = (invitation : InvitationsData) => {
    setSelectedInvitation(invitation);
    setCancelModal(true);
  };

  const openDeleteModal = (invitation : InvitationsData) => {
    setSelectedInvitation (invitation);
    setDeleteModal(true);
  };

  const handleResend = (invitation : InvitationsData | null) => {
    if(invitation != null){
      setAlertVariant("success");
      setAlertTitle("Reenvío exitoso");
      setAlertMessage("La invitación a sido reenviada con exito");
      console.log("Si se pudo", invitation);
    }else{
      setAlertVariant("danger");
      setAlertTitle("Error en reenvío");
      setAlertMessage("No se pudo reenviar la invitación");
      console.log("No se puede reenviar la invitación porque el valor es nulo");
    }

    setSendModal(false);
    setShowAlert(true); 
  };

  const handleCancel = (invitation : InvitationsData | null) => {
    if(invitation != null){
      setAlertVariant("success");
      setAlertTitle("Cancelación exitosa.");
      setAlertMessage("La invitación a sido cancelada.");

      //Guarda la razón de cancelación

      console.log("Invitación cancelada.")
    }else{
      setAlertVariant("danger");
      setAlertTitle("Error en cancelación.");
      setAlertMessage("No se ha logrado cancelar la invitación.");
      console.log("No se puede cancelar la invitación porque el valor es nulo.");
    }

    setCancelModal(false);
    setShowAlert(true);
  };

  const handleDelete = (invitation : InvitationsData | null) => {
    if(invitation != null){
      setAlertVariant("success");
      setAlertTitle("Borrado exitoso.")
      setAlertMessage("La invitación a sido borrar.");
      console.log("La invitación a sido borrada de su lista")
    }else{
      setAlertVariant("danger");
      setAlertTitle("Error en borrado.")
      setAlertMessage("No se ha logrado borrar la invitación.");
      console.log("No se puede borrar la invitación porque el valor es nulo.");
    }

    setDeleteModal(false);
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
    columnHelper.accessor("nameUser", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastName", {
      header: () => "Apellido",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Fecha de creación",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("name", {
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
            <AdminTableActionButton icon={faMailReply} tooltip="Reenviar" onClick={() => openSendModal(info.row.original)}/>
            <AdminTableActionButton icon={faTrash} tooltip="Borrar" onClick={() => openDeleteModal(info.row.original)}/>
            <AdminTableActionButton icon={faXmark} tooltip="Cancelar" onClick={() => openCancelModal(info.row.original)}/>
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
        name={selectedInvitation ? selectedInvitation.nameUser : ""}
        lastname={selectedInvitation ? selectedInvitation.lastName : ""}
        date={selectedInvitation ? moment(selectedInvitation.createdAt).format("DD/MM/YYYY") : ""}
        state={selectedInvitation ? selectedInvitation.name : ""}
        description={selectedInvitation ? selectedInvitation.description : ""}
        rejectReason={selectedInvitation ? selectedInvitation.rejectReason : ""}
      />
      <AdminModal
        show={sendModal}
        onHide={() => setSendModal(false)}
        onClick={ () => {handleResend(selectedInvitation);}}
        title="Reenvió"
        text={`Desea reenviar la invitación a ${selectedInvitation?.addressee}`}
        buttonText="Reenviar"
      >
      </AdminModal>

      <AdminModal
        show={cancelModal}
        onHide={() => setCancelModal(false)}
        onClick={ () => {handleCancel(selectedInvitation);} }
        title="Cancelación"
        text={`Desea cancelar la invitación a ${selectedInvitation?.addressee}`}
        buttonText="Cancelar"
      >
        <>
          <h4>El formulario ira aquí.</h4>
        </>
      </AdminModal>

      <AdminModal
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        onClick={ () => {handleDelete(selectedInvitation);} }
        title="Borrar"
        text={`Desea borrar la invitación a ${selectedInvitation?.addressee} de su lista de invitaciones.`}
        buttonText="Borrar"
      >
      </AdminModal>
      
      <ActionToast
        delay={3000}
        show={showAlert}
        title={alertTitle}
        message={alertMessage}
        variant={alertVariant}
        onClose={() => setShowAlert(false)}
      />

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
