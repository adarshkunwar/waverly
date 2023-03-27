import React, { useState } from "react";
import SideBar from "./SideBar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="relative h-screen ">
      <div className="bg-primary text-white z-50">
        <Topbar />
      </div>
      <div className="relative h-full overflow-hidden">
        <div
          onMouseEnter={() => setIsSidebarOpen(true)}
          onMouseLeave={() => setIsSidebarOpen(false)}
          className={`bg-yellow-500 rounded-full aspect-square flex flex-col justify-center items-center absolute  transition-all duration-300 ${
            isSidebarOpen
              ? "-right-5 -top-5 scale-110 h-48"
              : "-right-20 -top-20 scale-50 h-40 "
          }`}
        >
          <SideBar active={isSidebarOpen} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
