import { Fragment } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";

export default function AdminModalJorge({
  show,
  title,
  primaryBtnText,
  primaryBtnVariant,
  secondaryBtnText,
  secondaryBtnVariant,
  formModal,
  handleSubmit,
  modalLoading,
  handleClose,
  children,
}: {
  show: boolean;
  title: string;
  primaryBtnText?: string;
  primaryBtnVariant?: string;
  secondaryBtnText?: string;
  secondaryBtnVariant?: string;
  formModal?: boolean;
  handleSubmit: any;
  modalLoading: boolean;
  handleClose: any;
  children: React.ReactNode;
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop={modalLoading ? "static" : true}
    >
      <Modal.Header closeButton={!modalLoading ? true : false}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleClose}
          disabled={modalLoading}
          variant={
            secondaryBtnVariant == null ? "secondary" : secondaryBtnVariant
          }
        >
          {secondaryBtnText == null ? "Cerrar" : secondaryBtnText}
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={modalLoading}
          type={formModal == null ? "button" : "submit"}
          variant={primaryBtnVariant == null ? "primary" : primaryBtnVariant}
        >
          {!modalLoading ? (
            primaryBtnText == null ? (
              "Aceptar"
            ) : (
              primaryBtnText
            )
          ) : (
            <Fragment>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span> Cargando...</span>
            </Fragment>
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
