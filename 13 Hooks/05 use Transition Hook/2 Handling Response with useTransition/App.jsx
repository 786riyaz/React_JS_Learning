import { useTransition } from "react";

function App() {
  const [pending, startTransition] = useTransition();

  const submitData = async () => {
    console.log("Submitting Data");
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
      console.log("Submitted Data");
    });
  };

  return (
    <div>
      <h1>Understanding use Transition Hook</h1>

      {!pending ? (
        <button onClick={submitData} disabled={pending}>
          Submit Data
        </button>
      ) : null}

      <h1> {pending ? "Loading..." : null} </h1>
      {pending ? <img src="src\Loading_icon.gif" alt="" /> : null}
    </div>
  );
}

export default App;