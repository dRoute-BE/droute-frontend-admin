import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserEntity from "./pages/UserEntity";
import DriverEntity from "./pages/DriverEntity";
import NotFound from "./pages/NotFound";
import VerifyDriver from "./pages/VerifyDriver";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="VerifyDriver" element={<VerifyDriver />} />
        <Route path="UserEntity" element={<UserEntity/>} />
         <Route path="DriverEntity" element={<DriverEntity/>} />
      </Route>
    </Routes>
  );
}

export default App;
