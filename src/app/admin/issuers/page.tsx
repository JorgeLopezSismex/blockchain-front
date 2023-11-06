"use client";

import moment from "moment";
import Link from "next/link";
import * as formik from "formik";
import { Fragment, useState, useEffect } from "react";
import { createColumnHelper } from "@tanstack/react-table";

import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import FormSelect from "@/components/form/FormSelect";
import AdminTable from "@/components/admin/AdminTable";
import FormDatePicker from "@/components/form/FormDatePicker";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminTableActionButton from "@/components/admin/AdminTableActionButton";

import { getRoles } from "@/utils/select-options/roles";

import { IssuerData } from "@/types/issuers";
import { apiFetch } from "@/helpers/api-fetch";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import { Concert_One } from "next/font/google";

export default function Issuers() {
  const { Formik } = formik;

  const [issuers, setIssuers] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<IssuerData>();

  useEffect(() => {
    getIssuers();
  }, []);

  const getIssuers = async () => {
    setDataLoading(true);
    const res = await apiFetch("issuers");

    if (res.success) {
      setDataLoading(false);
      setIssuers(res.data);
    }
  };

  const columns = [
    columnHelper.accessor("name", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Correo Electrónico",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("roleName", {
      header: () => "Rol",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      header: () => "Registro",
      cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("issuerVerificationStatusName", {
      header: () => "Verificación",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastValidationSubmit", {
      header: () => "Últ. solicitud de verif.",
      cell: (info) => info.getValue(),
    }),
    // columnHelper.display({
    //   id: "actions",
    //   header: () => "Acciones",
    //   cell: (info) => {
    //     console.log(info.row.original);

    //     const row = info.row.original;

    //     return (
    //       <ButtonGroup aria-label="Basic example">
    //         <AdminTableActionButton icon={faPencil} tooltip="Editar" />
    //         <AdminTableActionButton icon={faTrash} tooltip="Borrar" />
    //         <AdminTableActionButton icon={faCheck} tooltip="Verificar" />
    //         <AdminTableActionButton icon={faXmark} tooltip="Rechazar" />
    //       </ButtonGroup>
    //     );
    //   },
    // }),
  ];

  return (
    <Fragment>
      <AdminPageHeader title="Emisores">
        {/* <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Emisores</Breadcrumb.Item>
        </Breadcrumb> */}
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
          <AdminTable columns={columns} defaultData={issuers}>
            <Button variant="primary">Nuevo</Button>
          </AdminTable>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
