import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"
import App from "./App";
import Onboard from "./components/Onboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/onboard" element={<Onboard />} />
    </Routes>
  </BrowserRouter>
);