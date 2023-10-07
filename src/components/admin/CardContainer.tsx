import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Card style={{ marginBottom: 60 }}>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
