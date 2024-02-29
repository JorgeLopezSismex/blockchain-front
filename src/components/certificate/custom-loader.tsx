import { Container, Row, Col } from "react-bootstrap";
import AdminTableSpinner from "@/components/admin/AdminTableSpinner";

export default function CustomLoader({ label }: { label: string }) {
  return (
    <Row style={{ marginTop: 30, marginBottom: 30 }}>
      <Col xs={12} className="d-flex justify-content-center">
        <AdminTableSpinner />
      </Col>
      <Col
        xs={12}
        style={{ marginTop: 10 }}
        className="d-flex justify-content-center"
      >
        <h5>{label}</h5>
      </Col>
    </Row>
  );
}
