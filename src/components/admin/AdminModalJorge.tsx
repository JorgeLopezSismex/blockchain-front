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
  showButtons,
  children,
}: {
  show: boolean;
  title: string;
  primaryBtnText?: string;
  primaryBtnVariant?: string;
  secondaryBtnText?: string;
  secondaryBtnVariant?: string;
  formModal?: boolean;
  handleSubmit?: any;
  modalLoading: boolean;
  handleClose: any;
  showButtons?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop={!modalLoading ? true : "static"}
    >
      <Modal.Header closeButton={!modalLoading ? true : false}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {showButtons == true ? (
          <Fragment>
            {" "}
            <Button
              onClick={handleClose}
              disabled={modalLoading}
              variant={
                secondaryBtnVariant != null ? secondaryBtnVariant : "secondary"
              }
            >
              {secondaryBtnText != null ? secondaryBtnText : "Cerrar"}
            </Button>
            <Button
              onClick={handleSubmit != null ? handleSubmit : null}
              disabled={modalLoading}
              type={formModal != null ? "submit" : "button"}
              variant={
                primaryBtnVariant != null ? primaryBtnVariant : "primary"
              }
            >
              {!modalLoading ? (
                primaryBtnText != null ? (
                  primaryBtnText
                ) : (
                  "Aceptar"
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
          </Fragment>
        ) : (
          <Button onClick={handleClose}>Cerrar</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
