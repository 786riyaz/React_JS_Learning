function App() {
  let userName = "RiyazKhan";
  // userName = "";

  let userDetails = {
    Name: "RiyazKhan Pathan",
    Email: "moh.riyazpathan@gmail.com",
    Age: 25,
    Address: "Ahmedabad",
  };

  function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
      result = "Invalid Input";
    } else {
      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "sub":
          result = num1 - num2;
          break;
        case "mul":
          result = num1 * num2;
          break;
        case "div":
          result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
          break;
        default:
          result = "Unknown Operation";
      }
    }

    document.getElementById("result").value = result;
  }

  return (
    <div>
      <h1>{userName ? userName : "React"}'s Calculator</h1>
      <h4>{userDetails.Email}</h4>

      <input type="number" id="num1" placeholder="Enter first number" />

      <select id="operation">
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
        <option value="div">Divide</option>
      </select>

      <input type="number" id="num2" placeholder="Enter second number" />
      <br />
      <button onClick={calculate}>Calculate</button>
      <br />
      <input type="text" id="result" disabled placeholder="Result" />
    </div>
  );
}

export default App;