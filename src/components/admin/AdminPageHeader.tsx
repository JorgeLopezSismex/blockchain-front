import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AdminPageHeader({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section style={{ padding: "15px 0.5rem" }}>
      <Container fluid>
        <Row className="mb-2">
          <Col sm={6}>
            <h1 style={{ fontSize: "1.8rem", margin: 0 }}>{title}</h1>
          </Col>
          <Col sm={6}>{children}</Col>
        </Row>
      </Container>
    </section>
  );
}
