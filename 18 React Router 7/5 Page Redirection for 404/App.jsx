import { Routes, Route, Link, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./NewNavbar";
import PageNotFound from "./PageNotFound";

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
        {/* <Route path="/*" element={<PageNotFound />} /> */}    
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}