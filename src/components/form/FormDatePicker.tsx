import { useState } from "react";



import "react-datepicker/dist/react-datepicker.css";

export default function FormDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}
