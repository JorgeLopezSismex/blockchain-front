import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function MainNav(){
    return(
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">¿Quienes somos?</Nav.Link>
              <Nav.Link href="#features">Beneficios</Nav.Link>
              <Nav.Link href="#pricing">Clientes</Nav.Link>
              <Nav.Link href="#pricing">Planes</Nav.Link>
              <Button variant="outline-primary">Ingresar</Button>{' '}

              
            </Nav>
          </Container>
        </Navbar>
    );
}

export default MainNav;