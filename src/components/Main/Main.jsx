import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Main = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="pl-4 py-4 xl:pl-32 grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div className="p-1">
        <h1 className="bebas text-2xl xl:text-8xl">Title</h1>
        <p className="mb-6">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <Link
          to={"/booking"}
          className="px-7 py-3 rounded border border-[#F9A51A] bg-[#F9A51A] font-medium text-black flex gap-2 items-center w-fit hover:bg-black hover:text-[#F9A51A]"
        >
          Booking <FaArrowRightLong />
        </Link>
      </div>
      <div className="pl-1 py-1 xl:col-span-2">
        <div className="carousel carousel-center bg-transparent rounded-box w-full space-x-4 py-4">
          {places.map((place) => (
            // <Sliders place={place} />
            <div className="carousel-item relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-80 h-auto object-cover rounded-box"
              />
              <div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/0 to-black/70
                  rounded-box"
              ></div>
              <h1 className="absolute bebas text-4xl left-5 bottom-9 z-10">
                {place.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
