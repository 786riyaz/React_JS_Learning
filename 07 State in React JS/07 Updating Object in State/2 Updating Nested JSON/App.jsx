import { useState } from "react";
function App() {
  const [data, setData] = useState({
    name: "Riyaz",
    address: { city: "Ahmedabad", pincode: "380028" },
  });

  function updateName(event) {
    console.log("New Name ::", event.target.value);

    data.name = event.target.value;
    console.log("Updated Data ::", data);
    setData({ ...data });
  }
  function updatecity(newCity) {
    console.log("New City ::", newCity);

    // data.address.city = newCity;
    // console.log("Updated Data ::", data);
    // setData({...data});   // This will also works but not recommendate way to update a nested object

    setData({ ...data, address: { ...data.address, city: newCity } });
  }

  // We can also use following Method to prevent direct changes on data state
  function updateCity1(newCity) {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        city: newCity,
      },
    }));
  }
  return (
    <div>
      <h1>Understanding Object in State </h1>

      <input
        type="text"
        placeholder="Update Name"
        onChange={(event) => updateName(event)}
      />
      <input
        type="text"
        placeholder="Update City"
        onChange={(event) => updatecity(event.target.value)}
      />

      <h1>Name :: {data.name}</h1>
      <h1>City :: {data.address.city}</h1>
      <h1>Pincode :: {data.address.pincode}</h1>
    </div>
  );
}

export default App;
