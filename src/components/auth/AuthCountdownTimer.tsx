import moment from "moment";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

export default function AuthCountdownTimer({
  setShowTimer,
  setDisableButton,
}: {
  setShowTimer: any;
  setDisableButton: any;
}) {
  const [remainingSeconds, setRemainingSeconds] = useState(30);

  useEffect(() => {
    let interval: any;
    interval = setInterval(() => {
      let disabledUntil = localStorage.getItem("disabledUntil");
      if (disabledUntil == "" || disabledUntil == null) {
        setShowTimer(false);
        clearInterval(interval);
        setDisableButton(false);

        localStorage.removeItem("disabledUntil");

        return;
      }

      const momentFuture = moment.unix(parseInt(disabledUntil));
      let momentNow = moment.unix(moment().unix());

      let differenceInSeconds = momentNow.diff(momentFuture, "seconds");
      if (differenceInSeconds === 0) {
        /* Termina la espera y se activa de nuevo el botón*/

        setShowTimer(false);
        clearInterval(interval);
        setDisableButton(false);

        localStorage.removeItem("disabledUntil");

        return;
      }

      setRemainingSeconds(Math.abs(differenceInSeconds));
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingSeconds]);

  if (remainingSeconds >= 30) {
    return (
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <p style={{ color: "#888" }}>Espera un momento...</p>
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col xs={12} className="d-flex justify-content-center">
        <p style={{ color: "#888" }}>
          Volver a solicitar cambio en:{" "}
          {`00:${("0" + remainingSeconds).slice(-2)}`}
        </p>
      </Col>
    </Row>
  );
}
