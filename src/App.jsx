import logo from "./logo.svg";
import { useState } from "react";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import NavComponent from "./components/Nav";
import HomeComponent from "./components/Home";
import BoxComponent from "./components/Boxes";
import AboutComponent from "./components/Projects";

function App() {
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];

  return (
    <div className="main p-4">
      <NavComponent currentRoute={newClass} />
      <Routes>
        <Route path="/Home" element={<HomeComponent />} />
        <Route path="/Projects" element={<AboutComponent />} />
      </Routes>
    </div>
  );
}

export default App;
