import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

export default function FormInput({
  sm,
  md,
  type,
  name,
  label,
  value,
  errors,
  controlId,
  placeholder,
  handleChange,
}) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          type={type}
          name={name}
          value={value}
          isInvalid={!!errors}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
