import { useState } from "react";
import Technology from "./Technology";

function User({ data }) {
  const [display, hideDisplay] = useState(true);
  const [technology, addTechnology] = useState(data?.Technology);

function updateTech() {
  console.log("Before Adding ::", technology);
  const updatedTech = [...technology, "Basic of Computer"]; // new array
  console.log("After Adding ::", updatedTech);
  addTechnology(updatedTech); // React sees a new reference → re-render
}

  if (data && display) {
    console.log("Data Received :: ", data);
    console.log("Received Name :: ", data.Name);
    console.log("Received Age :: ", data.Age);
    console.log("Received Email :: ", data.Email);
    console.log("Received Technology :: ", data.Technology);

    return (
      <div>
        <hr />
        <h3>
          {data.Name} --- {data.Age} --- {data.Email}
        </h3>
        <h3>
          <Technology data={technology} />
        </h3>
        <button onClick={() => {hideDisplay(false)}}>
          Delete Record
        </button>
        <button onClick={() => {updateTech(technology)}}>
          Add "Basic of Computer"
        </button>
      </div>
    );
  }
}
export default User;