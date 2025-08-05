import React, { use, useState } from "react";
import { ImMenu } from "react-icons/im";
import logo from "../../assets/logo-white.png";
import { Link, NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = ({ setSearchString }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleNavMenuClicked = () => {
    setMenuClicked(!menuClicked);
  };

  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User logged out successfully",
          showConfirmButton: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: errorMessage,
          showConfirmButton: true,
          timer: 1500,
        });
      });
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
      {user ? (
        <button
          onClick={handleLogOut}
          className="btn bg-[#F9A51A] text-white border border-[#F9A51A] hover:bg-white hover:text-[#F9A51A]"
        >
          Log out
        </button>
      ) : (
        <Link
          to={"/auth/login"}
          className="btn bg-[#F9A51A] text-white border border-[#F9A51A] hover:bg-white hover:text-[#F9A51A]"
        >
          Login
        </Link>
      )}
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
          className={`absolute flex flex-col gap-2 mt-1 bg-black/95 p-2 rounded ${
            menuClicked ? "block" : "hidden"
          }`}
        >
          {links}
        </div>
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
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <div className="hidden xl:block">
        <div className="flex items-center gap-8">{links}</div>
      </div>
    </div>
  );
};

export default Navbar;
