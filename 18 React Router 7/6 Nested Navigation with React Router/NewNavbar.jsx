import { Link } from "react-router";
import './header.css';

export default function Navbar() {
  return (
    <div className="header">
      <Link className="logo" to="/"><h2>Logo</h2></Link>
      <ul className="nav-links">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><Link className="link" to="/college">College</Link></li>
        <li><Link className="link" to="/login">Login</Link></li>
      </ul>
    </div>
  );
}