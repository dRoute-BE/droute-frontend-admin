import React from "react";
import Navigation from "../component/navigation";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex-1 overflow-y-auto bg-gray-100">
       <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
