import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

import Alert from "react-bootstrap/Alert";

export default function AdminAlert({
  variant,
  title,
  text,
}: {
  variant: string;
  title: string;
  text: string;
}) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Alert variant={variant}>
            <Alert.Heading>{title}</Alert.Heading>
            <p>{text}</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
