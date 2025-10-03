import { useFormStatus } from "react-dom";

const CustomerForm = () => {
  const { pending } = useFormStatus();
  console.log("Pending ::", pending);

  return (
    <div>
      <input type="text" placeholder="Enter Your User Name" />
      <br />
      <input type="password" placeholder="Enter Your User Password" />
      <br />
      <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
    </div>
  );
};

export default CustomerForm;