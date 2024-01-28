import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function AdminVerificationAlert({
  variant,
  message,
  description,
}: {
  variant: string;
  message: string;
  description: string;
}) {
  return (
    <Alert style={{ marginTop: "20px" }} variant={variant}>
      <Alert.Heading>
        <FontAwesomeIcon
          size="1x"
          icon={faShieldHalved}
          style={{ marginRight: 10 }}
        />
        {message}
      </Alert.Heading>
      <p>{description}</p>
    </Alert>
  );
}
