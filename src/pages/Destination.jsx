import React from "react";
import { useLoaderData } from "react-router";

const Destination = () => {
  const destinations = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className="border p-4 border-gray-200 rounded-lg hover:shadow-lg"
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-60 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-bold">{destination.name}</h2>
          <p>{destination.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Destination;
