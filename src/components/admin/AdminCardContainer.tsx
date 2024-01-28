import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export default function AdminCardContainer({
  children,
  xs,
  marginBottom,
  noPadding,
}: {
  children: React.ReactNode;
  xs: number;
  marginBottom?: number;
  noPadding?: boolean;
}) {
  return (
    <Container fluid>
      <Row>
        <Col xs={xs} style={{ padding: noPadding != null ? 0 : "auto" }}>
          <Card
            style={{ marginBottom: marginBottom != null ? marginBottom : 60 }}
          >
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
