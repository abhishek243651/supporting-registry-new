import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NotFound from "./components/NotFound";
import AddUsers from "./components/AddUsers";
import UserCreation from "./components/UserCreation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="users" element={<AddUsers />} />
        <Route path="user-creation" element={<UserCreation />}/>
        {/* <Route path="users" element={<h1>Users</h1>} />
        <Route path="settings" element={<h1>Settings</h1>} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
