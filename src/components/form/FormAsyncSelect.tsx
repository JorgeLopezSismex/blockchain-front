import { Fragment, useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import AsyncSelect from "react-select/async";

export default function FormAsyncSelect({
  sm,
  md,
  label,
  name,
  loadOptions,
  setFieldValue,
}: {
  sm: number;
  md: number;
  label: string;
  name: string;
  loadOptions: any;
  setFieldValue: any;
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md}>
      <Form.Label>{label}</Form.Label>
      <AsyncSelect
        id={name}
        name={name}
        isClearable
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={(option) => {
          setFieldValue({ name }, option.value);
          return setSelectedOption(option);
        }}
      />
    </Form.Group>
  );
}
