import { Routes, Route, Link } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./NewNavbar";
export default function App() {
  return (
    <>
      <Navbar/>
      <h1>Understanding React Router</h1>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </>
  );
}
