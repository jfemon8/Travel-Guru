import React, { use, useState } from "react";
import { ImMenu } from "react-icons/im";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar3 = () => {
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
        to={"/home/news"}
        className={({ isActive }) =>
          isActive ? "font-extrabold" : "font-medium hover:font-extrabold"
        }
      >
        News
      </NavLink>
      <NavLink
        to={"/home/destination"}
        className={({ isActive }) =>
          isActive ? "font-extrabold" : "font-medium hover:font-extrabold"
        }
      >
        Destination
      </NavLink>
      <NavLink
        to={"/home/blog"}
        className={({ isActive }) =>
          isActive ? "font-extrabold" : "font-medium hover:font-extrabold"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to={"/home/contact"}
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
    <div className="p-4 xl:px-32 flex justify-between items-center gap-2 sticky top-0 z-50 bg-white shadow-md">
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
        <img className="h-16 w-auto object-cover" src={logo} alt="Logo" />
      </Link>

      <div className="hidden xl:block">
        <div className="flex items-center gap-8">{links}</div>
      </div>
    </div>
  );
};

export default Navbar3;
