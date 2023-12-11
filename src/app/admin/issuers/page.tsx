"use client";

import moment from "moment";
import Link from "next/link";
import * as formik from "formik";
import { Fragment, useEffect, useState } from "react";

import { Breadcrumb, Row, Form } from "react-bootstrap";

import AdminTable from "@/components/admin/AdminTable";
import ActionToast from "@/components/main/ActionToast";
import FormTextarea from "@/components/form/FormTextarea";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

import { apiFetch } from "@/helpers/api-fetch";
import { getRoles } from "@/utils/select-options/roles";
import issuersTableColumns from "@/table-columns/issuers";
import { rejectIssuerScheme } from "@/validations/issuer-validations";
import { getIssuerVerificationStatus } from "@/utils/select-options/issuerVerificationStatus";

export default function IssuerList() {
  const { Formik } = formik;

  const [permissions, setPermissions] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const [issuers, setIssuers] = useState([]);
  const [selectedIssuer, setSelectedIssuer] = useState({});
  const [loadingIssuers, setLoadingIssuers] = useState(true);

  const [roles, setRoles] = useState([]);
  const [issuerVerificationStatus, setIssuerVerificationStatus] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "ISSUERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setPermissions(res.data);
        console.log(res.data, "Estos son los permisos");

        // Emisores
        getIssuers();
      }
    });
  }, []);

  const getIssuers = async () => {
    setLoadingIssuers(true);
    apiFetch("issuers").then((res) => {
      if (res.success) {
        setIssuers(res.data);

        setLoadingScreen(false);
        setLoadingIssuers(false);
      }
    });
  };

  const getFilteredIssuers = async (values: any) => {
    const issuersParams = new URLSearchParams();
    if (values.roleId != null) {
      issuersParams.append("roleId", values.roleId);
    }

    if (values.issuerVerificationStatusId != null) {
      issuersParams.append(
        "issuerVerificationStatusId",
        values.issuerVerificationStatusId
      );
    }

    if (values.signUpDateFrom != null) {
      issuersParams.append("signUpDateFrom", values.signUpDateFrom);
    }

    if (values.signUpDateTo != null) {
      issuersParams.append("signUpDateTo", values.signUpDateTo);
    }

    if (values.latestVerificationRequestDateFrom != null) {
      issuersParams.append(
        "latestVerificationRequestDateFrom",
        values.latestVerificationRequestDateFrom
      );
    }

    if (values.latestVerificationRequestDateTo != null) {
      issuersParams.append(
        "latestVerificationRequestDateTo",
        values.latestVerificationRequestDateTo
      );
    }

    if (values.verificationDateFrom != null) {
      issuersParams.append("verificationDateFrom", values.verificationDateFrom);
    }

    if (values.verificationDateTo != null) {
      issuersParams.append("verificationDateTo", values.verificationDateTo);
    }

    setLoadingIssuers(true);
    apiFetch(`issuers?${issuersParams.toString()}`).then((res) => {
      if (res.success) {
        setIssuers(res.data);
        setLoadingScreen(false);
        setLoadingIssuers(false);
      }
    });
  };

  const deleteIssuer = async () => {
    alert("Proceso de eliminar emisor");
  };

  const verifyIssuer = async () => {
    setModalLoading(true);
    apiFetch("issuers").then((res) => {
      if (res.success) {
        setShowVerifyModal(false);
        setModalLoading(false);

        getIssuers();

        setShowToast(true);
        setToastTitle("Emisores");
        setToastVariant("success");
        setToastMessage(res.message);

        return;
      }

      setShowToast(true);
      setToastTitle("Emisores");
      setToastVariant("danger");
      setToastMessage(res.message);
    });
  };

  const rejectIssuer = async () => {
    alert("Proceso de rechazar emisor");
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Emisores">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Breadcrumb.Item active>Emisores</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminFilterContainer>
        <Formik
          onSubmit={getFilteredIssuers}
          initialValues={{
            roleId: null,
            issuerVerificationStatusId: null,
            signUpDateFrom: null,
            signUpDateTo: null,
            latestVerificationRequestDateFrom: null,
            latestVerificationRequestDateTo: null,
            verificationDateFrom: null,
            verificationDateTo: null,
          }}
        >
          {({ handleChange, setFieldValue, handleSubmit, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <FormAsyncSelect
                  md={6}
                  sm={12}
                  name="roleId"
                  label="Rol"
                  errors={null}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un rol"
                  getOptions={() => getRoles("ISSUERS")}
                />

                <FormAsyncSelect
                  md={6}
                  sm={12}
                  errors={null}
                  setFieldValue={setFieldValue}
                  label="Estado de verificación"
                  name="issuerVerificationStatusId"
                  getOptions={getIssuerVerificationStatus}
                  placeholder="Selecciona un estado de verificación"
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="signUpDateFrom"
                  setFieldValue={setFieldValue}
                  label="Fecha de registro mínima"
                  placeholder="Selecciona una fecha"
                  maxDate={moment(values.signUpDateTo)}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="signUpDateTo"
                  setFieldValue={setFieldValue}
                  label="Fecha de registro máxima"
                  placeholder="Selecciona una fecha"
                  minDate={moment(values.signUpDateFrom)}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  name="latestVerificationRequestDateFrom"
                  label="Fecha de última solicitud de verificación mínima"
                  maxDate={moment(values.latestVerificationRequestDateTo)}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  name="latestVerificationRequestDateTo"
                  label="Fecha de última solicitud de verificación máxima"
                  minDate={moment(values.latestVerificationRequestDateFrom)}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="verificationDateFrom"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  label="Fecha de verificación mínima"
                  maxDate={moment(values.verificationDateTo)}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="verificationDateTo"
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  label="Fecha de verificación máxima"
                  minDate={moment(values.verificationDateFrom)}
                />
              </Row>

              <div className="d-flex justify-content-end">
                <AdminFormSubmitButton
                  label="Filtrar"
                  loading={loadingIssuers}
                ></AdminFormSubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
        {loadingIssuers ? (
          <AdminTableSpinner></AdminTableSpinner>
        ) : (
          <AdminTable
            defaultData={issuers}
            columns={issuersTableColumns(
              permissions,
              setSelectedIssuer,
              setShowDeleteModal,
              setShowVerifyModal,
              setShowRejectModal
            )}
          >
            hola mundo
          </AdminTable>
        )}
      </AdminCardContainer>

      <AdminModalJorge
        showButtons={true}
        show={showDeleteModal}
        title="Eliminar emisor"
        primaryBtnVariant="danger"
        handleSubmit={deleteIssuer}
        modalLoading={modalLoading}
        handleClose={() => setShowDeleteModal(false)}
      >
        ¿Estás seguro de querer eliminar este emisor?
      </AdminModalJorge>

      <AdminModalJorge
        showButtons={true}
        show={showVerifyModal}
        title="Verificar emisor"
        handleSubmit={verifyIssuer}
        modalLoading={modalLoading}
        handleClose={() => setShowVerifyModal(false)}
      >
        ¿Estás seguro de querer verificar este emisor?
      </AdminModalJorge>

      <Formik
        onSubmit={rejectIssuer}
        initialValues={{ reason: "" }}
        validationSchema={rejectIssuerScheme}
      >
        {({ handleChange, handleSubmit, resetForm, values, errors }) => (
          <AdminModalJorge
            formModal={true}
            showButtons={true}
            show={showRejectModal}
            title="Rechazar emisor"
            primaryBtnVariant="danger"
            handleSubmit={handleSubmit}
            modalLoading={modalLoading}
            primaryBtnText="Rechazar emisor"
            handleClose={() => {
              resetForm();
              setShowRejectModal(false);
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
                  label={"Mótivo del rechazo"}
                  placeholder={
                    "El perfil se encuentra incompleto o no es válido."
                  }
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
