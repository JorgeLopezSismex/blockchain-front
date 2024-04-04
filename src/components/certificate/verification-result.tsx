import { Fragment, useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function VerificationResult({
  verification,
  certificate,
  showReloadValidation,
  reloadValidation,
  margin,
}: {
  verification: any;
  certificate: any;
  showReloadValidation: boolean;
  reloadValidation: any;
  margin?: boolean;
}) {
  const [variant, setVariant] = useState("danger");
  const [resultString, setResultString] = useState("");
  const [loadingCertificate, setLoadingCertificate] = useState(true);

  useEffect(() => {
    // if (certificate != undefined) {
    //   setLoadingCertificate(false);
    //   setResultString(
    //     verification.message.description.replace(
    //       "${chain}",
    //       certificate.signers[0].chain.name
    //     )
    //   );
    // }

    if (verification.status == "success") {
      setVariant("success");
      setLoadingCertificate(false);

      if (verification.message != undefined) {
        setResultString(
          verification.message.description.replace(
            "${chain}",
            certificate.signers[0].chain.name
          )
        );
      }

      return;
    }

    if (verification.status == "failure") {
      setVariant("danger");
      setLoadingCertificate(false);

      setResultString(verification.message);

      return;
    }
  }, [resultString]);

  return (
    <Alert
      key={"success"}
      variant={variant}
      style={
        !margin
          ? { width: "100%", marginTop: 10 }
          : { width: "100%", margin: 10 }
      }
    >
      <h5>
        <FontAwesomeIcon
          size="1x"
          icon={faShieldHalved}
          style={{ marginRight: 10 }}
        />
        {verification.message == undefined
          ? "Error"
          : verification.message.label}
      </h5>
      <p>{resultString}</p>

      {!showReloadValidation ? null : (
        <Fragment>
          <hr />
          <p
            className="mb-0"
            style={{
              textAlign: "center",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => reloadValidation(true)}
          >
            Verificar nuevamente
          </p>
        </Fragment>
      )}
    </Alert>
  );
}
