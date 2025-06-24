import React from "react";
import bgImg from "../assets/images/Rectangle_28.png";
import Navbar2 from "../components/Navbar/Navbar2";
import { useLoaderData } from "react-router";
import "../assets/style.css";

const Booking = () => {
  const place = useLoaderData();

  return (
    <div
      className="bg-cover bg-center h-full relative min-h-dvh"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10">
        <Navbar2 />

        <div className="p-4 xl:px-32 xl:py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-48 items-center">
          <div className="p-1">
            <h1 className="bebas text-4xl lg:text-6xl xl:text-8xl">
              {place?.name}
            </h1>
            <p className="mb-6">{place?.description}</p>
          </div>

          <div className="bg-white rounded-md p-6 text-black">
            <form action="">
              <label htmlFor="origin" className="text-[#818181] font-medium">
                Origin
              </label>
              <input
                type="text"
                id="origin"
                name="origin"
                placeholder="Dhaka"
                className="bg-[#F2F2F2] rounded-md p-5 block w-full mt-2 font-bold text-black placeholder-black mb-4"
              />
              <label
                htmlFor="destination"
                className="text-[#818181] font-medium"
              >
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={place?.name}
                className="bg-[#F2F2F2] rounded-md p-5 block w-full mt-2 font-bold text-black placeholder-black mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from" className="text-[#818181] font-medium">
                    From
                  </label>
                  <input
                    type="date"
                    id="from"
                    name="from"
                    className="date-black bg-[#F2F2F2] rounded-md p-5 block w-full font-bold text-black placeholder-black mt-2 mb-4"
                  />
                </div>
                <div>
                  <label htmlFor="to" className="text-[#818181] font-medium">
                    To
                  </label>
                  <input
                    type="date"
                    id="to"
                    name="to"
                    className="date-black bg-[#F2F2F2] rounded-md p-5 block w-full font-bold text-black placeholder-black mt-2 mb-4"
                  />
                </div>
              </div>
              <button className="btn bg-[#F9A51A] border-[#F9A51A] block w-full mt-4 hover:bg-white hover:text-black">
                Start Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
