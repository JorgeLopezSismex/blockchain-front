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

export default function FormSelect(){
    return(
        <>
          <Select options={options} />
        </>
    );
}