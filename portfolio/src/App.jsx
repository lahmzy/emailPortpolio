import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
