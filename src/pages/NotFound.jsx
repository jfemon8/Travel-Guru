import React from "react";
import notFoundImage from "../assets/not-found.jpg";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5 p-4">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-24 w-auto" />
      </Link>
      <img
        src={notFoundImage}
        alt="Not Found"
        className="h-96 w-auto rounded-2xl"
      />
      <h1 className="text-black text-2xl">
        This path doesn’t exist... but your journey doesn’t end here.
      </h1>
      <Link to={"/"} className="btn btn-primary">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
