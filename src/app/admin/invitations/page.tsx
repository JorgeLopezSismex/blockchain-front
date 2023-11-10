"use client";
//Invitaciones o(TヘTo)
import moment from "moment";
import Link from "next/link";
import { Formik } from "formik";
import { Fragment, useState, useEffect } from "react";

import AdminModalJorge from "@/components/admin/AdminModalJorge";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormModal from "@/components/form/FormModal";
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

import { cancelFormSchema } from "@/validations/validation_request";
//import { InvitationsData } from "@/types/invitation"; //Debería quitarlo

import invitationsTableColumButtons from "@/tableColumns/invitationsTableColumButtons";

export default function Invitations() {
  const [dataLoading, setDataLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [sendModal, setSendModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  //const [selectedInvitation, setSelectedInvitation] = useState<InvitationsData | null>(null); //Debería quitarlo?
  const [invitations, setInvitations] = useState([]);

  // const columnHelper = createColumnHelper<InvitationsData>();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  useEffect(() => {

    getInvitations();
  }, []);

  // const openDetailsModal = (invitation: InvitationsData) => {
  //   setSelectedInvitation(invitation);
  //   setDetailsModal(true);
  // };

  // const openSendModal = (invitation: InvitationsData) => {
  //   if (invitation !== null) {
  //     setSelectedInvitation(invitation);
  //   }
  //   setSendModal(true);
  // };

  // const openCancelModal = (invitation: InvitationsData) => {
  //   setSelectedInvitation(invitation);
  //   setCancelModal(true);
  // };

  // const openDeleteModal = (invitation: InvitationsData) => {
  //   setSelectedInvitation(invitation);
  //   setDeleteModal(true);
  // };

  // const handleResend = (invitation: InvitationsData | null) => {
  //   if (invitation != null) {
  //     setAlertVariant("success");
  //     setAlertTitle("Reenvío exitoso");
  //     setAlertMessage("La invitación a sido reenviada con exito");
  //     console.log("Si se pudo", invitation);
  //   } else {
  //     setAlertVariant("danger");
  //     setAlertTitle("Error en reenvío");
  //     setAlertMessage("No se pudo reenviar la invitación");
  //     console.log("No se puede reenviar la invitación porque el valor es nulo");
  //   }

  //   setSendModal(false);
  //   setShowAlert(true);
  // };

  // const handleCancel = (values: CancelInvitation) => {
  //   if (values.rejectReason) {
  //     console.log("La razón de cancelación es:", values.rejectReason);

  //     setAlertVariant("success");
  //     setAlertTitle("Cancelación exitosa.");
  //     setAlertMessage("La invitación ha sido cancelada.");

  //     setCancelModal(false);
  //   } else {
  //     console.log("No se proporciono una razón de cancelación");

  //     setAlertVariant("danger");
  //     setAlertTitle("Error en cancelación.");
  //     setAlertMessage("Debes proporcionar una razón de cancelación.");
  //   }

  //   setShowAlert(true);
  // };

  // const handleDelete = (invitation: InvitationsData | null) => {
  //   //handleCancel()
  //   //Guardar el valor del form, para almacenarlo al momento de dar click en cancelar

  //   if (invitation != null) {
  //     setAlertVariant("success");
  //     setAlertTitle("Borrado exitoso.");
  //     setAlertMessage("La invitación a sido borrar.");
  //     console.log("La invitación a sido borrada de su lista");
  //   } else {
  //     setAlertVariant("danger");
  //     setAlertTitle("Error en borrado.");
  //     setAlertMessage("No se ha logrado borrar la invitación.");
  //     console.log("No se puede borrar la invitación porque el valor es nulo.");
  //   }

  //   setDeleteModal(false);
  //   setShowAlert(true);
  // };

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

      {/* <AdminInvitationModal
        show={detailsModal}
        onHide={() => setDetailsModal(false)}
        title="Detalles de la Invitación"
        email={selectedInvitation ? selectedInvitation.addressee : ""}
        name={selectedInvitation ? selectedInvitation.nameUser : ""}
        lastname={selectedInvitation ? selectedInvitation.lastName : ""}
        date={
          selectedInvitation
            ? moment(selectedInvitation.createdAt).format("DD/MM/YYYY")
            : ""
        }
        state={selectedInvitation ? selectedInvitation.name : ""}
        description={selectedInvitation ? selectedInvitation.description : ""}
        rejectReason={selectedInvitation ? selectedInvitation.rejectReason : ""}
      />
      <AdminModal
        show={sendModal}
        onHide={() => setSendModal(false)}
        onClick={() => {
          handleResend(selectedInvitation);
        }}
        title="Reenvió"
        text={`Desea reenviar la invitación a ${selectedInvitation?.addressee}`}
        buttonText="Reenviar"
      />

      <FormModal
        show={cancelModal}
        title="Cancelación"
        buttonText="Cancelar"
        onHide={() => setCancelModal(false)}
      >
        <Formik
          validationSchema={cancelFormSchema}
          onSubmit={handleCancel}
          initialValues={{ rejectReason: "" }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <p>{` ¿Desea cancelar la invitación a ${selectedInvitation?.addressee}?`}</p>
              <FormInput
                label={"Motivo"}
                md={12}
                sm={12}
                name={"rejectReason"}
                type={"text"}
                disabled={false}
                controlId={"rejectReason"}
                value={values.rejectReason}
                errors={errors.rejectReason}
                handleChange={handleChange}
                placeholder={"Por falta de documentos..."}
              />

              <div className="text-end mt-3">
                <Button
                  onClick={() => setCancelModal(false)}
                  variant="outline-secondary"
                  className="mx-2"
                >
                  Cerrar
                </Button>
                <Button type="submit">Cancelar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </FormModal>

      <AdminModal
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        onClick={() => {
          handleDelete(selectedInvitation);
        }}
        title="Borrar"
        text={`Desea borrar la invitación a ${selectedInvitation?.addressee} de su lista de invitaciones.`}
        buttonText="Borrar"
      /> */}

      {/* <AdminInvitationModal
        show={detailsModal}
        onHide={() => setDetailsModal(false)}
        title="Detalles de la Invitación"
        email={selectedInvitation ? selectedInvitation.addressee : ""}
        name={selectedInvitation ? selectedInvitation.nameUser : ""}
        lastname={selectedInvitation ? selectedInvitation.lastName : ""}
        date={
          selectedInvitation
            ? moment(selectedInvitation.createdAt).format("DD/MM/YYYY")
            : ""
        }
        state={selectedInvitation ? selectedInvitation.name : ""}
        description={selectedInvitation ? selectedInvitation.description : ""}
        rejectReason={selectedInvitation ? selectedInvitation.rejectReason : ""}
      /> */}

      <AdminModalJorge
        show={showDetailsModal}
        showButtons={false}
        title="Detalles de invitación"
        primaryBtnVariant="danger"
        handleSubmit={() => {}}
        modalLoading={modalLoading}
        handleClose={() => setShowDetailsModal(false)}
      >      
        Nombre: 
        Correo:
        Fecha:
        Estado:
        Descripción:
        Causa de rechazo:        
      </AdminModalJorge>

      {/* <AdminModalJorge
        show={sendModal}
        title="Reenviar"
        primaryBtnVariant="danger"
        handleSubmit={() => {}}
        modalLoading={modalLoading}
        handleClose={() => setSendModal(false)}
      >      
        
      </AdminModalJorge> */}

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
          <AdminTable
            columns={invitationsTableColumButtons(setShowDetailsModal)}
            defaultData={invitations}
          >
            <Link href={"/admin/invitations/send-invitation"}>
              <Button variant="primary">Nuevo</Button>
            </Link>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
