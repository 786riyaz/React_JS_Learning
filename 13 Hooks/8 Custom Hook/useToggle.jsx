import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    if (typeof val != "boolean") {
      console.log("in the if block");
      console.log(val);
      setValue(!value);
    } else {
      console.log("in the else block");
      console.log(val);
      setValue(val);
    }
  }
  return [value, toggleValue];
};

export default useToggle;
