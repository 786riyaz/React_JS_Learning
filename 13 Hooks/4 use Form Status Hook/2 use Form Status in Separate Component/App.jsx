import CustomerForm from "./UserForm";

function App() {
  const handleSubmission = async () => {
    console.log("Inside Handle Submission Function");

    await new Promise((res) => setTimeout(res, 5000));

    console.log("form submitted...");
  };

  return (
    <div>
      <h1>Understanding use Form Status in React V19</h1>
      <br />

      <form action={handleSubmission}>
        <CustomerForm />
      </form>
    </div>
  );
}

export default App;