import React from "react";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Navbar from "./ReactUser/layout/Navbar";

import Home from "./ReactUser/pages/Home";
import About from "./ReactUser/pages/About";
import Notfound from "./ReactUser/pages/Notfound";
import Resume from "./ReactUser/pages/Resume";
import Projects from "./ReactUser/pages/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path="*" element={<Notfound />} />
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />

          </Routes>
      
      </div>
    </Router>
  );
}

export default App;
