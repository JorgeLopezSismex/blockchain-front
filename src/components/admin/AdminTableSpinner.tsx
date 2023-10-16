import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

export default function AdminTableSpinner() {
  return (
    <Row>
      <Col xs={12} className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Col>
    </Row>
  );
}
