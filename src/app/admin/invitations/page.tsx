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

import { cancelInvitationScheme } from "@/validations/invitation-validations";

import { apiFetch } from "@/helpers/api-fetch";

import { InvitationsPermissionsData } from "@/types/invitation";

// import { cancelFormSchema } from "@/validations/validation_request";
//import { InvitationsData } from "@/types/invitation"; //Debería quitarlo

import invitationsTableColums from "@/table-columns/invitations";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { InvitationsData } from "@/types/invitation";

import AdminFilterContainer from "@/components/admin/AdminFilterContainer";

import FormTextarea from "@/components/form/FormTextarea";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";

import FormDatePicker from "@/components/form/FormDatePicker";

import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { getInvitationStatusOptionList } from "@/utils/select-options/invitation-status";

export default function Invitations() {
  const [dataLoading, setDataLoading] = useState(true);
  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);

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

  const [permissions, setPermissions] = useState(
    {} as InvitationsPermissionsData
  );
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingInvitations, setLoadingInvitations] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "INVITATIONS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      console.log(res);

      if (res.success) {
        setPermissions(res.data);
        if (!res.data.LIST_INVITATION) {
          return null;
        }

        getInvitations();
      }
    });
  }, []);

  const getInvitations = async () => {
    setLoadingInvitations(true);
    apiFetch("invitations").then((res) => {
      console.log(res);
      if (res.success) {
        setInvitations(res.data);
        setLoadingScreen(false);
        setLoadingInvitations(false);
      }
    });
  };

  const getFilteredInvitations = async (values: any) => {
    const invitationsParams = new URLSearchParams();
    if (values.issuerId != null) {
      invitationsParams.append("issuerId", values.issuerId);
    }

    if (values.invitationStatusId != null) {
      invitationsParams.append("invitationStatusId", values.invitationStatusId);
    }

    if (values.createdAtFrom != null) {
      invitationsParams.append("createdAtFrom", values.createdAtFrom);
    }

    if (values.createdAtTo != null) {
      invitationsParams.append("createdAtTo", values.createdAtTo);
    }

    console.log("Estos son los valores", values);
    console.log("Estos son los filtros", invitationsParams);

    setLoadingInvitations(true);
    apiFetch(`invitations?${invitationsParams.toString()}`).then((res) => {
      if (res.success) {
        setInvitations(res.data);

        setLoadingScreen(false);
        setLoadingInvitations(false);
      }
    });
  };

  const resendInvitation = async () => {
    setLoadingModal(true);
    apiFetch("invitations/resend", "POST", {
      invitationId: selectedInvitation.invitationId,
    }).then((res) => {
      setLoadingModal(false);
      setShowResendModal(false);

      if (res.success) {
        setShowToast(true);
        setToastVariant("success");
        setToastMessage(res.message);
        setToastTitle("Invitaciones");

        return;
      }

      setShowToast(true);
      setToastVariant("danger");
      setToastMessage(res.message);
      setToastTitle("Invitaciones");

      return;
    });
  };

  const cancelInvitation = async (values: any) => {
    setLoadingModal(true);
    apiFetch("invitations/cancel", "POST", {
      invitationId: selectedInvitation.invitationId,
      cancelReason: values.reason,
    }).then((res) => {
      setLoadingModal(false);
      setShowCancelModal(false);

      if (res.success) {
        getInvitations();

        setShowToast(true);
        setToastMessage(res.message);
        setToastTitle("Invitaciones");
        setToastVariant("success");

        return;
      }

      setShowToast(true);
      setToastVariant("danger");
      setToastMessage(res.message);
      setToastTitle("Invitaciones");
    });
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Invitaciones">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Invitaciones</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminFilterContainer>
        <Formik
          onSubmit={getFilteredInvitations}
          initialValues={{
            issuerId: null,
            invitationStatusId: null,
            createdAtFrom: null,
            createdAtTo: null,
          }}
        >
          {({ handleChange, handleSubmit, setFieldValue, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FormAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  label="Emisor"
                  name="issuerId"
                  disabled={false}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un emisor"
                  getOptions={() => getIssuerOptionList()}
                />

                <FormAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  label="Estado"
                  disabled={false}
                  name="invitationStatusId"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un estado"
                  getOptions={() => getInvitationStatusOptionList()}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtFrom"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  maxDate={moment(values.createdAtTo)}
                  label="Fecha de creación del registro mínima"
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="createdAtTo"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  minDate={moment(values.createdAtFrom)}
                  label="Fecha de creación del registro máxima"
                />
              </Row>

              <div className="d-flex justify-content-end">
                <AdminFormSubmitButton
                  label="Filtrar"
                  loading={loadingInvitations}
                />
              </div>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
        {loadingInvitations ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            columns={invitationsTableColums(
              permissions,
              setSelectedInvitation,
              setShowDetailsModal,
              setShowResendModal,
              setShowCancelModal
            )}
            defaultData={invitations}
          >
            {!permissions.CREATE_INVITATION ? null : (
              <Link href={"/admin/invitations/create"}>
                <Button variant="primary">Nuevo</Button>
              </Link>
            )}
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        title="Detalles"
        showButtons={false}
        show={showDetailsModal}
        modalLoading={loadingModal}
        handleClose={() => setShowDetailsModal(false)}
      >
        <Container>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <h6>Emisor</h6>
              {selectedInvitation.issuerName}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Correo elec. del emisor</h6>
              {selectedInvitation.issuerEmail}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Nombre(s) del invitado</h6>
              {selectedInvitation.name}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Apellido(s) del invitado</h6>
              {selectedInvitation.lastName}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Correo electrónico</h6>
              {selectedInvitation.email}
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h6>Fecha-Hora de creación</h6>
              {moment(selectedInvitation.createdAt).format(
                "DD/MM/YYYY hh:mm:ss"
              )}
            </Col>
            <Col xs={12} md={12} className="mb-3">
              <h6>Estado</h6>
              {selectedInvitation.invitationStatusName}
            </Col>
            {selectedInvitation.canceledAt == null ? null : (
              <Row>
                <Col xs={12} md={12} className="mb-3">
                  <h6>Fecha-Hora de cancelación</h6>
                  {moment(selectedInvitation.canceledAt).format(
                    "DD/MM/YYYY hh:mm:ss"
                  )}
                </Col>
                <Col xs={12} md={12} className="mb-3">
                  <h6>Motivo de cancelación</h6>
                  {selectedInvitation.cancelReason}
                </Col>
              </Row>
            )}
          </Row>
        </Container>
      </AdminModalJorge>

      <AdminModalJorge
        showButtons={true}
        show={showResendModal}
        title="Reenviar invitación"
        modalLoading={loadingModal}
        handleSubmit={resendInvitation}
        handleClose={() => setShowResendModal(false)}
      >
        ¿Estás seguro de querer reenviar esta invitación a la dirección de
        correo electrónico {selectedInvitation.email}?
      </AdminModalJorge>

      <Formik
        onSubmit={cancelInvitation}
        initialValues={{ reason: "" }}
        validationSchema={cancelInvitationScheme}
      >
        {({ handleChange, handleSubmit, resetForm, values, errors }) => (
          <AdminModalJorge
            formModal={true}
            showButtons={true}
            show={showCancelModal}
            title="Cancelar invitación"
            primaryBtnVariant="danger"
            handleSubmit={handleSubmit}
            modalLoading={loadingModal}
            primaryBtnText="Cancelar invitación"
            handleClose={() => {
              resetForm();
              setShowCancelModal(false);
            }}
          >
            <Form id="RejectIssuerForm" noValidate onSubmit={() => {}}>
              <Row className="mb-3">
                <FormTextarea
                  sm={12}
                  md={12}
                  id={"reason"}
                  name={"reason"}
                  value={values.reason}
                  errors={errors.reason}
                  handleChange={handleChange}
                  label={"Mótivo de la cancelación"}
                  placeholder={"Envié esta invitación por error."}
                />
              </Row>
            </Form>
          </AdminModalJorge>
        )}
      </Formik>

      <ActionToast
        delay={3000}
        show={showToast}
        title={toastTitle}
        message={toastMessage}
        variant={toastVariant}
        onClose={() => setShowToast(false)}
      />
    </Fragment>
  );
}
