import logo from "./logo.svg";
import { useState } from "react";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Boxes from "./components/Boxes";

function App() {
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

  return <h1>Hello</h1>;
}

export default App;
