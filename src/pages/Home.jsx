import React from "react";
import Navbar from "../components/Navbar/Navbar";
import bgImg from "../assets/images/Rectangle_28.png";
import Main from "../components/Main/Main";

const Home = () => {
  const [searchString, setSearchString] = React.useState("");

  return (
    <div
      className="bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div>
        <Navbar setSearchString={setSearchString}></Navbar>
        <Main searchString={searchString} />
      </div>
    </div>
  );
};

export default Home;
