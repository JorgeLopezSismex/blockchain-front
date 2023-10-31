import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AdminModal({
  show,
  onHide,
  onClick,
  title,
  text,
  buttonText,
}:{
  show: boolean;
  onHide: () => void;
  onClick: () => void;
  title: string;
  text: string;
  buttonText: string
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
        <Modal.Body className="px-5">
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} variant="outline-secondary">Cerrar</Button>
          <Form>
            <Button onClick={onClick}>{buttonText}</Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}