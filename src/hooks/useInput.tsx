import React, { useState, useEffect } from "react";

export default function useInput(defaultValue: any) {
  const [value, setValue] = useState("");

  const onChange = (evt: any) => setValue(evt.target.value);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);
  return { value, onChange };
}
