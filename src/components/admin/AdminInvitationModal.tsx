import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AdminInvitationModal({
  show,
  onHide,
  title,
  email,
  name,
  lastname,
  date,
  state,
  description,
  rejectReason
}:{
  show: boolean;
  onHide: () => void;
  title: string;
  email: string;
  name: string;
  lastname: string;
  date: string;
  state: string;
  description: string;
  rejectReason: string
}) {
  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="px-5">
              <p><b>Nombre: </b>{name} {lastname}</p>
              <p><b>Correo: </b>{email}</p>
              <p><b>Fecha: </b>{date}</p>
              <p><b>Estado: </b>{state}</p>
              <p><b>Descripción: </b>{description}</p>
              <p><b>Causa de rechazo: </b>{rejectReason}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} variant="outline-secondary">Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
