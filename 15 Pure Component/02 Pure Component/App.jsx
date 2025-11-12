let count = 0;

function App() {
  return (
    <div>
      <h1>Understanding Unpure Component</h1>
      <Counter count={1}/>
      <Counter count={2}/>
      <Counter count={3}/>
    </div>
  );
}

const Counter = ({count}) => {
  return <h1> Counter {count} </h1>;
};

export default App;