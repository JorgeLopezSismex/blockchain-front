"use client";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import { apiFetch } from "@/helpers/api-fetch";
import { Fragment, useEffect, useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

import { Breadcrumb, Row, Form } from "react-bootstrap";
import { getIssuerOptionList } from "@/utils/select-options/issuers";
import AdminCardContainer from "@/components/admin/AdminCardContainer";
import { Formik } from "formik";
import IssuersForm from "../form";
import { IssuerData } from "@/types/issuers";
import { getSuburbsOptionList } from "@/utils/select-options/suburbs";

export default function UpdateIssuer() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingIssuer, setLoadingIssuer] = useState(false);

  const [initialValues, setInitialValues] = useState({});

  const [disableSearchZipCode, setDisableSearchZipCode] = useState(false);
  const [disableSuburbs, setDisableSuburbs] = useState(false);

  const [suburbsKey, setSuburbsKey] = useState(1);

  const [loadingSuburbs, setLoadingSuburbs] = useState(false);
  const [suburbs, setSuburbs] = useState([]);
  const [defaultSuburb, setDefaultSuburb] = useState({});

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "ISSUERS_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        if (!res.data.UPDATE_ISSUER) {
          return null;
        }

        getIssuer();
      }
    });
  }, []);

  const getIssuer = async () => {
    setLoadingIssuer(true);
    apiFetch(`issuers/${id}`).then((res) => {
      console.log("Estos son los datos del emisor", res);
      if (res.success) {
        const issuer = res.data as IssuerData;

        if (issuer.zipCode != null || issuer.zipCode != "") {
          let zip = issuer.zipCode;
          getSuburbsOptionList(
            issuer.zipCode!,
            suburbs,
            setSuburbs,
            setLoadingSuburbs
          );

          setDefaultSuburb({ label: issuer.suburb, value: issuer.suburb });
        }
        setInitialValues({
          name: issuer.name,
          legalName: issuer.legalName,
          zipCode: issuer.zipCode,
          country: issuer.country,
          state: issuer.state,
          city: issuer.city,
          suburb: issuer.suburb,
          street: issuer.street,
          internalNumber: issuer.internalNumber,
          externalNumber: issuer.externalNumber,
          email: issuer.email,
          phone: issuer.phone,
          rfc: issuer.rfc,
          description: issuer.description,
        });

        setLoadingIssuer(false);
        setLoadingScreen(false);
      }
    });
  };

  const UpdateIssuer = async () => {
    alert("Aqui se actualiza el emisor");
  };

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Editar emisor">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../../admin/issuers"}>
            Emisores
          </Link>
          <Breadcrumb.Item active>Editar</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminCardContainer xs={12}>
        {loadingIssuer ? (
          <AdminTableSpinner />
        ) : (
          <Formik onSubmit={UpdateIssuer} initialValues={initialValues}>
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              setFieldValue,
            }) => (
              <IssuersForm
                values={values}
                errors={errors}
                disbaleForm={false}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                disableSearchZipCode={disableSearchZipCode}
                setDisableSearchZipCode={setDisableSearchZipCode}
                getSuburbs={getSuburbsOptionList}
                suburbOptions={[]}
                setSuburbOptions={() => null}
                disableSuburbs={disableSuburbs}
                setDisableSuburbs={setDisableSuburbs}
                countryKey={1}
                suburbsKey={suburbsKey}
                setSuburbsKey={setSuburbsKey}
                suburbs={suburbs}
                setSuburbs={setSuburbs}
                loadingSuburbs={loadingSuburbs}
                setLoadingSuburbs={setLoadingSuburbs}
                defaultSuburb={defaultSuburb}
                setDefaultSuburb={setDefaultSuburb}
              ></IssuersForm>
            )}
          </Formik>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
