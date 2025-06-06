import React from "react";
import Navigation from "../component/navigation";

function Dashboard() {
  return (
    <>
      <div className="w-full"></div>
      <div className="w-full h-screen flex">
        <Navigation />
        <div className="w-1/2 bg-rose-200 h-full"></div>
        <div className="w-1/2 bg-cyan-200 h-full"></div>
      </div>
    </>
  );
}

export default Dashboard;
