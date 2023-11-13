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

import invitationsTableColums from "@/tableColumns/invitationsTableColums";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { InvitationsData } from "@/types/invitation";

export default function Invitations() {
  const [dataLoading, setDataLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);

  const [invitations, setInvitations] = useState([]);
  const [selectedInvitation, setSelectedInvitation] = useState(
    {} as InvitationsData
  );

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showResendModal, setShowResendModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const [sendModal, setSendModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  useEffect(() => {
    getInvitations();
  }, []);

  const getInvitations = async () => {
    setDataLoading(true);
    const res = await apiFetch("authorization/invitation");

    if (res.success) {
      setDataLoading(false);
      setInvitations(res.data);
    }
  };

  const resendInvitation = async () => {
    alert("Aqui se reenvia la invitación");
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

      <AdminModalJorge
        show={showDetailsModal}
        showButtons={false}
        title="Detalles"
        modalLoading={modalLoading}
        handleClose={() => setShowDetailsModal(false)}
      >
        <Container>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <h6>Nombre del destinatario</h6>
              {selectedInvitation.nameUser}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Apellido del destinatario</h6>
              {selectedInvitation.lastName}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Correo electrónico</h6>
              {selectedInvitation.addressee}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Fecha de creación</h6>
              {selectedInvitation.createdAt}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Estado</h6>
              {selectedInvitation.name}
            </Col>
          </Row>
        </Container>
      </AdminModalJorge>

      <AdminModalJorge
        showButtons={true}
        show={showResendModal}
        title="Reenviar invitación"
        modalLoading={modalLoading}
        handleSubmit={resendInvitation}
        handleClose={() => setShowResendModal(false)}
      >
        ¿Estás seguro de querer reenviar esta invitación a la dirección de
        correo electrónico {selectedInvitation.addressee}?
      </AdminModalJorge>

      <AdminModalJorge
        showButtons={true}
        show={showCancelModal}
        title="Cancelar invitación"
        modalLoading={modalLoading}
        handleSubmit={resendInvitation}
        handleClose={() => setShowCancelModal(false)}
      >
        ¿Estás seguro de querer cancelar esta invitación?
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
            columns={invitationsTableColums(
              setSelectedInvitation,
              setShowDetailsModal,
              setShowResendModal,
              setShowCancelModal
            )}
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
