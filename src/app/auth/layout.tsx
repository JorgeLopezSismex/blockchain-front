"use client";

import "bootstrap/dist/css/bootstrap.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function AuthLayout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col className="d-none d-md-block">Hola mundo1</Col>
        <Col md={8} lg={6}>
          <div className="login d-flex align-items-center py-5">
            <Container>
              <Row>
                <div className="col-md-9 col-lg-8 mx-auto">{children}</div>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>

    // <Container className="d-flex align-items-center justify-content-center">
    //   <Row>
    //     <Col
    //       xs={6}
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         padding: "68px 100px",
    //         backgroundColor: "orange",
    //       }}
    //     >
    //       {children}
    //     </Col>
    //     <Col xs={6} className="px-0 d-none d-sm-block">
    //       <Image
    //         style={{
    //           width: "100%",
    //           height: "100vh",
    //           objectFit: "cover",
    //           objectPosition: "left",
    //         }}
    //         src="https://demo.bootstrapdash.com/login-template-free-1/assets/images/login.jpg"
    //       ></Image>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
