import React from "react";
import { useLoaderData, useLocation } from "react-router";
import Navbar3 from "../components/Navbar/Navbar3";
import { FaStar } from "react-icons/fa";

const Place = () => {
  const { state } = useLocation();
  const hotels = useLoaderData();
  const filteredHotels = hotels.filter(
    (hotel) => hotel.placeId === state?.place.id
  );

  console.log(filteredHotels);

  return (
    <div className="bg-white text-black">
      <Navbar3 />

      <hr className="pb-5 mx-4 xl:mx-32 text-[#D1D1D1]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 xl:px-32 xl:py-8">
        <div className="">
          <h1 className="text-2xl font-bold">Stay in {state?.place.name}</h1>

          {filteredHotels.map((hotel) => (
            <div
              className="grid grid-cols-2 gap-8 my-8 items-center"
              key={hotel.id}
            >
              <img
                className="w-full h-full object-cover rounded-md"
                src={hotel.image}
                alt="Image"
              />

              <div>
                <h2 className="font-medium lg:text-lg">{hotel.name}</h2>
                <div className="flex items-center gap-2 my-1 lg:my-3 text-[#6A6A6A] flex-wrap text-sm lg:text-base">
                  <p>{hotel.guests} guests</p>
                  <p>{hotel.bedrooms} bedrooms</p>
                  <p>{hotel.beds} beds</p>
                  <p>{hotel.baths} baths</p>
                </div>
                <p className="text-[#6A6A6A] text-sm lg:text-base">
                  {hotel.details}
                </p>
                <p className="text-[#6A6A6A] text-xs lg:text-sm my-1 lg:my-3">
                  Cancellation flexibility: {hotel.cancellation}
                </p>
                <div className="flex items-center gap-4">
                  <div className="font-medium flex items-center gap-1 text-xs lg:text-sm">
                    <FaStar className="text-[#FFAF38]" />
                    <span>{hotel.rating}</span>
                    <span>({hotel.ratingCount})</span>
                  </div>
                  <p className="text-[#6A6A6A] lg:text-lg">
                    <span className="font-medium text-black">
                      ${hotel.pricePerNight}/
                    </span>
                    night
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <img
            className="h-full w-auto object-cover rounded-xl"
            src="https://i.ibb.co/vvXdYPLC/tourist-Map.jpg"
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Place;
