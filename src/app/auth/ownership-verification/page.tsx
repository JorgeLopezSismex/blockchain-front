"use client";

import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Fragment, useState, useEffect } from "react";

import { Col, Row, Form } from "react-bootstrap";

import AuthButton from "@/components/auth/AuthButton";
import AuthReCaptcha from "@/components/auth/AuthReCaptcha";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

import styles from "../styles.module.css";
import { apiFetch } from "@/helpers/api-fetch";

export default function OwnershipVerification() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [loadignReCaptcha, setLoadingReCaptcha] = useState(true);

  const [recaptchaKey, setRecaptchaKey] = useState(1);

  useEffect(() => {
    if (token == null || token == "" || token == undefined) {
      router.replace("expired");
      return;
    }

    apiFetch("authorization/validate-token", "POST", {
      token: token,
    }).then((res) => {
      if (!res.success) {
        router.replace("expired");
        return;
      }

      setLoading(false);
    });
  }, []);

  const verifyOwnership = async () => {
    alert("Se hace la verificación");
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

            <Formik
              onSubmit={verifyOwnership}
              initialValues={{ reCaptcha: "" }}
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
    </Fragment>
  );
}
