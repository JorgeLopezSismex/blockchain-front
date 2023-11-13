"use client";

import moment from "moment";
import Link from "next/link";
import * as formik from "formik";
import { Fragment, useState, useEffect, useRef } from "react";
import { createColumnHelper } from "@tanstack/react-table";

import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import FormSelect from "@/components/form/FormSelect";
import AdminTable from "@/components/admin/AdminTable";
import FormDatePicker from "@/components/form/FormDatePicker";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";

import FormTextarea from "@/components/form/FormTextarea";

import { getRoles } from "@/utils/select-options/roles";

import { rejectIssuerScheme } from "@/validations/issuer-validations";

import { IssuerData } from "@/types/issuers";
import { apiFetch } from "@/helpers/api-fetch";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import { Concert_One } from "next/font/google";

import issuersTableColumns from "@/tableColumns/issuersTableColums";
import AdminModalJorge from "@/components/admin/AdminModalJorge";

export default function Issuers() {
  const { Formik } = formik;

  const [auth, setAuth] = useState(500);

  const [permissions, setPermissions] = useState([]);

  const [roles, setRoles] = useState([]);
  const [issuers, setIssuers] = useState([]);
  const [selectedIssuer, setSelectedIssuer] = useState({});
  const [issuerVerificationStatus, setIssuerVerificationStatus] = useState([]);

  const [dataLoading, setDataLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "ISSUERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (!res.success) return setAuth(500);

      const permissions = res.data;
      setPermissions(permissions);
      if (!permissions.LIST_ISSUER) return setAuth(401);
    });

    // Roles
    const rolesParams = new URLSearchParams();
    rolesParams.append("category", "ISSUERS");
    apiFetch(`roles?${rolesParams.toString()}`).then((res) => {
      if (!res.success) return setAuth(500);

      const roles = res.data;
      setRoles(roles);
    });

    // Estados de verificación
    // apiFetch("issuers/verification-status").then((res) => {
    //   if (!res.success) return setAuth(500);

    //   const issuerVerificationStatus = res.data;
    //   setIssuerVerificationStatus(issuerVerificationStatus);
    // });

    // Emisores
    apiFetch("issuers").then((res) => {
      if (!res.success) return setAuth(500);

      setAuth(200);
      setIssuers(res.data);
      setDataLoading(false);
    });
  }, []);

  const verifyIssuer = async () => {
    alert("Se inicia em proceso de verificación");

    if (JSON.stringify(selectedIssuer) === "{}") {
      return alert("No hay un emisor seleccionado");
    }

    setModalLoading(true);

    console.log("Hola mundo, este es el emisor seleccionado", selectedIssuer);
  };

  const rejectIssuer = async () => {};

  if (dataLoading) return <AdminTableSpinner />;

  if (auth == 500) return <h1>Ocurrió un error</h1>;

  if (auth == 401) return <h1>nO TIENES PERMISOS</h1>;

  return (
    <Fragment>
      <AdminModalJorge
        showButtons={true}
        show={showDeleteModal}
        title="Eliminar emisor"
        primaryBtnVariant="danger"
        handleSubmit={verifyIssuer}
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
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={{
            name: null,
            role: null,
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
                  sm={12}
                  md={6}
                  name="role"
                  label="Rol"
                  getOptions={getRoles}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona un rol"
                />

                <FormAsyncSelect
                  sm={12}
                  md={6}
                  name="role2"
                  getOptions={getRoles}
                  setFieldValue={setFieldValue}
                  label="Estado de verificación"
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
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  name="verificationDateFrom"
                  label="Fecha de verificación mínima"
                  maxDate={moment(values.verificationDateTo)}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  setFieldValue={setFieldValue}
                  placeholder="Selecciona una fecha"
                  name="verificationDateTo"
                  label="Fecha de verificación máxima"
                  minDate={moment(values.verificationDateFrom)}
                />
              </Row>

              <div className="d-flex justify-content-end">
                <Button type="submit">Filtrar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
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
          <Button variant="primary">Nuevo</Button>
        </AdminTable>
      </AdminCardContainer>
    </Fragment>
  );
}
