export default function CertificateList() {
  return <h1>Certificados</h1>;
}

// "use client";

// import moment from "moment";
// import Link from "next/link";
// import { Formik } from "formik";
// import { Fragment, useState, useEffect } from "react";

// import { Certificate } from "@blockcerts/cert-verifier-js";

// import Row from "react-bootstrap/Row";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Breadcrumb from "react-bootstrap/Breadcrumb";

// import AdminTable from "@/components/admin/AdminTable";
// import FormDatePicker from "@/components/form/FormDatePicker";
// import FormAsyncSelect from "@/components/form/FormAsyncSelect";
// import AdminModalJorge from "@/components/admin/AdminModalJorge";
// import AdminPageHeader from "@/components/admin/AdminPageHeader";
// import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
// import AdminCardContainer from "@/components/admin/AdminCardContainer";
// import AdminFilterContainer from "@/components/admin/AdminFilterContainer";
// import AdminFormSubmitButton from "@/components/admin/AdminFormSubmitButton";

// import { apiFetch } from "@/helpers/api-fetch";
// import { CertificateData } from "@/types/certificates";
// import { CertificatesPermissionsData } from "@/types/certificates";
// import certificatesTableColums from "@/table-columns/certificates";
// import { getIssuerOptionList } from "@/utils/select-options/issuers";
// import { getTemplatesOptionList } from "@/utils/select-options/templates";

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import ButtonMUI from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";

// const steps = [
//   {
//     label: "Select campaign settings",
//     description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: "Create an ad group",
//     description:
//       "An ad group contains one or more ads which target a shared set of keywords.",
//   },
//   {
//     label: "Create an ad",
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
// ];

// export default function CertificateList() {
//   const [loadingScreen, setLoadingScreen] = useState(true);
//   const [loadingCertificates, setLoadingCertificates] = useState(true);

//   const [permissions, setPermissions] = useState(
//     {} as CertificatesPermissionsData
//   );

//   const [certificates, setCertificates] = useState([]);
//   const [selectedCertificate, setSelectedCertificate] = useState(
//     {} as CertificateData
//   );

//   const [showVerifyModal, setShowVerifyModal] = useState(false);

//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   useEffect(() => {
//     // Permisos
//     const permissiosnParams = new URLSearchParams();
//     permissiosnParams.append("module", "CERTIFICATES_MODULE");
//     apiFetch(`permissions?${permissiosnParams.toString()}`).then((res) => {
//       if (!res.success) {
//         return alert("Ocurrió un error.");
//       }

//       setPermissions(res.data);
//       if (!res.data.LIST_CERTIFICATE) {
//         return alert("No tienes permisos para entrar a esta pantalla.");
//       }

//       test();

//       getCertificates();
//     });
//   }, []);

//   const test = async () => {
//     /***/

//     var request = new XMLHttpRequest();
//     request.open(
//       "GET",
//       "http://localhost:3000/testing/certificate.json",
//       false
//     );
//     request.send(null);
//     var my_JSON_object = JSON.parse(request.responseText);

//     let certificate = new Certificate(my_JSON_object, { locale: "es-ES" });
//     await certificate.init();

//     console.log(certificate);

//     /***/
//   };

//   const getCertificates = async () => {
//     apiFetch("certificates").then((res) => {
//       setLoadingCertificates(false);
//       console.log("estos son los certificados", res);
//       if (!res.success) {
//         alert("Ocurrió un error al cargar los certificados");
//         return;
//       }

//       setCertificates(res.data);
//       setLoadingCertificates(false);
//       setLoadingScreen(false);
//     });
//   };

//   const getFilteredCertificates = async (values: any) => {
//     const certificatesParams = new URLSearchParams();
//     if (values.issuerId != null) {
//       certificatesParams.append("issuerId", values.issuerId);
//     }

//     if (values.templateId != null) {
//       certificatesParams.append("templateId", values.templateId);
//     }

//     if (values.createdAtFrom != null) {
//       certificatesParams.append("createdAtFrom", values.createdAtFrom);
//     }

//     if (values.createdAtTo != null) {
//       certificatesParams.append("createdAtTo", values.createdAtTo);
//     }

//     setLoadingCertificates(true);
//     apiFetch(`certificates?${certificatesParams.toString()}`).then((res) => {
//       if (res.success) {
//         setCertificates(res.data);
//         setLoadingScreen(false);
//         setLoadingCertificates(false);
//       }
//     });
//   };

