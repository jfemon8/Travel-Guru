import React from "react";
import { ImMenu } from "react-icons/im";
import logo from "../../assets/logo-white.png";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="p-4 xl:px-32 xl:py-8 flex justify-between items-center">
      <div>
        <ImMenu size={24} />
      </div>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <div className="flex items-center bg-white/20 border border-white rounded px-4 py-2 w-full max-w-md text-white">
        <FaSearch className="text-white mr-2" />
        <input
          type="text"
          placeholder="Search your Destination..."
          className="bg-transparent outline-none w-full placeholder-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
