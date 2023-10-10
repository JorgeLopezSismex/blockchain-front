import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

export default function AdminFilterContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Accordion defaultActiveKey="0" style={{ marginBottom: 20 }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filtros</Accordion.Header>
              <Accordion.Body>{children}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
