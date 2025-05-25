import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/images/Rectangle_28.png";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Home;
