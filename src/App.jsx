import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserEntity from "./pages/UserEntity";
import DriverEntity from "./pages/DriverEntity";
import Landing from "./pages/Landing";
import VerifyDriver from "./pages/VerifyDriver";
import DriverJourney from "./pages/driverJourney";
import AllJourney from "./pages/allJourney";
import AllOrders from "./pages/allOrders";
import JourneyOrders from "./pages/journeyOrders";
import SupportAdminDashboard from "./pages/SupportAdminDashboard";

function App() {
  return (
    <Routes>
      //landing page
      <Route path="/" element={<Landing />} />
      {/* Redirect root to dashboard */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="verifydriver" element={<VerifyDriver />} />
        <Route path="user" element={<UserEntity />} />
        <Route path="driver" element={<DriverEntity />} />
        <Route path="driverjourney" element={<DriverJourney />} />
        <Route path="alljourney" element={<AllJourney />} />
        <Route path="support" element={<SupportAdminDashboard />} />
        <Route path="allorders" element={<AllOrders />} />
        <Route path="journeyorders" element={<JourneyOrders />} />
      </Route>
    </Routes>
  );
}

export default App;
