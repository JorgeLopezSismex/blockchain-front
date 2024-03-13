import "bootstrap/dist/css/bootstrap.css";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AuthPasswordInput({
  type,
  label,
  name,
  placeholder,
  value,
  handleChange,
  errors,
}: any) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form.Group as={Col} md="12" controlId={name} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          name={name}
          value={value}
          isInvalid={!!errors}
          placeholder={placeholder}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
        />

        <Button
          variant="primary"
          id={`${name}-button`}
          onClick={() => setShowPassword(!showPassword)}
        >
          <FontAwesomeIcon icon={faEye} />
        </Button>

        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}
