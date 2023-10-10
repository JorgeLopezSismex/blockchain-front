import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export default function AdminCardContainer({
  children,
  xs,
}: {
  children: React.ReactNode;
  xs: number;
}) {
  return (
    <Container fluid>
      <Row>
        <Col xs={xs}>
          <Card style={{ marginBottom: 60 }}>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
