import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export default function AuthCountdownTimer({
  countdownTimestampMs,
}: {
  countdownTimestampMs: number;
}) {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  const updateRemainingTime = (countdown: number) => {
    console.log("Hola mundo");
  };

  return (
    <Row className="mb-3 d-flex justify-content-center">
      {`Reenviar solicitud en 00:${remainingSeconds}`}
    </Row>
  );
}
