import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function AdminPageHeader({
  children,
  title,
  backRoute,
}: {
  children: React.ReactNode;
  title: any;
  backRoute?: string;
}) {
  const router = useRouter();
  return (
    <section style={{ padding: "15px 0.5rem" }}>
      <Container fluid>
        <Row className="mb-2">
          <Col sm={6} className="d-flex align-items-center">
            {backRoute == null ? null : (
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                style={{
                  float: "left",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  marginRight: "0.5rem",
                }}
                onClick={() => {
                  router.push("../members");
                }}
              />
            )}
            <h1 style={{ fontSize: "1.8rem", margin: 0 }}>{title}</h1>
          </Col>
          <Col sm={6}>{children}</Col>
        </Row>
      </Container>
    </section>
  );
}
