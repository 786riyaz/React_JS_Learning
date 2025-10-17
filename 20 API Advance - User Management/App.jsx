import { NavLink, Route, Routes } from "react-router";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserEdit from "./UserEdit";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>API Understanding -- User Management </h1>
      <ul>
        <li><NavLink to="/">List</NavLink></li>
        <li><NavLink to="add">Add</NavLink></li>
      </ul>
      
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<UserAdd/>}/>
        <Route path="/edit/:id" element={<UserEdit/>}/>
      </Routes>
    </div>
  );
}
