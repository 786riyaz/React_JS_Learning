import { useFormStatus } from "react-dom";

function App() {
  const handleSubmission = async () => {
    console.log("Inside Handle Submission Function");
    await new Promise((res) => setTimeout(res, 5000));
    console.log("form submitted...");
  };

  const ConstomerForm = () => {
    const { pending } = useFormStatus();
    console.log("Pending ::", pending);

    return (
      <div>
        <input type="text" placeholder="Enter Your User Name" />
        <br />
        <input type="password" placeholder="Enter Your User Password" />
        <br />
        <button disabled={pending}>{pending?"Submitting...":"Submit"}</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Understanding use Form Status in React V19</h1>
      <br />
      <form action={handleSubmission}> <ConstomerForm /> </form>
    </div>
  );
}

export default App;