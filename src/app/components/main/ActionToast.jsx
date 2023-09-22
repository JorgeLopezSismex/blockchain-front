import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

export default function ActionToast({
  show,
  variant,
  title,
  message,
  onClose,
  delay
}) {
  return (
    <ToastContainer
      className="p-3"
      style={{ zIndex: 1 }}
      position="bottom-start"
    >
      <Toast bg={variant} show={show} onClose={onClose} delay={delay} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body style={{ color: "white" }}>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
