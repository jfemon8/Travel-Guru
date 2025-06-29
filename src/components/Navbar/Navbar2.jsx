import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import logo from "../../assets/logo-white.png";
import { Link, NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";

const Navbar2 = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleNavMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  const links = (
    <>
      <NavLink
        to={"/news"}
        className={({ isActive }) =>
          isActive ? "font-extrabold" : "font-medium hover:font-extrabold"
        }
      >
        News
      </NavLink>
      <NavLink
        to={"/destination"}
        className={({ isActive }) =>
          isActive ? "font-extrabold" : "font-medium hover:font-extrabold"
        }
      >
        Destination
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive }) =>
          isActive ? "font-extrabold" : "font-medium hover:font-extrabold"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive ? "font-extrabold" : "font-medium hover:font-extrabold"
        }
      >
        Contact
      </NavLink>
      <Link
        to={"/auth/login"}
        className="btn bg-[#F9A51A] text-white border border-[#F9A51A] hover:bg-white hover:text-[#F9A51A]"
      >
        Login
      </Link>
    </>
  );

  return (
    <div className="p-4 xl:px-32 xl:py-8 flex justify-between items-center gap-2">
      <div className="relative xl:hidden">
        <ImMenu
          onClick={handleNavMenuClicked}
          className="cursor-pointer"
          size={24}
        />
        <div
          className={`absolute flex flex-col gap-2 mt-1 bg-black/50 p-2 rounded ${
            menuClicked ? "block" : "hidden"
          }`}
        >
          {links}
        </div>
      </div>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>

      <div className="hidden xl:block">
        <div className="flex items-center gap-8">{links}</div>
      </div>
    </div>
  );
};

export default Navbar2;
