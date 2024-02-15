import moment from "moment";
import { Fragment, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import AdminVerificationStep from "@/components/admin/AdminVerificationStep";
import AdminVerificationAlert from "@/components/admin/AdminVerificationAlert";

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function CertificateVerifier({
  loading,
  certificate,
  steps,
  verification,
}: {
  loading: boolean;
  certificate: any;
  steps: any;
  verification: any;
}) {
  const [localSteps, setLocalSteps] = useState([] as any);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (steps.length == localSteps.length) {
      setFinished(true);
      return;
    }

    const intervalId = setInterval(() => {
      if (steps.length == localSteps.length) {
        clearInterval(intervalId);
      }

      console.log(localSteps);
      setLocalSteps([...localSteps, steps[localSteps.length]]);
    }, 100);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearInterval(intervalId);
  }, [localSteps]);

  return (
    <Fragment>
      {Object.keys(certificate).length === 0 ? (
        <AdminTableSpinner />
      ) : (
        <Fragment>
          <h5>
            Emitido en {moment(certificate.issuedOn).format("MMMM D, YYYY")} por{" "}
            {certificate.issuer.name}
          </h5>

          {localSteps.map((step: any, index: number) =>
            step.status == "starting" ? null : step.status == "failure" ? (
              <AdminVerificationStep
                key={index}
                color="red"
                label={step.label}
                icon={faCircleXmark}
              />
            ) : step.status == "success" ? (
              <AdminVerificationStep
                key={index}
                color="green"
                label={step.label}
                icon={faCircleCheck}
              />
            ) : null
          )}

          {Object.keys(verification).length === 0 ? (
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
          ) : loading || finished == false ? (
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
                  <h5>Verificando certificado...</h5>
                </Col>
              </Row>
            </Fragment>
          ) : verification.status == "failure" ? (
            <AdminVerificationAlert
              variant="danger"
              description={verification.message}
              message="Error al verificar certificado"
            />
          ) : (
            <AdminVerificationAlert
              variant="success"
              message="Certificado verificado"
              description="Este es un certificado válido."
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
