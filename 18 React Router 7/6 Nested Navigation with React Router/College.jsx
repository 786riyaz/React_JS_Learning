import { NavLink, Outlet } from "react-router";
import './header.css';

export default function College() {
  return (
    <>
    <div className="header" style={{background:'lightpink',display:'block', textAlign:'center'}}>
      <h1>College Page</h1>
      </div>
      <div className="header">
      <NavLink className = ".nav-links" to="student"> Student</NavLink>
      <NavLink className = ".nav-links"  to="departments"> Departments</NavLink>
      <NavLink className = ".nav-links" to="details"> Details</NavLink>
    </div>
      <Outlet/>
    </>
  );
}