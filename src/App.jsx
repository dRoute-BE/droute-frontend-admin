import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserEntity from "./pages/UserEntity";
import DriverEntity from "./pages/DriverEntity";
import NotFound from "./pages/NotFound";
import VerifyDriver from "./pages/VerifyDriver";
import DriverJourney from "./pages/driverJourney";
import AllJourney from "./pages/allJourney";
import AllOrders from "./pages/allOrders";
import JourneyOrders from "./pages/journeyOrders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="verifydriver" element={<VerifyDriver />} />
        <Route path="user" element={<UserEntity />} />
        <Route path="driver" element={<DriverEntity />} />
        <Route path="driverjourney" element={<DriverJourney />} />
        <Route path="alljourney" element={<AllJourney />} />
        <Route path="allorders" element={<AllOrders />} />
        <Route path="journeyorders" element={<JourneyOrders />} />
      </Route>
    </Routes>
  );
}

export default App;
