import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

export const DateTime = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <input onChange={onChange} value={value} />
    </div>
  );
};
