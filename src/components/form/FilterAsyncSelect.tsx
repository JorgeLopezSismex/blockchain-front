import { Fragment, useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import AsyncSelect from "react-select/async";

import { InputGroup } from "react-bootstrap";
import { StylesConfig } from "react-select";

export default function FilterAsyncSelect({
  sm,
  md,
  name,
  label,
  errors,
  disabled,
  placeholder,
  getOptions,
  defaultValueId,
  defaultValue,
  setFieldValue,
  value,
}: {
  sm: number;
  md: number;
  name: string;
  label: string;
  errors: any;
  disabled: boolean;
  placeholder: string;
  getOptions: any;
  defaultValueId?: any;
  defaultValue?: any;
  setFieldValue: any;
  value: string;
}) {
  const [selectedValue, setSelectedValue] = useState<{
    value: string;
    label: string;
  }>();

  const customStyles: StylesConfig<any> = {
    container: (styles) => ({ ...styles, width: "100%" }),
  };

  let borderColor = "none";
  if (errors) {
    borderColor = "#dc3545";
  }

  return (
    <Form.Group
      className="mb-3"
      as={Col}
      sm={sm}
      md={md}
      // style={{ zIndex: 10 }}
    >
      <Form.Label>{label}</Form.Label>

      <InputGroup>
        {/* <Form.Control>
          <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
        </Form.Control> */}
        <AsyncSelect
          id={name}
          name={name}
          cacheOptions
          defaultOptions
          isClearable={true}
          styles={customStyles}
          isDisabled={disabled}
          loadOptions={getOptions}
          placeholder={placeholder}
          value={!value ? null : selectedValue}
          noOptionsMessage={() => "Sin opciones"}
          defaultValue={
            defaultValueId == null && defaultValue == null
              ? null
              : { label: defaultValue, value: defaultValueId }
          }
          onChange={(e) => {
            setSelectedValue(e);
            setFieldValue(name, e?.value || "");
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
