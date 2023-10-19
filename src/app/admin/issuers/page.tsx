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

import { IssuerData } from "@/types/issuers";
import { apiFetch } from "@/helpers/api-fetch";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";

export default function Issuers() {
  const suburbs = [
    { value: "colinia1", label: "Colonia 1" },
    { value: "colonia2", label: "Colonia 2" },
    { value: "colonia3", label: "Colonia 3" },
  ];

  const { Formik } = formik;

  const [issuers, setIssuers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [dataLoading, setDataLoading] = useState(true);
  const columnHelper = createColumnHelper<IssuerData>();

  useEffect(() => {
    loadRoles();

    getIssuers();
  }, []);

  const loadRoles = async () => {
    try {
      const res = await apiFetch("roles");
      if (res.data) {
        const data = res.data;

        const options = data.map((item) => ({
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

  const getIssuers = async () => {
    setDataLoading(true);
    const res = await apiFetch("issuers");
    // alert("Termino la peticion de datos");
    console.log(res);

    if (res.success) {
      setDataLoading(false);
      setIssuers(res.data);
    }
  };

  const columns = [
    columnHelper.accessor("issuerId", {
      header: () => "Id",
      cell: (info) => info.getValue(),
    }),
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
      header: () => "Última solicitud de verificación",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Acciones",
      cell: (info) => {
        return (
          <ButtonGroup aria-label="Basic example">
            <AdminTableActionButton icon={faPencil} tooltip="Editar" />
            <AdminTableActionButton icon={faTrash} tooltip="Borrar" />
            <AdminTableActionButton icon={faCheck} tooltip="Verificar" />
            <AdminTableActionButton icon={faXmark} tooltip="Rechazar" />
          </ButtonGroup>
        );
      },
    }),
  ];

  return (
    <Fragment>
      <AdminPageHeader title="Emisores">
        <Breadcrumb className="float-sm-right">
          <Breadcrumb.Item>
            <Link href={"/admin"} style={{ textDecoration: "none" }}>
              Inicio
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Emisores</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminFilterContainer>
        <Formik
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={{
            role: "",
          }}
        >
          {({ handleChange, setFieldValue, handleSubmit, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <h6>Rol y estado de verificación</h6>
                <FormAsyncSelect
                  md={6}
                  sm={12}
                  name="roles"
                  label="Rol"
                  loadOptions={loadRoles}
                  setFieldValue={setFieldValue}
                />

                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Estado de verificación"}
                  defaultText={"fdfsd"}
                />

                <h6>Fecha de registro</h6>
                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Registrado del"}
                  defaultText={"fdfsd"}
                />

                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Registrado hasta"}
                  defaultText={"fdfsd"}
                />

                <h6>Fecha de de última solicitud de validación</h6>
                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Solicitud enviada del"}
                  defaultText={"fdfsd"}
                />

                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Solicitud enviada hasta"}
                  defaultText={"fdfsd"}
                />

                <h6>Fecha de validación</h6>
                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Último envio de documentos del"}
                  defaultText={"fdfsd"}
                />

                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Último envio de documentos hasta"}
                  defaultText={"fdfsd"}
                />
              </Row>

              {/* <button type="submit">Hola mundo</button> */}
              <div className="d-flex justify-content-end">
                <Button>Filtrar</Button>
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
