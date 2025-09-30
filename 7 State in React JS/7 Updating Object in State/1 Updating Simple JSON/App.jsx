import { useState } from "react";
function App() {
  const [data, setData] = useState({
    name: "Riyaz",
    address: { city: "Ahmedabad", pincode: "380028" },
  });

  function updateName(event) {
    console.log("New Name ::", event.target.value);
    // Method 1 :: not ideal
    // setData({ name: event.target.value }); // This method will erase all the data except name

    // Method 2 :: not ideal
    // data.name = event.target.value;
    // console.log("Updated Data ::", data);
    // setData(data);

    // Method 3 :: Ideal
    // data.name = event.target.value;
    // console.log("Updated Data ::", data);
    // setData({...data});

    // Method 4 :: Ideal
    let tempData = data;
    tempData.name = event.target.value;
    console.log("Updated Data ::", tempData);
    setData({ ...tempData });
  }
  return (
    <div>
      <h1>Understanding Object in State </h1>

      <input type="text" placeholder="Update Name" onChange={(event) => updateName(event)} />

      <h1>Name :: {data.name}</h1>
      <h1>City :: {data.address.city}</h1>
      <h1>Pincode :: {data.address.pincode}</h1>
    </div>
  );
}

export default App;