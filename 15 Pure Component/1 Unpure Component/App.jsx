let count = 0;

function App() {
  return (
    <div>
      <h1>Understanding Unpure Component</h1>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

const Counter = () => {
  console.log("Counter Before :::",count);
  count = count + 1;
  console.log("Counter After :::",count);
  return <h1> Counter {count} </h1>;
};

export default App;