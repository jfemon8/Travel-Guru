import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/images/Rectangle_28.png";
import Main from "../components/Main/Main";

const Home = () => {
  const [searchString, setSearchString] = React.useState("");

  return (
    <div
      className="bg-cover bg-center h-full relative min-h-dvh"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10">
        <Navbar setSearchString={setSearchString} />
        <Main searchString={searchString} />
      </div>
    </div>
  );
};

export default Home;
