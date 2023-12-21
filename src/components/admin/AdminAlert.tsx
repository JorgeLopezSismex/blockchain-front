import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

import Alert from "react-bootstrap/Alert";
import { Fragment } from "react";

export default function AdminAlert({
  variant,
  title,
  text,
  noPadding,
  children,
}: {
  variant: string;
  title: string;
  text: string;
  noPadding?: boolean;
  children?: React.ReactNode;
}) {
  const noPaddingStyle = {
    padding: 0,
  };

  const alertStyles = !noPadding ? {} : noPaddingStyle;

  return (
    <Container fluid>
      <Row>
        <Col xs={12} style={alertStyles}>
          <Alert variant={variant}>
            <Alert.Heading>{title}</Alert.Heading>
            <p>{text}</p>

            {children == null ? null : <hr />}

            {children}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
