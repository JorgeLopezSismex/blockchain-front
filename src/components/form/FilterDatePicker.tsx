import moment, { Moment } from "moment";
import Datetime from "react-datetime";

import "moment/locale/es-mx";
import "react-datetime/css/react-datetime.css";

import Button from "react-bootstrap/Button";
import { Col, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function FilterDatePicker({
  sm,
  md,
  name,
  label,
  placeholder,
  setFieldValue,
  minDate,
  maxDate,
  value,
}: {
  sm: number;
  md: number;
  name: string;
  label: string;
  placeholder: string;
  setFieldValue: any;
  minDate?: Moment;
  maxDate?: Moment;
  value?: string;
}) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={name}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Datetime
          displayTimeZone=""
          locale="es-mx"
          dateFormat="DD/MM/YYYY"
          timeFormat={false}
          closeOnSelect={true}
          onChange={(e) => {
            if (!moment(moment(e), "DD/MM/YYYY").isValid()) {
              setFieldValue(name, "");
              return;
            }

            setFieldValue(name, moment(e).format("DD/MM/YYYY"));
            return;
          }}
          inputProps={{
            value,
            name: name,
            autoComplete: "off",
            placeholder: placeholder,
            onChange: (selectedOption) => {
              console.log(selectedOption);
              setFieldValue(name, selectedOption);
            },
            onKeyDown: (e) => {
              if (e.key != "Backspace") {
                return e.preventDefault();
              }
            },
          }}
          isValidDate={(current) => {
            let valid = true;

            if (minDate != undefined) {
              valid = current < minDate ? false : true;
            }

            if (maxDate != undefined) {
              valid = current > maxDate ? false : true;
            }

            return valid;
          }}
        />
      </InputGroup>
    </Form.Group>
  );
}
