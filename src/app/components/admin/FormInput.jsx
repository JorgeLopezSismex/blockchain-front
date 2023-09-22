import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import { InputGroup } from "react-bootstrap";

export default function FormInput({
  label,
  type,
  name,
  placeholder,
  controlId,
  sm,
  md,
  value,
  handleChange,
  errors,
}){
    return(
      <Form.Group as={Col} sm={sm} md={md} controlId={controlId} className="mb-3">
        <Form.Label>{label}</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            isInvalid={!!errors}
          />
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    );
}