import { Fragment, useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import AsyncSelect from "react-select/async";

import { InputGroup } from "react-bootstrap";
import { StylesConfig } from "react-select";

export default function FormAsyncSelect({
  sm,
  md,
  name,
  label,
  placeholder,
  getOptions,
  setFieldValue,
}: {
  sm: number;
  md: number;
  name: string;
  label: string;
  placeholder: string;
  getOptions: any;
  setFieldValue: any;
}) {
  const customStyles: StylesConfig<any> = {
    container: (styles) => ({ ...styles, width: "100%" }),
  };

  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <AsyncSelect
          id={name}
          name={name}
          cacheOptions
          defaultOptions
          styles={customStyles}
          loadOptions={getOptions}
          placeholder={placeholder}
          onChange={(e) => {
            setFieldValue(name, e.value);
          }}
        />
      </InputGroup>
    </Form.Group>
  );
}
