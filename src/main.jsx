import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Onboard from "./components/onboard/Onboard";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import Platform from "./components/Platform";
import Solutions from "./components/Features";

import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>

    <ScrollToTop />

    <Navbar />

    <Routes>
      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="/onboard"
        element={<Onboard />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/pricing"
        element={<Pricing />}
      />

      <Route
        path="/platform"
        element={<Platform />}
      />

      <Route
        path="/solutions"
        element={<Solutions />}
      />
    </Routes>

    <Footer />

  </BrowserRouter>
);