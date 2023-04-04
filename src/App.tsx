import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Rules from "./pages/Rules";
import "./App.css";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
