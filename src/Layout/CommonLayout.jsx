import React from "react";
import Navbar3 from "../components/Navbar/Navbar3";
import { Outlet } from "react-router";

const CommonLayout = () => {
  return (
    <div className="bg-white text-black min-h-dvh">
      <Navbar3 />
      <div className="p-4 xl:px-32 xl:py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default CommonLayout;
