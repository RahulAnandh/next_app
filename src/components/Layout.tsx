import React from "react";
import Sidebar from "./Sidebar";

const LayOut = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-slate-500 flex-1 p-4 text-white border-1 border-dashed">
        Dashboard
      </div>
    </div>
  );
};

export default LayOut;
