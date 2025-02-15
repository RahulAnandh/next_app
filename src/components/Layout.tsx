import React from "react";
import Sidebar from "./Sidebar";
const LayOut = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">Dashboard</div>
    </div>
  );
};

export default LayOut;
