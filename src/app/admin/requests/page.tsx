"use client";
//Página de solicitudes ☆⌒(*＾-゜)v

import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Fragment } from "react";

import Card from "react-bootstrap/Card";
import RequestTable from "../../components/admin/RequestTable";

export default function Requests(){
    return(
        <Fragment>
            <Container fluid>
                <Row className="mb-2">
                    <Col sm={6}>
                        <h1 style={{fontSize:"1.8rem", margin:0}}>Solicitudes</h1>
                    </Col>
                    <Col sm={6}>
                        <Breadcrumb>
                          <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
                          <Breadcrumb.Item active>Documentos</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <section>
                <Container fluid>
                    <Row xs={12}>
                        <Card style={{marginBottom: 60}}>
                            <Card.Body>
                                <div>
                                    <RequestTable/>
                                </div>
                            </Card.Body>
                        </Card>    
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}