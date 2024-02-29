import { Container, Row, Col } from "react-bootstrap";

export default function CertificatePreview({
  htmlString,
}: {
  htmlString: string;
}) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={10}>
          <div
            dangerouslySetInnerHTML={{ __html: htmlString }}
            style={{
              marginTop: 50,
              paddingTop: 40,
              marginBottom: 50,
              paddingBottom: 50,
              paddingInline: 90,
              border: "2px solid #ccc",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
