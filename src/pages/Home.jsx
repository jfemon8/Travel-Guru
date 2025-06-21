import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/images/Rectangle_28.png";
import { Outlet } from "react-router";
import Main from "../components/Main/Main";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div>
        <Navbar></Navbar>
        <Main />
      </div>
    </div>
  );
};

export default Home;
