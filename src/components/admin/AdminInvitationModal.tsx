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
  id,
  email,
  date,
  state
}:{
  show: boolean;
  onHide: () => void;
  title: string;
  id: string | number;
  email: string;
  date: string;
  state: string;
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
              <p><b>ID:</b>{id}</p>
              <p><b>Correo: </b>{email}</p>
              <p><b>Fecha: </b>{date}</p>
              <p><b>Estado: </b>{state}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} variant="outline-secondary">Cerrar</Button>
          {/* Debera re enviar la invitación --> Ahora hay que quitarlo */}
          <Form>
            <Button onClick={onHide}>Reenviar</Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}
