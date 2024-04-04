"use client";

import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import AdminTableSpinner from "@/components/admin/AdminTableSpinner";
import ValidationModal from "@/components/certificate/validation-modal";
import CertificateData from "@/components/certificate/certificate-data";
import CertificatePreview from "@/components/certificate/certificate-preview";
import VerificationResult from "@/components/certificate/verification-result";

import { TypeH1 } from "react-bootstrap-icons";
import CustomLoader from "@/components/certificate/custom-loader";
import { apiFetch } from "@/helpers/api-fetch";

export default function Certificate() {
  const expand = "xs";

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [steps, setSteps] = useState({} as any);
  const [certificate, setCertificate] = useState({} as any);
  const [verification, setVerification] = useState({} as any);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    getCertificateData();
  }, []);

  const getCertificateData = async () => {
    setLoading(true);

    apiFetch(`certificates/by-verification-id-sdsfsfsd/${id}`).then((res) => {
      if (!res.success) {
        return null;
      }

      getVerification(res.data);
    });
  };

  const getVerification = async (certificateUrl: string) => {
    setLoading(true);
    setShowModal(true);

    fetch("http://68.178.207.49:8113/certificate-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        certificatePath: certificateUrl,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        if (!json.success) {
          return null;
        }

        setSteps(json.data.steps);
        setCertificate(json.data.certificate);
        setVerification(json.data.verification);

        console.log(json);

        setLoading(false);
      });
  };

  return (
    <Fragment>
      <Navbar
        key={expand}
        expand={expand}
        data-bs-theme="dark"
        style={{ backgroundColor: "#004A98" }}
      >
        <Container>
          <Navbar.Brand style={{ color: "white" }} href="/">
            <img
              height="30"
              alt="React Bootstrap logo"
              src="/images/singulardocs_main.png"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        {loading ? (
          <Row>
            <Col
              xs={12}
              className="d-flex justify-content-center"
              style={{ marginTop: 20 }}
            >
              <AdminTableSpinner />
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <h1>Próximamente...</h1>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={12} md={4}>
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <VerificationResult
                    margin={true}
                    certificate={certificate}
                    verification={verification}
                    showReloadValidation={true}
                    reloadValidation={getCertificateData}
                  />
                </Col>
                <Col xs={12} className="d-md-none">
                  {/* <CertificatePreview
                    htmlString={certificate.certificateJson.displayHtml}
                  /> */}

                  <section className="fullscreen-certificate-content">
                    <div className="fullscreen-certificate-certificate certificate-fixed-width">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: certificate.certificateJson.displayHtml,
                        }}
                      />
                    </div>
                  </section>
                </Col>
                <Col xs={12}>
                  <CertificateData certificate={certificate}></CertificateData>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={8} className="d-none d-md-block">
              {/* <CertificatePreview
                htmlString={certificate.certificateJson.displayHtml}
              /> */}

              <section className="fullscreen-certificate-content">
                <div className="fullscreen-certificate-certificate certificate-fixed-width">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: certificate.certificateJson.displayHtml,
                    }}
                  />
                </div>
              </section>
            </Col>
          </Row>
        )}
      </Container>

      <ValidationModal
        steps={steps}
        show={showModal}
        loading={loading}
        handleClose={handleClose}
        certificate={certificate}
        verification={verification}
      />
    </Fragment>
  );
}

/*

<section className="fullscreen-certificate-content">
            <div className="fullscreen-certificate-certificate certificate-fixed-width">
              <div
                dangerouslySetInnerHTML={{
                  __html: certificate.certificateJson.displayHtml,
                }}
              />
            </div>
          </section>


*/
