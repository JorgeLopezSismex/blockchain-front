import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function AdminNavBar() {
  const expand = "md";

  return (
    <Navbar
      bg="primary"
      key={expand}
      expand={expand}
      data-bs-theme="dark"
      // className="bg-body-tertiary mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#">Blockchain - Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Invitaciones</Nav.Link>
              <Nav.Link href="#action2">Certificados</Nav.Link>
              <NavDropdown
                title="jalopez@sismex.com"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">
                  <Link href="/admin/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    Mi perfil
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Membresias</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Cerrar sesión
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
