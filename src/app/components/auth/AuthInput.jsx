import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { InputGroup } from "react-bootstrap";

export default function AuthInput({
  type,
  label,
  name,
  value,
  handleChange,
  errors,
}) {
  return (
    <Form.Group as={Col} md="12" controlId="email">
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          isInvalid={!!errors}
        />

        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
