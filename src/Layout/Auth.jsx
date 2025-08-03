import React from "react";
import Navbar3 from "../components/Navbar/Navbar3";
import { Outlet } from "react-router";
import { FaFacebook } from "react-icons/fa";

const Auth = () => {
  return (
    <div className="bg-white text-black">
      <Navbar3 />

      <div className="w-3/4 lg:w-1/2 mx-auto p-4 xl:py-16 xl:px-8">
        <Outlet />
        <div className="flex items-center justify-center gap-2 w-11/12 mx-auto my-4">
          <hr className="w-2/5 border border-[#AAAAAA]" />
          <p className="font-medium">Or</p>
          <hr className="w-2/5 border border-[#AAAAAA]" />
        </div>
        <div className="flex items-center justify-between p-2 border border-[#C7C7C7] rounded-full w-5/6 mx-auto my-1 cursor-pointer">
          <FaFacebook size={37} color="#3076FF" />
          <p className="font-medium">Continue with Facebook</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
