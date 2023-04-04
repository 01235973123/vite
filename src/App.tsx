import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import "./App.css";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
