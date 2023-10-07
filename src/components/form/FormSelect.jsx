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
}) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md}>
      <Form.Label>{label}</Form.Label>
      <Select
        id={name}
        name={name}
        options={options}
        isClearable={true}
        isSearchable={true}
        defaultValue={null}
        isDisabled={disabled}
        classNamePrefix="Select"
        defaultInputValue={defaultText}
      />
    </Form.Group>
  );
}
