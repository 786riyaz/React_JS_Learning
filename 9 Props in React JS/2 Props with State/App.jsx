import User from "./UserComponent";

function App() {
  let employeeData = [
    {
      ID: 1,
      Name: "RiyazKhan Pathan",
      Age: "25",
      Email: "moh.riyazpathan@gmail.com",
      Technology: ["NodeJS", "MongoDB", "ExpressJS", "Angular", "Dot Net"],
    },
    {
      ID: 2,
      Name: "Arbaz Shaikh",
      Age: "24",
      Email: "arbazshaikh@gmail.com",
      Technology: ["Python", "Selenium", "BootStrap"],
    },
    {
      ID: 3,
      Name: "Femida Datre",
      Age: "25",
      Email: "femidaDatre@gmail.com",
      Technology: ["HTML", "CSS", "JS", "MS Office"],
    },
  ];
  return (
    <div>
      <h1>Understanding Props</h1>
    </div>
  );
}

export default App;
