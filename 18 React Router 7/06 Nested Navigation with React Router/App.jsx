import { Routes, Route, Navigate } from "react-router";
// import { Routes, Route, Link, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./NewNavbar";
import College from "./College";
import Student from "./Student";
import Departments from "./Departments";
import Details from "./Details";
// import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <h1>Understanding React Router</h1>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="departments" element={<Departments />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
