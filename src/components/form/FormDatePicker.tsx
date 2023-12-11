import moment, { Moment } from "moment";
import Datetime from "react-datetime";

import "moment/locale/es-mx";
import "react-datetime/css/react-datetime.css";

import { Col, Form, InputGroup } from "react-bootstrap";

export default function FormDatePicker({
  sm,
  md,
  name,
  label,
  placeholder,
  setFieldValue,
  minDate,
  maxDate,
}: {
  sm: number;
  md: number;
  name: string;
  label: string;
  placeholder: string;
  setFieldValue: any;
  minDate?: Moment;
  maxDate?: Moment;
}) {
  return (
    <Form.Group className="mb-3" as={Col} sm={sm} md={md} controlId={name}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Datetime
          displayTimeZone=""
          locale="es-mx"
          timeFormat={false}
          closeOnSelect={true}
          onChange={(e) => {
            setFieldValue(name, moment(e).toISOString());
          }}
          inputProps={{
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
