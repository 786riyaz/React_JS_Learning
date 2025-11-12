import { forwardRef } from "react";
const UserInput = (prop, ref ) => {
  return (
    <div>
      <input ref={ref} type="text" placeholder="Enter Your User Name" />
      <br />
    </div>
  );
};

export default forwardRef(UserInput);