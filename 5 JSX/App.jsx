import ProfilePicture from "./ProfilePicture";
import ToDo from "./ToDo";

function App() {
  let userName = "RiyazKhan";
  console.log("Inside App");
  return (
    <div>
      <h1>{userName}</h1>
      <ProfilePicture />
      <ToDo />
    </div>
  );
}

export default App;
