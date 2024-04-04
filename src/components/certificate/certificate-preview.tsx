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
              boxShadow: "0 1px 5px rgba(0,0,0,.55)",
              padding: 20,
              


              margin: "0 auto",
              minWidth: 600,
              // paddingBottom: 50,
              // paddingInline: 90,
              
              
              textAlign: "center",
              wordWrap: "break-word",
              border: "2px solid #ccc",
              boxSizing: "border-box",
              
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
