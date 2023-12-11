"use client";

import Link from "next/link";
import * as formik from "formik";
import { Fragment, useEffect, useState } from "react";

import { verifyIssuerScheme } from "@/validations/issuer-validations";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";

import FormInputFile from "@/components/form/FormInputFile";
import AdminCardContainer from "@/components/admin/AdminCardContainer";

import { IssuerData } from "@/types/issuers";

import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminAlert from "@/components/admin/AdminAlert";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

import { apiFetch } from "@/helpers/api-fetch";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import { ProfilePermissionsData } from "@/types/profile";
import { Issuer } from "@mercadopago/sdk-react/coreMethods/util/types";
import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";
import AdminFormBackButton from "@/components/admin/AdminFormBackButton";

import { VerificationData } from "@/types/issuers";
import IssuersForm from "../../issuers/form";

export default function Verification() {
  const [loadingData, setLoadingData] = useState(true);
  const [initialValues, setInitialValues] = useState({});
  const [issuer, setIssuer] = useState({} as IssuerData);

  const [alertTitle, setAlertTitle] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingVerificationData, setLoadingVerificationData] = useState(false);

  const [permissions, setPermissions] = useState({} as ProfilePermissionsData);

  const [verificationData, setVerificationData] = useState({} as IssuerData);
  const [attachments, setAttachments] = useState({});
  const [taxId, setTaxId] = useState();

  const [disbaleForm, setDisableForm] = useState(true);
  const [disableSuburbs, setDisableSuburbs] = useState(true);

  const [suburbOptios, setSuburbOptions] = useState([] as any[]);
  const [disableSearchZipCode, setDisableSearchZipCode] = useState(true);

  useEffect(() => {
    // Permisos
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("module", "PROFILE_MODULE");
    apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
      if (res.success) {
        setPermissions(res.data);
        if (!res.data.UPDATE_VERIFY_DATA) {
          return null;
        }

        // Información de verificación
        getVerificationData();
      }
    });
  }, []);

  const getVerificationData = async () => {
    setLoadingVerificationData(true);
    apiFetch("verification").then((res) => {
      if (res.success) {
        console.log(res);
        setVerificationData(res.data);
        setAttachments(res.attachments);

        const data = res.data as IssuerData;

        setDisableForm(
          data.issuerVerificationStatusKey == "VERIFIED" ||
            data.issuerVerificationStatusKey == "PENDING_VERIFICATION"
            ? true
            : false
        );

        setInitialValues({
          name: data.name,
          legalName: data.legalName,
          // sdfsdfsfsd
          zipCode: data.zipCode,
          country: data.country,
          state: data.state,
          city: data.city,
          //Colonia
          street: data.street,
          internalNumber:
            data.internalNumber != null ? data.internalNumber : "",
          externalNumber: data.externalNumber,
          email: data.email,
          phone: data.phone,
          rfc: data.rfc,
          taxId: null,
          description: data.description,
          constitutiveAct: null,
          taxSituationStatement: null,
        });

        if (data.issuerVerificationStatusKey == "UNVERIFIED") {
          setAlertTitle("Emisor sin verificar");
          setAlertVariant("warning");
          setAlertMessage(
            "Para utilizar las funciones de la plataforma, debes ser verificado por " +
              "la administración. Para ello, completa el siguiente formulario. La administración revisará " +
              "tu solicitud y recibirás un correo electrónico con la respuesta. Así mismo, prodras consultar el estado " +
              "de tu solicitud en esta página."
          );
        }

        if (data.issuerVerificationStatusKey == "VERIFIED") {
          setAlertTitle("Emisor verificado");
          setAlertVariant("success");
          setAlertMessage("");
        }

        if (data.issuerVerificationStatusKey == "PENDING_VERIFICATION") {
          setAlertTitle("Solicitud de verificación en revisión");
          setAlertVariant("warning");
          setAlertMessage("");
        }

        if (data.issuerVerificationStatusKey == "REJECTED") {
          setAlertTitle("Solicitud de verificación rechazada");
          setAlertVariant("danger");
          setAlertMessage("");
        }

        getSuburbs(res.data.zipCode, null);
      }
    });
  };

  const getSuburbs = async (zipCode: string, setFieldValue: any) => {
    setDisableSuburbs(true);
    const zipCodeParams = new URLSearchParams();
    zipCodeParams.append("zipCode", zipCode);
    apiFetch(`zip-code?${zipCodeParams.toString()}`).then((res) => {
      if (res.success) {
        var options: any[] = [];
        const suburbs = res.data;

        res.data.map((suburb: any) => {
          options[options.length] = {
            value: suburb.d_asenta,
            label: suburb.d_asenta,
          };
        });

        setSuburbOptions(options);

        if (setFieldValue != null || setFieldValue != undefined) {
          setFieldValue("city", res.data[0].d_mnpio);
          setFieldValue("state", res.data[0].d_estado);
        }

        setLoadingScreen(false);
        setDisableSuburbs(false);
        setLoadingVerificationData(false);
      }
    });
  };

  const { Formik } = formik;

  return loadingScreen ? (
    <AdminTableSpinner />
  ) : (
    <Fragment>
      <AdminPageHeader title="Verificación">
        <Breadcrumb className="float-sm-right">
          <Link className="breadcrumb-item" href={"../admin"}>
            Inicio
          </Link>
          <Link className="breadcrumb-item" href={"../admin/profile"}>
            Perfil
          </Link>
          <Breadcrumb.Item active>Verificación</Breadcrumb.Item>
        </Breadcrumb>
      </AdminPageHeader>

      <AdminAlert
        title={alertTitle}
        text={alertMessage}
        variant={alertVariant}
      />

      <AdminCardContainer xs={12}>
        {loadingVerificationData ? (
          <AdminTableSpinner />
        ) : (
          <Formik
            onSubmit={() => {
              alert("Se hace submit");
            }}
            initialValues={initialValues}
            validationSchema={verifyIssuerScheme}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              errors,
            }) => (
              <IssuersForm
                values={values}
                errors={errors}
                getSuburbs={getSuburbs}
                disbaleForm={disbaleForm}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                suburbOptions={suburbOptios}
                setSuburbOptions={setSuburbOptions}
                setDisableSuburbs={setDisableSuburbs}
                setFieldValue={setFieldValue}
                disableSuburbs={disableSuburbs}
                disableSearchZipCode={disableSearchZipCode}
                setDisableSearchZipCode={setDisableSearchZipCode}
              />
            )}
          </Formik>
        )}
      </AdminCardContainer>
    </Fragment>
  );
}
