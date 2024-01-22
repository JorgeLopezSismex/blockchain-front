import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";

export default function FormInputButtonAddon({
  sm,
  md,
  id,
  name,
  value,
  btnId,
  label,
  errors,
  btnText,
  disbaleButton,
  handleClick,
  placeholder,
  handleChange,
}: any) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={id}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Button
          id={btnId}
          type="button"
          onClick={handleClick}
          disabled={disbaleButton}
          variant="outline-secondary"
        >
          {btnText}
        </Button>
        <Form.Control
          name={name}
          value={value}
          isInvalid={!!errors}
          onChange={handleChange}
          aria-label={placeholder}
          placeholder={placeholder}
        />
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
