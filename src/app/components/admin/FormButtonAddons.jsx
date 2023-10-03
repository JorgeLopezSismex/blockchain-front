import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";

export default function FormInput({
    sm,
    md,
    label,
    btntext,
    btnid,
    placeholder,
    id,
    name,
    value,
    handleChange,
    errors,
}) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={id}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
            placeholder={placeholder}
            aria-label={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            isInvalid={!!errors}
        />
        <Button variant="outline-secondary" id={btnid}>
            {btntext}
        </Button>
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}