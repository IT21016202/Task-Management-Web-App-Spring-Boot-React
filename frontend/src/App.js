import React from "react";
import { BrowserRouter, Routes, Route, Navigate, RouterProvider, Router } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
