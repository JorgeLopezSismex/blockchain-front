"use client";

import * as formik from "formik";

import Button from "react-bootstrap/Button";
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Fragment } from "react";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import FormInput from "@/components/form/FormInput";
import { apiFetch } from "@/helpers/api-fetch";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import { getRoles } from "@/utils/select-options/roles";
import FormAsyncSelect from "@/components/form/FormAsyncSelect";
import { Concert_One } from "next/font/google";

export default function UpdateMember() {
  const [loadingData, setLoadingData] = useState(true);
  const [initialValues, setInitialValues] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  let roles = [];
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { Formik } = formik;

  useEffect(() => {
    // getMember();
    apiFetch(`members/${id}`)
      .then((res) => {
        console.log("Primer fetch", res);
      })
      .then((res) => {
        console.log("Esto no se que es", res);
      });
  }, []);

  const getMember = async () => {
    setLoadingData(true);
    const res = await apiFetch(`members/${id}`);

    if (res.success) {
      setLoadingData(false);
      const member = res.data;

      setInitialValues({
        name: member.name,
        lastName: member.lastName,
        email: member.email,
      });

      console.log(res);

      const res2 = await apiFetch("roles");
      console.log(res2, "Estos son los roles");
    }
  };

  return (
    <Fragment>
      <AdminPageHeader title="Editar miembro">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../members"}>
            Miembros
          </Link>
          <Breadcrumb.Item active>Editar</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        {loadingData ? (
          <AdminTableSpinner />
        ) : (
          <Formik initialValues={initialValues} onSubmit={() => {}}>
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              setFieldValue,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <FormInput
                    md={6}
                    sm={12}
                    type="text"
                    label="Nombre(s)"
                    disabled={false}
                    name="email"
                    value={values.name}
                    errors={null}
                    controlId="ds"
                    handleChange={handleChange}
                    placeholder=""
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type="text"
                    label="Apellido(s)"
                    disabled={false}
                    name="email"
                    value={values.lastName}
                    errors={null}
                    controlId="ds"
                    handleChange={handleChange}
                    placeholder=""
                  />

                  <FormInput
                    md={6}
                    sm={12}
                    type="text"
                    label="Correo electrónico"
                    disabled={true}
                    name="email"
                    value={values.email}
                    errors={null}
                    controlId="ds"
                    handleChange={handleChange}
                    placeholder=""
                  />

                  <FormAsyncSelect
                    sm={12}
                    md={6}
                    name="role"
                    label="Rol"
                    getOptions={getRoles}
                    setFieldValue={setFieldValue}
                    placeholder="Selecciona un rol"
                  />
                </Row>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Button type="submit" variant="primary">
                    Guardar
                  </Button>
                  <Button
                    variant="outline-secondary"
                    style={{ marginInline: 10 }}
                  >
                    Atrás
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
