import useToggle from "./useToggle";

function App() {
  const [value, setValue] = useToggle(true);
  const [data, setData] = useToggle(true);
  console.log("Display Value ::", value, data);

  return (
    <>
      {value ? <h1>Understanding Custom Hooks</h1> : null}

      <button onClick={setValue}>Toggle Heading</button>
      <button onClick={() => setValue(false)}>Hide Heading</button>
      <button onClick={() => setValue(true)}>Show Heading</button>
      <hr />
      <hr />
      <hr />
      <button onClick={setValue}>Toggle Heading</button>
      <button onClick={() => setData(false)}>Hide Heading</button>
      <button onClick={() => setData(true)}>Show Heading</button>
      {data ? <h1>Understanding Custom Hooks</h1> : null}
    </>
  );
}

export default App;