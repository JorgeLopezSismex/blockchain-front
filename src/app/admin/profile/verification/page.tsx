"use client";

import Link from "next/link";

import { Fragment, useEffect, useState } from "react";

import { verifyIssuerScheme } from "@/validations/issuer-validations";

import Button from "react-bootstrap/Button";

import FormSelect from "@/components/form/FormSelect";

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

import { VerificationData } from "@/types/issuers";
import IssuersForm from "../../issuers/form";

import { redirect, useRouter } from "next/navigation";
import SubmitedData from "./submited-data";

import VerificationFirstStepForm from "./first-step-form";

import ActionToast from "@/components/main/ActionToast";
import AdminModalJorge from "@/components/admin/AdminModalJorge";
import VerificationSecondStepForm from "./second-step-form";

import { getSuburbsOptionList } from "@/utils/select-options/suburbs";

export default function Verification() {
  const router = useRouter();

  const [loadingForm, setLoadingForm] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [loadingVerificationData, setLoadingVerificationData] = useState(false);

  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [suburbs, setSuburbs] = useState([]);
  const [loadingSuburbs, setLoadingSuburbs] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastVariant, setToastVariant] = useState("success");
  const [toastMessage, setToastMessage] = useState("Mensaje.");

  const [loadingData, setLoadingData] = useState(true);
  const [initialValues, setInitialValues] = useState({});

  const [issuer, setIssuer] = useState({} as IssuerData);

  const [alertTitle, setAlertTitle] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [permissions, setPermissions] = useState({} as ProfilePermissionsData);

  const [verificationData, setVerificationData] = useState({} as IssuerData);
  const [attachments, setAttachments] = useState({});
  const [taxId, setTaxId] = useState();

  const [disbaleForm, setDisableForm] = useState(true);
  const [disableSuburbs, setDisableSuburbs] = useState(true);

  const [suburbOptios, setSuburbOptions] = useState([] as any[]);
  const [disableSearchZipCode, setDisableSearchZipCode] = useState(false);

  const [hasContacts, setHasContacts] = useState(false);
  const [issuerVerificationStatus, setIssuerVerificationStatus] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [suburbsKey, setSuburbsKey] = useState(1);
  const [countryKey, setCountryKey] = useState(1000);

  const [submitedData, setSubmitedData] = useState({});

  /* CAMBIAR PARA HACER PRUEBAS!!!!!!!! */
  const [fullForm, setFullForm] = useState(true);
  const [secondStepInitialValues, setSecondStepInitialValues] = useState(
    {} as any
  );

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

        // Contactos
        getContacts();

        // Información de verificación
        // getVerificationData();
      }
    });
  }, []);

  const getContacts = async () => {
    apiFetch("contacts").then((res) => {
      if (res.success) {
        if (res.data.length > 0) {
          // Tiene contactos, puede comenzar el proceso.
          setHasContacts(true);
          setLoadingScreen(false);
          getVerificationData();

          return;
        }

        // No tiene contactos.

        setHasContacts(false);
        setLoadingScreen(false);
        return;
      }
    });
  };

  const getVerificationData = async () => {
    setLoadingVerificationData(true);
    apiFetch("verification").then((res) => {
      if (res.success) {
        console.log(res, "Estos son los datos");
        setVerificationData(res.data);

        const data = res.data as IssuerData;

        setDisableForm(
          data.issuerVerificationStatusKey == "VERIFIED" ||
            data.issuerVerificationStatusKey == "PENDING_VERIFICATION"
            ? true
            : false
        );

        const status = data.issuerVerificationStatusKey;
        console.log(status, "Este es el estatus");
        setIssuerVerificationStatus(data.issuerVerificationStatusKey);

        if (status == "UNVERIFIED") {
          setAlertVariant("warning");
          setAlertTitle("Emisor sin verificar");
          setAlertMessage(
            "Para utilizar las funciones de la plataforma, debes ser verificado por " +
              "la administración. Para ello, completa el siguiente formulario. La administración revisará " +
              "tu solicitud y recibirás un correo electrónico con la respuesta. Así mismo, prodras consultar el estado " +
              "de tu solicitud en esta página."
          );

          setFullForm(false);
          setLoadingVerificationData(false);
          return;
        }

        if (status == "PENDING_OWNERSHIP_VERIFICATION") {
          setAlertTitle("Verificación de propiedad en proceso.");
          setAlertVariant("warning");
          setAlertMessage(
            `Hemos enviado un enlace de verificación de propiedad al correo ${res.legalEmail} el cual, es señalado en la cédula fiscal enviada.`
          );

          setLoadingVerificationData(false);
          setFullForm(true);
          return;
        }

        if (status == "OWNERSHIP_VERIFIED") {
          setAlertTitle("Verificación pendiente.");
          setAlertVariant("warning");
          setAlertMessage(
            "La verificación de propiedad fue realizada correctamente, completa el siguiente formulario para solicitar la verificación completa y terminar el proceso."
          );

          getIssuerLegalData();
          setLoadingVerificationData(false);
          setFullForm(true);

          setSecondStepInitialValues({
            legalName: res.data.legalName,
            zipCode: res.data.zipCode,
            country: res.data.country,
            state: res.data.state,
            city: res.data.city,
            suburb: res.data.suburbs,
            street: res.data.street,
            internalNumber: res.data.internalNumber,
            externalNumber: res.data.externalNumber,
            email: res.data.email,
            phone: res.data.phone,
            rfc: res.data.rfc,
            description: res.data.description,
            constitutiveAct: null,
            taxSituationStatement: null,
          });

          return;
        }

        if (status == "PENDING_VERIFICATION") {
          setSubmitedData(res.data);
          setAttachments(res.attachments);
          setLoadingVerificationData(false);

          setAlertVariant("warning");
          setAlertTitle("Solicitud de verificación en proceso");
          setAlertMessage(
            "Tu solicitud de verificación fue enviada exitosamente. La administración de la plataforma revisará la información y recibirás un correo con la respuesta."
          );

          return;
        }

        if (status == "VERIFIED") {
          setAlertTitle("Emisor verificado");
          setAlertVariant("success");
          setAlertMessage("");
        }

        if (status == "REJECTED") {
          setAlertTitle("Solicitud de verificación rechazada");
          setAlertVariant("danger");
          setAlertMessage("");
        }
      }
    });
  };

  const getIssuerLegalData = async () => {
    apiFetch("issuers/legal-data").then(async (res) => {
      console.log("Estos son los datos legales", res);
      if (!res.success) {
        return;
      }

      const legalData = res.data;
      const zipCodeParams = new URLSearchParams();
      zipCodeParams.append("zipCode", legalData.zipCode);

      let options = (await getSuburbsOptionList(
        res.data.zipCode,
        suburbs,
        setSuburbs,
        setLoadingSuburbs
      )) as any;

      setSuburbs(options.suburbs);
    });
  };

  const getSuburbs = async (zipCode: string, setFieldValue: any) => {
    setDisableSearchZipCode(true);
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

        console.log("Esto se ejecuta");

        setSuburbOptions(options);
        setCountryKey(countryKey + 1);

        if (setFieldValue != null || setFieldValue != undefined) {
          if (options.length > 0) {
            setFieldValue("country", "México");
            setFieldValue("city", res.data[0].d_mnpio);
            setFieldValue("state", res.data[0].d_estado);
          }
        }

        setDisableSuburbs(false);
        setDisableSearchZipCode(false);

        setSuburbsKey(suburbsKey + 1);

        setLoadingScreen(false);
        setDisableSuburbs(false);
        setLoadingVerificationData(false);
      }
    });
  };

  const submitVerificationData = async (values: any) => {
    console.log(values, "Estos son los valores");
  };

  return (
    <Fragment>
      {loadingScreen ? (
        <AdminTableSpinner />
      ) : (
        <Fragment>
          {/* -------------------------------- Breadcrum ------------------------------- */}
          <AdminPageHeader title="Verificación">
            <Breadcrumb className="float-sm-right">
              <Link className="breadcrumb-item" href={"../../admin"}>
                Inicio
              </Link>
              <Link className="breadcrumb-item" href={"../../admin/profile"}>
                Perfil
              </Link>
              <Breadcrumb.Item active>Verificación</Breadcrumb.Item>
            </Breadcrumb>
          </AdminPageHeader>

          {loadingScreen ? (
            <AdminTableSpinner />
          ) : (
            <Fragment>
              {/* -------------------- Alerta de estado de verificación -------------------- */}
              {loadingScreen ? null : hasContacts ? (
                <AdminAlert
                  title={alertTitle}
                  text={alertMessage}
                  variant={alertVariant}
                />
              ) : (
                <AdminAlert
                  variant="warning"
                  title="No cuentas con ningún contacto"
                  text="Para comenzar el proceso de verificación, es necesario que añadas por lo menos un contacto. Esto ayudará a agilizar el proceso de verificación por parte de la administración de SingularDocs."
                >
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="outline-warning"
                      onClick={() =>
                        router.push("../../admin/profile/contacts")
                      }
                    >
                      Añadir contactos
                    </Button>
                  </div>
                </AdminAlert>
              )}

              {/* ---------------------- Formulario o resumen de datos --------------------- */}
              {!hasContacts ? null : loadingVerificationData ? (
                <AdminTableSpinner />
              ) : !fullForm ? (
                <AdminCardContainer xs={12}>
                  <VerificationFirstStepForm
                    loadingForm={loadingForm}
                    setModalText={setModalText}
                    setShowModal={setShowModal}
                    setModalTitle={setModalTitle}
                    setLoadingForm={setLoadingForm}
                    setShowToast={setShowToast}
                    setToastTitle={setToastTitle}
                    setToastVariant={setToastVariant}
                    setToastMessage={setToastMessage}
                  />
                </AdminCardContainer>
              ) : issuerVerificationStatus == "PENDING_VERIFICATION" ||
                issuerVerificationStatus ==
                  "PENDING_OWNERSHIP_VERIFICATION" ? null : issuerVerificationStatus ==
                "OWNERSHIP_VERIFIED" ? (
                <AdminCardContainer xs={12}>
                  <VerificationSecondStepForm
                    loadingForm={loadingForm}
                    setLoadingForm={setLoadingForm}
                    initialValues={secondStepInitialValues}
                    loadingSuburbs={loadingSuburbs}
                    suburbs={suburbs}
                    disbaleForm={false}
                    disableSearchZipCode={false}
                    setDisableSuburbs={null}
                    setDisableSearchZipCode={null}
                    setSuburbs={setSuburbs}
                    setLoadingSuburbs={setLoadingSuburbs}
                    setSuburbOptions={setSuburbOptions}
                    getSuburbsOptionList={getSuburbsOptionList}
                    setShowToast={setShowToast}
                    setToastTitle={setToastTitle}
                    setToastVariant={setToastVariant}
                    setToastMessage={setToastMessage}
                    setShowModal={setShowModal}
                    setModalTitle={setModalTitle}
                    setModalText={setModalText}
                  />
                </AdminCardContainer>
              ) : (
                <AdminCardContainer xs={12}>
                  <SubmitedData
                    attachments={attachments}
                    submitedData={submitedData}
                  />
                </AdminCardContainer>
              )}
            </Fragment>
          )}
        </Fragment>
      )}

      <AdminModalJorge
        show={showModal}
        handleClose={null}
        title={modalTitle}
        showButtons={true}
        modalLoading={false}
        noSecondaryButton={true}
        primaryBtnVariant="primary"
        handleSubmit={() => {
          getContacts();
          setShowModal(false);
        }}
      >
        {modalText}
      </AdminModalJorge>

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

/*

  return (
    <Fragment>
      <AdminCardContainer xs={12}>
        {!hasContacts ? null : loadingVerificationData ? (
          <AdminTableSpinner />
        ) : !fullForm ? (
          <h1>Se carga el formulario pequeño</h1>
        ) : issuerVerificationStatus == "" ? (
          <h1>hola munfo</h1>
        ) : (
          
        )}
      </AdminCardContainer>
    </Fragment>
  );

*/

/*

          <Formik
            validateOnBlur={false}
            initialValues={initialValues}
            onSubmit={submitVerificationData}
            // validationSchema={verifyIssuerScheme}
          >
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
                getSuburbs={getSuburbs}
                suburbOptions={suburbOptios}
                setSuburbOptions={setSuburbOptions}
                disableSuburbs={disableSuburbs}
                setDisableSuburbs={setDisableSuburbs}
                countryKey={countryKey}
                suburbsKey={suburbsKey}
                setSuburbsKey={setSuburbsKey}
              />
            )}
          </Formik>

*/

/*


<Formik
            onSubmit={() => alert("Se hace submit")}
            initialValues={{ name: "", taxId: null }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <FormInput
                    md={6}
                    sm={12}
                    type="text"
                    name="name"
                    controlId="name"
                    label="Nombre comercial"
                    value={values.name}
                    errors={errors.name}
                    disabled={disbaleForm}
                    handleChange={handleChange}
                    placeholder="Nombre comercial"
                  />

                  <FormInputFile
                    md={6}
                    sm={12}
                    name="taxId"
                    controlId="taxId"
                    value={values.taxId}
                    errors={errors.taxId}
                    label="Cedula fiscal"
                    accept="application/pdf"
                    setFieldValue={setFieldValue}
                  />

                  
                </Row>
              </Form>
            )}
          </Formik>

*/

/*

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

*/
