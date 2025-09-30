import GreenWrapper from "./GreenWrapper";

function App() {
  return (
    <div>
      <h1>Understanding JSX Props</h1>
      <GreenWrapper>Test 1</GreenWrapper>
      <GreenWrapper>Test 2</GreenWrapper>

      <GreenWrapper>
        <h1>Test 3</h1>
        <h3>Test 4</h3>
        Test 5
      </GreenWrapper>

      <GreenWrapper>
        <span style={{color:"yellow"}}>Test 6</span>
      </GreenWrapper>
    </div>
  );
}

export default App;
