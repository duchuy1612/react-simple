import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
