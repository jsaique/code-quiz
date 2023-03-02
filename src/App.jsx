import logo from "./logo.svg";
import { useState } from "react";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import NavComponent from "./components/Nav";
import HomeComponent from "./components/Home";
import BoxComponent from "./components/Boxes";
import AboutComponent from "./components/About";

function App() {
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  // const nums = [0, 0, 1, 2, 2, 3];

  // const removeDuplicate = (nums) => {
  //   insertIndex = 1;
  //   for (let i = 1; i < nums.length; i++)
  //     if (nums[i - 1] != nums[i]) {
  //       nums[insertIndex] = nums[i];
  //       insertIndex++;
  //     }
  //   return insertIndex;
  // };

  return (
    <div className="w-full h-full p-4">
      <NavComponent currentRoute={newClass} />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/About" element={<AboutComponent />} />
      </Routes>
    </div>
  );
}

export default App;
