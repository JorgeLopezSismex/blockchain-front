import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";

import AdminOffcanvasItem from "./AdminOffcanvasItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EnvelopeFill } from "react-bootstrap-icons";

import Dropdown from "react-bootstrap/Dropdown";
import {
  faUser,
  faUsers,
  faBell,
  faUserGroup,
  faFileCircleCheck,
  faEnvelope,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const options = [
  { id: 1, title: "Emisores", icon: faUser, link: "/../admin/issuers" },
  { id: 2, title: "Miembros", icon: faUserGroup, link: "/../admin/members" },
  {
    id: 3,
    title: "Notificaciones",
    icon: faBell,
    link: "/../admin/notifications",
  },
  {
    id: 3,
    title: "Invitaciones",
    icon: faEnvelope,
    link: "/../admin/invitations",
  },
  {
    id: 4,
    title: "Certificados",
    icon: faFileCircleCheck,
    link: "/../admin/certificates",
  },
  { id: 5, title: "Bitácora", icon: faBook, link: "/../admin/log" },
];

export default function AdminNavBar() {
  const expand = "xs";
  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <Navbar
      key={expand}
      expand={expand}
      data-bs-theme="dark"
      style={{ backgroundColor: "#004A98" }}
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <Navbar.Toggle
            onClick={toggleOffCanvas}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Brand style={{ color: "white" }} href="#">
            Blockchain - Admin
          </Navbar.Brand>
        </div>

        <Dropdown className="dropdown-toggle" align={{ lg: "start" }}>
          <Dropdown.Toggle
            style={{ backgroundColor: "transparent", border: "none" }}
            className="d-flex align-items-center dropdown-toggle"
            split={true}
          >
            <div className="circle" id="dropdown-custom-components">
              <span className="initials">JA</span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">
              <Link href={"/../admin/profile"}>Perfil</Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Navbar.Offcanvas
          show={show}
          placement="start"
          onHide={toggleOffCanvas}
          style={{ backgroundColor: "#004A98" }}
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        >
          <Offcanvas.Header closeButton onHide={() => {}}>
            <Offcanvas.Title
              style={{ color: "white" }}
              id={`offcanvasNavbarLabel-expand-${expand}`}
            >
              Blockchain
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ paddingTop: "1rem", paddingLeft: "1.5rem" }}>
            <Nav>
              {options.map((item) => (
                <AdminOffcanvasItem
                  show={show}
                  icon={item.icon}
                  key={item.id}
                  link={item.link}
                  setShow={setShow}
                  title={item.title}
                />
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
