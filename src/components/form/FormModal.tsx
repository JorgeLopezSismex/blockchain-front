import Modal from "react-bootstrap/Modal";

export default function FormModal ({
  show,
  title,
  onHide,
  children,
} : {
  show: boolean;
  title: string;
  buttonText: string;
  onHide: () => void;
  children: React.ReactNode;
}){
  return(
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

          {children}

        </Modal.Body>
      </Modal>
    </>
  );
}