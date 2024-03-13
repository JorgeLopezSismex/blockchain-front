"use client";

import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Fragment, useState, useEffect } from "react";

import { Col, Row, Form } from "react-bootstrap";

import AuthButton from "@/components/auth/AuthButton";
import ActionToast from "@/components/main/ActionToast";
import AuthReCaptcha from "@/components/auth/AuthReCaptcha";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import styles from "../styles.module.css";
import { apiFetch } from "@/helpers/api-fetch";
import { verifyOwnershipSchema } from "@/validations/validation-schemas";

export default function OwnershipVerification() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [loadignReCaptcha, setLoadingReCaptcha] = useState(true);

  const [recaptchaKey, setRecaptchaKey] = useState(1);

  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("Título");
  const [toastMessage, setToastMessage] = useState("Mensaje.");
  const [toastVariant, setToastVariant] = useState("success");

  useEffect(() => {
    if (token == null || token == "" || token == undefined) {
      router.replace("expired");
      return;
    }

    apiFetch("verification/validate-ownership-token", "POST", {
      token: token,
    }).then((res) => {
      if (!res.success) {
        router.replace("expired");
        return;
      }

      setLoading(false);
    });
  }, []);

  const verifyOwnership = async (values: any) => {
    setLoading(true);

    values.token = token;
    apiFetch("verification/verify-ownership", "POST", values).then((res) => {
      setLoading(false);
      setShowToast(true);

      if (!res.success) {
        setRecaptchaKey(recaptchaKey + 1);

        setToastVariant("danger");
        setToastMessage(res.message);
        setToastTitle("Verificación de propiedad");

        return;
      }

      setToastVariant("success");
      setToastMessage(res.message);
      setToastTitle("Verificación de propiedad");

      return;
    });
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <img
          alt="SingularDocs logo"
          src="/images/singulardocs_logo.png"
          style={{ width: "60%", marginBottom: 20 }}
        />
      </div>

      <div className={styles.authFormTitle}>
        {loading ? (
          <Fragment>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
              <Col xs={12} className="d-flex justify-content-center">
                <AdminTableSpinner />
              </Col>
              <Col
                xs={12}
                style={{ marginTop: 10 }}
                className="d-flex justify-content-center"
              >
                <h5>Cargando...</h5>
              </Col>
            </Row>
          </Fragment>
        ) : (
          <Fragment>
            <div className="d-flex justify-content-center">
              <h3>Verificación de propiedad</h3>
            </div>

            <div className="d-flex justify-content-center">
              <p>
                Para continuar el proceso de verificación, es necesario
                completar la casilla ReCaptcha y hacer clic en el botón
                "Verificar propiedad".
              </p>
            </div>

            <Formik
              onSubmit={verifyOwnership}
              initialValues={{ reCaptcha: "" }}
              validationSchema={verifyOwnershipSchema}
            >
              {({ values, errors, setFieldValue, handleSubmit }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <AuthReCaptcha
                      key={recaptchaKey}
                      errors={errors.reCaptcha}
                      setFieldValue={setFieldValue}
                      setLoadingReCaptcha={setLoadingReCaptcha}
                    />
                  </Row>

                  <Row className="mb-3">
                    <AuthButton
                      loading={loading}
                      text={"Verificar propiedad"}
                    />
                  </Row>
                </Form>
              )}
            </Formik>
          </Fragment>
        )}
      </div>

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
