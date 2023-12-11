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
  errors,
  placeholder,
  getOptions,
  defaultValueId,
  defaultValue,
  setFieldValue,
}: {
  sm: number;
  md: number;
  name: string;
  label: string;
  errors: any;
  placeholder: string;
  getOptions: any;
  defaultValueId?: any;
  defaultValue?: any;
  setFieldValue: any;
}) {
  const customStyles: StylesConfig<any> = {
    container: (styles) => ({ ...styles, width: "100%" }),
  };

  let borderColor = "none";
  if (errors) {
    borderColor = "#dc3545";
  }

  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md}>
      <Form.Label>{label}</Form.Label>

      <InputGroup>
        {/* <Form.Control>
          <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
        </Form.Control> */}
        <AsyncSelect
          id={name}
          isClearable={true}
          name={name}
          cacheOptions
          defaultOptions
          styles={customStyles}
          loadOptions={getOptions}
          placeholder={placeholder}
          defaultValue={
            defaultValueId == null && defaultValue == null
              ? null
              : { label: defaultValue, value: defaultValueId }
          }
          onChange={(e) => {
            if (e == null) {
              return setFieldValue(name, null);
            }

            return setFieldValue(name, e.value);
          }}
        />

        <div
          className="invalid-feedback"
          style={{ display: "contents", borderColor: "#dc3545 !important" }}
        >
          {errors}
        </div>
      </InputGroup>
    </Form.Group>
  );
}