//   return loadingScreen ? (
//     <AdminTableSpinner />
//   ) : (
//     <Fragment>
//       <AdminPageHeader title="Certificados">
//         <Breadcrumb className="float-sm-right">
//           <Link className="breadcrumb-item" href={"../admin"}>
//             Inicio
//           </Link>
//           <Breadcrumb.Item active>Certificados</Breadcrumb.Item>
//         </Breadcrumb>
//       </AdminPageHeader>

//       <AdminFilterContainer>
//         <Formik
//           onSubmit={getFilteredCertificates}
//           initialValues={{
//             issuerId: null,
//             templateId: null,
//             createdAtFrom: null,
//             createdAtTo: null,
//           }}
//         >
//           {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
//             <Form noValidate onSubmit={handleSubmit}>
//               <Row className="mb-3">
//                 <FormAsyncSelect
//                   md={6}
//                   sm={12}
//                   errors={null}
//                   label="Emisor"
//                   name="issuerId"
//                   disabled={false}
//                   setFieldValue={setFieldValue}
//                   placeholder="Selecciona un emisor"
//                   getOptions={() => getIssuerOptionList()}
//                 />

//                 <FormAsyncSelect
//                   md={6}
//                   sm={12}
//                   errors={null}
//                   disabled={false}
//                   label="Plantilla"
//                   name="templateId"
//                   setFieldValue={setFieldValue}
//                   placeholder="Selecciona una plantilla"
//                   getOptions={() => getTemplatesOptionList()}
//                 />

//                 <FormDatePicker
//                   md={6}
//                   sm={12}
//                   name="createdAtFrom"
//                   setFieldValue={setFieldValue}
//                   placeholder="Selecciona una fecha"
//                   maxDate={moment(values.createdAtTo)}
//                   label="Fecha de creación del certificado mínima"
//                 />

//                 <FormDatePicker
//                   md={6}
//                   sm={12}
//                   name="createdAtTo"
//                   setFieldValue={setFieldValue}
//                   placeholder="Selecciona una fecha"
//                   minDate={moment(values.createdAtFrom)}
//                   label="Fecha de creación del certificado máxima"
//                 />

//                 <div className="d-flex justify-content-end">
//                   <AdminFormSubmitButton
//                     label="Filtrar"
//                     loading={loadingCertificates}
//                   />
//                 </div>
//               </Row>
//             </Form>
//           )}
//         </Formik>
//       </AdminFilterContainer>

//       <AdminCardContainer xs={12}>
//         {loadingCertificates ? (
//           <AdminTableSpinner />
//         ) : (
//           <AdminTable
//             defaultData={certificates}
//             columns={certificatesTableColums(
//               permissions,
//               setSelectedCertificate,
//               setShowVerifyModal,
//               null
//             )}
//           >
//             {!permissions.CREATE_CERTIFICATE ? null : (
//               <Link href={"/admin/certificates/create"}>
//                 <Button variant="primary">Nuevo</Button>
//               </Link>
//             )}
//           </AdminTable>
//         )}
//       </AdminCardContainer>

//       <AdminModalJorge
//         title="Verificar"
//         show={showVerifyModal}
//         showButtons={true}
//         handleSubmit={() => setShowVerifyModal(false)}
//         modalLoading={false}
//         handleClose={() => setShowVerifyModal(false)}
//       >
//         <Box sx={{ maxWidth: 400 }}>
//           <Stepper activeStep={activeStep} orientation="vertical">
//             {steps.map((step, index) => (
//               <Step key={step.label}>
//                 <StepLabel
//                   optional={
//                     index === 2 ? (
//                       <Typography variant="caption">Last step</Typography>
//                     ) : null
//                   }
//                 >
//                   {step.label}
//                 </StepLabel>
//                 <StepContent>
//                   <Typography>{step.description}</Typography>
//                   <Box sx={{ mb: 2 }}>
//                     <div>
//                       <ButtonMUI
//                         variant="contained"
//                         onClick={handleNext}
//                         sx={{ mt: 1, mr: 1 }}
//                       >
//                         {index === steps.length - 1 ? "Finish" : "Continue"}
//                       </ButtonMUI>
//                       <ButtonMUI
//                         disabled={index === 0}
//                         onClick={handleBack}
//                         sx={{ mt: 1, mr: 1 }}
//                       >
//                         Back
//                       </ButtonMUI>
//                     </div>
//                   </Box>
//                 </StepContent>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length && (
//             <Paper square elevation={0} sx={{ p: 3 }}>
//               <Typography>
//                 All steps completed - you&apos;re finished
//               </Typography>
//               <ButtonMUI onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//                 Reset
//               </ButtonMUI>
//             </Paper>
//           )}
//         </Box>
//       </AdminModalJorge>
//     </Fragment>
//   );
// }
