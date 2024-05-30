import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";

import { Fragment, useEffect, useState } from "react";
import VerificationStep from "./verification-step";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import VerificationResult from "@/components/certificate/verification-result";
import CustomLoader from "./custom-loader";

export default function ValidationModal({
  show,
  handleClose,
  certificate,
  steps,
  loading,
  verification,
}: {
  show: boolean;
  handleClose: any;
  certificate: any;
  steps: any;
  loading: boolean;
  verification: any;
}) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [localSteps, setLocalSteps] = useState([] as any);

  useEffect(() => {
    let interval: any;

    if (!loading) {
      if (index < steps.length) {
        interval = setInterval(() => {
          if (steps[index].status != "starting") {
            setLocalSteps([...localSteps, steps[index]]);
          }

          setIndex((prevIndex) => prevIndex + 1);
        }, 250);
      } else {
        setFinished(true);
      }
    } else {
      setIndex(0);
    }

    return () => clearInterval(interval);
  }, [loading, index]);

  const closeModal = () => {
    handleClose();
    setLocalSteps([]);
    setFinished(false);
  };

  return (
    <Modal show={show} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Verificación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {loading ? (
            <Fragment>
              <CustomLoader label="Cargando certificado..." />
            </Fragment>
          ) : (
            <Fragment>
              <Row>
                <Col xs={12} md={4} className="d-flex justify-content-center">
                  <img
                    alt=""
                    src={`${certificate.issuer.image}`}
                    style={{
                      marginBottom: 20,
                      maxWidth: "150px",
                      maxHeight: "150px",
                    }}
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h5>{certificate.name}</h5>
                  <h5>{certificate.recipientFullName}</h5>
                  <p>{`Emitido el ${moment(certificate.issuedOn).format(
                    "MMMM D, YYYY"
                  )} por ${certificate.issuer.name}`}</p>

                  {localSteps.map((step: any, index: number) => (
                    <VerificationStep key={index} step={step} />
                  ))}

                  {finished ? (
                    <VerificationResult
                      steps={steps}
                      reloadValidation={null}
                      certificate={certificate}
                      verification={verification}
                      showReloadValidation={false}
                    />
                  ) : (
                    <Fragment>
                      <CustomLoader label="Verificando certificado..." />
                    </Fragment>
                  )}
                </Col>
              </Row>

              {/* <Row className="justify-content-center">
                <Col xs={12} md={10} lg={6} className=""></Col>
              </Row>

              <Row className="justify-content-center">
                <Col xs={12} md={10} lg={6} className=""></Col>
              </Row> */}
            </Fragment>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
