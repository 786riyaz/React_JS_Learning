import { Link, Outlet } from "react-router";
import './header.css';

export default function Navbar() {
  return (<>
    <div className="header">
      <Link className="logo" to="/"><h2>Logo</h2></Link>
      <ul className="nav-links">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/en/user/about">About</Link></li>
        <li><Link className="link" to="/college">College</Link></li>
        <li><Link className="link" to="/users">Users</Link></li>
        <li><Link className="link" to="/users/list">List</Link></li>
        <li><Link className="link" to="/en/user/login">Login</Link></li>
      </ul>
    </div>
    <Outlet/>
    {/* Outlet is use to render the chinl element */}
  </>
  );
}