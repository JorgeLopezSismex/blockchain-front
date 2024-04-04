import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useState } from "react";

function OffcanvasExample() {
  let expand = "lg";
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log("window.scrollY", window.scrollY);
  };

  return (
    <Navbar
      key={expand}
      expand={expand}
      className="bg-body-tertiary mb-3"
      style={{ backgroundColor: "transparent" }}
    >
      <Container fluid>
        <Navbar.Brand>Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle onClick={() => setShowOffcanvas(true)} />
        <Offcanvas
          show={showOffcanvas}
          placement="end"
          onHide={() => {
            setShowOffcanvas(false);
            console.log(window.scrollY);
            window.scrollTo({
              top: window.scrollY,
            });
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Dropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
