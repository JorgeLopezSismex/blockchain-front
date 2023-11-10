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

import issuersTableColumns from "@/utils/tableColumButtons";
import AdminModalJorge from "@/components/admin/AdminModalJorge";

export default function Issuers() {
  const { Formik } = formik;

  const [permissions, setPermissions] = useState([]);

  const [issuers, setIssuers] = useState([]);
  const [selectedIssuer, setSelectedIssuer] = useState({});

  const [dataLoading, setDataLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  useEffect(() => {
    getIssuers();
    // const queryParams = new URLSearchParams();
    // queryParams.append("module", "ISSUERS_MODULE");

    // apiFetch(`permissions?${queryParams.toString()}`).then((response) => {
    //   if (!response.status) {
    //     console.log("Ocuriró un error");
    //   }

    //   setPermissions(response.data);
    //   console.log(response.data, "Estos son los permisos");
    // });
  }, []);

  const getIssuers = async () => {
    setDataLoading(true);
    const res = await apiFetch("issuers");

    if (res.success) {
      setDataLoading(false);
      setIssuers(res.data);
    }
  };

  const verifyIssuer = async () => {
    alert("Se inicia em proceso de verificación");

    if (JSON.stringify(selectedIssuer) === "{}") {
      return alert("No hay un emisor seleccionado");
    }

    setModalLoading(true);

    console.log("Hola mundo, este es el emisor seleccionado", selectedIssuer);
  };

  const rejectIssuer = async () => {};

  return (
    <Fragment>
      <AdminModalJorge
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
        show={showVerifyModal}
        title="Verificar emisor"
        handleSubmit={verifyIssuer}
        modalLoading={modalLoading}
        handleClose={() => setShowVerifyModal(false)}
      >
        ¿Estás seguro de querer verificar este emisor?
      </AdminModalJorge>

      <Formik
        onSubmit={() => {
          alert("Se ejecuta correctamten");
        }}
        initialValues={{ reason: "" }}
        validationSchema={rejectIssuerScheme}
      >
        {({ handleChange, handleSubmit, resetForm, values, errors }) => (
          <AdminModalJorge
            formModal={true}
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
                />

                <FormAsyncSelect
                  sm={12}
                  md={6}
                  name="role2"
                  label="Estado de verificación"
                  getOptions={getRoles}
                  setFieldValue={setFieldValue}
                />

                <FormDatePicker
                  md={6}
                  sm={12}
                  name="signUpDateFrom"
                  setFieldValue={setFieldValue}
                  label="Fecha de registro mínima"
                  placeholder="Selecciona una feacha"
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
        {dataLoading ? (
          <AdminTableSpinner />
        ) : (
          <AdminTable
            defaultData={issuers}
            columns={issuersTableColumns(
              setSelectedIssuer,
              setShowDeleteModal,
              setShowVerifyModal,
              setShowRejectModal
            )}
          >
            <Button variant="primary">Nuevo</Button>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
