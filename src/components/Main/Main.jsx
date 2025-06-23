import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const Main = ({ searchString }) => {
  const [places, setPlaces] = useState([]);
  const [placeIndex, setPlaceIndex] = useState(0);
  const [allPlaces, setAllPlaces] = useState([]);

  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setAllPlaces(data);
      });
  }, []);

  useEffect(() => {
    setPlaces(
      allPlaces.filter((place) =>
        place.name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
    setPlaceIndex(0);
  }, [searchString, allPlaces]);

  const handleCardClick = (index) => {
    setPlaceIndex(index);
  };

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="pl-4 py-4 xl:pl-32 grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div className="p-1">
        <h1 className="bebas text-2xl xl:text-8xl">
          {places[placeIndex]?.name}
        </h1>
        <p className="mb-6">{places[placeIndex]?.description}</p>
        <Link
          to={"/booking"}
          className="px-7 py-3 rounded border border-[#F9A51A] bg-[#F9A51A] font-medium text-black flex gap-2 items-center w-fit hover:bg-black hover:text-[#F9A51A]"
        >
          Booking <FaArrowRightLong />
        </Link>
      </div>
      <div className="pl-1 py-1 xl:col-span-2">
        <div
          ref={carouselRef}
          className="carousel carousel-center bg-transparent rounded-box w-full space-x-4"
        >
          {places.map((place, index) => (
            <div
              onClick={() => handleCardClick(index)}
              key={index}
              className={`carousel-item relative ${
                placeIndex === index
                  ? "border-3 rounded-box border-[#FBBC04]"
                  : ""
              }`}
            >
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

        <div className="flex gap-2">
          <div
            onClick={scrollLeft}
            className="text-xl text-black px-3 py-1 rounded-full border border-white inline bg-white font-medium cursor-pointer hover:bg-[#F9A51A]"
          >
            &lt;
          </div>
          <div
            onClick={scrollRight}
            className="text-xl text-black px-3 py-1 rounded-full border border-white inline bg-white font-medium cursor-pointer hover:bg-[#F9A51A]"
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
