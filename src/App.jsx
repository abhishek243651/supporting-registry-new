import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="settings" element={<h1>Settings</h1>} />
      </Route>
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
}

export default App;
