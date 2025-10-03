import { useState } from "react";

function App() {
  const [pending, setPending] = useState(false);

  const submitData = async () => {
    console.log("Submitting Data");
    setPending(true);
    await new Promise((res) => setTimeout(res, 5000));
    console.log("Submited Data");
    setPending(false);
  };

  return (
    <div>
      <h1>Understanding use Transition Hook</h1>

      <button onClick={submitData} disabled={pending}>
        Submit Data
      </button>
    </div>
  );
}

export default App;
