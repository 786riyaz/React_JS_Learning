function App() {
  return (
    <div>
      <h1>Hello World !!!</h1>
      <h1>This is React Basics</h1>

      <Test/>
      <Number/>
    </div>
  );
}

function Test(){
  return (
    <div>
    <h1>Test String 1</h1>
    <h1>Test String 2 - {sum()}</h1>
    </div>
  )
}

function Number(){
  return (
    <h1> 123 </h1>
  )
}

function sum(){
  return 10+10
}

export default App;