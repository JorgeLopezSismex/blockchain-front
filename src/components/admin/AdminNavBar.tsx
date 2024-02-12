import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

import { DrawerOption } from "@/types/drawer";

export default function AdminNavBar({
  email,
  initials,
  options,
}: {
  email: string;
  initials: string;
  options: DrawerOption[];
}) {
  const expand = "xs";
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  const signOff = () => {
    localStorage.removeItem("token");
    router.replace("/auth/sign-in");
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
            style={{ marginRight: 15 }}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Brand style={{ color: "white" }} href="#">
            <img
              height="30"
              alt="React Bootstrap logo"
              src="/images/singulardocs_main.png"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </div>

        <div style={{ display: "inline-flex" }}>
          <div className="d-flex align-items-center">
            <p
              style={{ marginBottom: 0, marginRight: 15, color: "white" }}
              className="d-none d-sm-block"
            >
              {email}
            </p>
          </div>
          <Dropdown
            autoClose={true}
            align={{ xs: "start" }}
            show={showProfileOptions}
            className="dropdown-toggle"
            onClick={() => setShowProfileOptions(!showProfileOptions)}
          >
            <Dropdown.Toggle
              style={{ backgroundColor: "transparent", border: "none" }}
              className="d-flex align-items-center dropdown-toggle"
              split={true}
            >
              <div className="circle" id="dropdown-custom-components">
                <span className="initials">{initials}</span>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link
                data-rr-ui-dropdown-item
                className="dropdown-item"
                href={"/../admin/profile"}
                onClick={() => setShowProfileOptions(false)}
              >
                Perfil
              </Link>
              <p
                onClick={signOff}
                className="dropdown-item"
                style={{ margin: 0, cursor: "pointer" }}
              >
                Cerrar sesión
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </div>

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
              <img
                height="30"
                alt="React Bootstrap logo"
                src="/images/singulardocs_main.png"
                className="d-inline-block align-top"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ paddingTop: "1rem", paddingLeft: "1.5rem" }}>
            <Nav>
              {options.map((item) => (
                <AdminOffcanvasItem
                  show={show}
                  icon={item.icon}
                  link={item.link}
                  setShow={setShow}
                  title={item.title}
                  key={"navbar-item-" + item.id}
                />
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
