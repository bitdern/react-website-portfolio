import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog";
import Projects from "./components/Pages/Projects";
import ReachOut from "./components/Pages/ReachOut";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/react-out" element={<ReachOut />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
