import { NavLink, Outlet } from "react-router";
import './header.css';

export default function Navbar() {
  return (<>
    <div className="header">
      <NavLink className="logo" to="/"><h2>Logo</h2></NavLink>
      <ul className="nav-links">
        <li><NavLink className="link" to="/">Home</NavLink></li>
        <li><NavLink className="link" to="/en/user/about">About</NavLink></li>
        <li><NavLink className="link" to="/college">College</NavLink></li>
        <li><NavLink className="link" to="/users">Users</NavLink></li>
        <li><NavLink className="link" to="/users/list">List</NavLink></li>
        <li><NavLink className="link" to="/en/user/login">Login</NavLink></li>
      </ul>
    </div>
    <Outlet/>
    {/* Outlet is use to render the chinl element */}
  </>
  );
}