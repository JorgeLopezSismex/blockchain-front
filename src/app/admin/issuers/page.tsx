"use client";

import * as formik from "formik";

import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import FormSelect from "@/components/form/FormSelect";
import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
import AdminTable from "@/components/admin/AdminTable";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { apiFetch } from "@/helpers/api-fetch";
import { Form } from "react-bootstrap";

export default function Issuers() {
  const suburbs = [
    { value: "colinia1", label: "Colonia 1" },
    { value: "colonia2", label: "Colonia 2" },
    { value: "colonia3", label: "Colonia 3" },
  ];

  const { Formik } = formik;

  const [issuers, setIssuers] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    getIssuers();
  }, []);

  const getIssuers = async () => {
    setDataLoading(true);
    const res = await apiFetch("issuers");
    console.log(res);

    if (res.success) {
      setDataLoading(false);
      setIssuers(res.data);
    }
  };

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
        <Formik onSubmit={() => {}} initialValues={{}}>
          {({ handleChange, handleSubmit, values, errors }) => (
            <Form>
              <Row className="mb-3">
                <h5>Rol y estado de verificación</h5>
                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Rol asignado"}
                  defaultText={"fdfsd"}
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

                <h5>Fecha de registro</h5>
                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Rol asignado"}
                  defaultText={"fdfsd"}
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

                <h5>Fecha de de última solicitud de validación</h5>
                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Rol asignado"}
                  defaultText={"fdfsd"}
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

                <h5>Fecha de validación</h5>
                <FormSelect
                  md={6}
                  sm={12}
                  name={"suburb"}
                  disabled={false}
                  options={suburbs}
                  label={"Rol asignado"}
                  defaultText={"fdfsd"}
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
              </Row>
            </Form>
          )}
        </Formik>
      </AdminFilterContainer>

      <AdminCardContainer xs={12}>
        {dataLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <AdminTable />
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
