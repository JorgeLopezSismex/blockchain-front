import React from "react";
import Select from "react-select";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

export default function FormSelect({
  sm,
  md,
  name,
  label,
  options,
  disabled,
  defaultText,
  defaultValue,
}: any) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md}>
      <Form.Label>{label}</Form.Label>
      <Select
        id={name}
        name={name}
        options={options}
        isClearable={true}
        isSearchable={true}
        defaultValue={defaultValue}
        isDisabled={disabled}
        classNamePrefix="Select"
        placeholder="Selecciona una opción..."
        defaultInputValue={defaultText}
      />
    </Form.Group>
  );
}
