import React from 'react';
import Select from 'react-select';

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

const options = [
  { value: 'colinia1', label: 'Colonia 1' },
  { value: 'colonia2', label: 'Colonia 2' },
  { value: 'colonia3', label: 'Colonia 3' }
]

export default function FormSelect({
  sm,
  md,
  label,
  isDisabled,
}){
    return(
        <Form.Group className="mb-3" as={Col} sm={sm} md={md}>
          <Form.Label>{label}</Form.Label>
          <Select 
            options={options}
            defaultValue={options[0]}
            classNamePrefix="Select"
            isClearable={true}
            isSearchable={true}
            isDisabled={isDisabled}
            name='suburb'
          />
        </Form.Group>
    );
}