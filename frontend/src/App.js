import React from "react";
import { BrowserRouter, Routes, Route, Navigate, RouterProvider, Router } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/HomePage";
import AllTasks from "./pages/AllTasksPage";
import AddTask from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alltasks" element={<AllTasks />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/edittask/:id" element={<EditTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
