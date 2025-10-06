import { Link, NavLink, Outlet } from "react-router";
import './header.css';

export default function College() {
  return (
    <>
    <div className="header" style={{background:'lightpink',display:'block', textAlign:'center'}}>
      <h1>College Page</h1>
      <h3><Link to="/">Go to Home</Link></h3>
      </div>
      <div className="header">
      <NavLink className = ".nav-links" to="/college"> Student</NavLink>
      {/* <NavLink className = ".nav-links" to=""> Student</NavLink> */}
      {/* Both way is acceptable for view the Student page content */}
      <NavLink className = ".nav-links"  to="departments"> Departments</NavLink>
      <NavLink className = ".nav-links" to="details"> Details</NavLink>
    </div>
      <Outlet/>
    </>
  );
}