"use client";

import moment from "moment";
import Link from "next/link";
import { Formik } from "formik";
import { useSearchParams } from "next/navigation";
import { Fragment, useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import AdminTable from "@/components/admin/AdminTable";
import ActionToast from "@/components/main/ActionToast";
import FormTextarea from "@/components/form/FormTextarea";
import FilterDatePicker from "@/components/form/FilterDatePicker";
import FilterAsyncSelect from "@/components/form/FilterAsyncSelect";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

import { apiFetch } from "@/helpers/api-fetch";
import { InvitationsData } from "@/types/invitation";
import { IssuersPermissionsData } from "@/types/issuers";
import { InvitationsPermissionsData } from "@/types/invitation";
import invitationsTableColums from "@/table-columns/invitations";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import { cancelInvitationScheme } from "@/validations/invitation-validations";
import { getInvitationStatusOptionList } from "@/utils/select-options/invitation-status";

export default function Invitations() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isAdmin, setIsAdmin] = useState(false);
  const [actions, setActions] = useState(false);

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

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  const [permissions, setPermissions] = useState(
    {} as InvitationsPermissionsData
  );
  const [issuerPermissions, setIssuerPermissions] = useState(
    {} as IssuersPermissionsData
  );

  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingInvitations, setLoadingInvitations] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    if (id == null || id == null || id == undefined) {
      // Permisos para miembros del usuario
      setActions(true);
      getInvitationsPermissions(getInvitations());
      return;
    }

    // Permisos para invitaciones de un emisor
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "ISSUERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setIssuerPermissions(res.data);

        if (res.data.LIST_ISSUER) {
          setIsAdmin(true);
        }

        if (!res.data.DETAIL_ISSUER) {
          return null;
        }

        // Invitaciones
        getInvitationsPermissions(getInvitations(parseInt(id)));
      }
    });
  }, []);

  const getInvitationsPermissions = async (getInvitations: any) => {
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
  };

  const getInvitations = async (issuerId: number | null = null) => {
    setLoadingInvitations(true);

    const membersParams = new URLSearchParams();
    if (issuerId != null) {
      membersParams.append("issuerId", issuerId.toString());
    }

    const url =
      membersParams.toString() === ""
        ? "invitations"
        : `invitations?${membersParams.toString()}`;

    apiFetch(url).then((res) => {
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

    const filters = JSON.parse(JSON.stringify(values), (key, value) => {
      return value === "" ? null : value;
    });

    if (filters.issuerId != null) {
      invitationsParams.append("issuerId", filters.issuerId);
    }

    if (filters.invitationStatusId != null) {
      invitationsParams.append(
        "invitationStatusId",
        filters.invitationStatusId
      );
    }

    if (filters.createdAtFrom != null) {
      const date = moment(filters.createdAtFrom, "DD/MM/YYYY");

      const formattedDate = date.toISOString();
      invitationsParams.append("createdAtFrom", formattedDate);
    }

    if (filters.createdAtTo != null) {
      const date = moment(filters.createdAtTo, "DD/MM/YYYY");

      const formattedDate = date.toISOString();
      invitationsParams.append("createdAtTo", formattedDate);
    }

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

  const cancelInvitation = async (values: any, resetForm: any) => {
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

        resetForm({ reason: "" });

        return;
      }

      setShowToast(true);
      setToastVariant("danger");
      setToastMessage(res.message);
      setToastTitle("Invitaciones");

      resetForm({ reason: "" });
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
            issuerId: "",
            invitationStatusId: "",
            createdAtFrom: "",
            createdAtTo: "",
          }}
        >
          {({
            values,
            errors,
            resetForm,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FilterAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  label="Emisor"
                  name="issuerId"
                  disabled={false}
                  value={values.issuerId}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un emisor"
                  getOptions={() => getIssuerOptionList()}
                />

                <FilterAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  label="Estado"
                  disabled={false}
                  name="invitationStatusId"
                  setFieldValue={setFieldValue}
                  value={values.invitationStatusId}
                  placeholder="Selecciona un estado"
                  getOptions={() => getInvitationStatusOptionList()}
                />

                <FilterDatePicker
                  md={6}
                  sm={12}
                  name="createdAtFrom"
                  value={values.createdAtFrom}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  maxDate={moment(values.createdAtTo)}
                  label="Fecha de creación del registro mínima"
                />

                <FilterDatePicker
                  md={6}
                  sm={12}
                  name="createdAtTo"
                  value={values.createdAtTo}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  minDate={moment(values.createdAtFrom)}
                  label="Fecha de creación del registro máxima"
                />
              </Row>

              <div className="d-flex justify-content-end">
                <Button
                  variant="outline-secondary"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    resetForm({
                      values: {
                        issuerId: "",
                        invitationStatusId: "",
                        createdAtFrom: "",
                        createdAtTo: "",
                      },
                    });
                  }}
                >
                  Limpiar
                </Button>

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
              setShowCancelModal,
              actions
            )}
            defaultData={invitations}
          >
            {!permissions.CREATE_INVITATION ? null : !actions ? null : (
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
        onSubmit={(values, { resetForm }) => {
          cancelInvitation(values, resetForm);
        }}
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
