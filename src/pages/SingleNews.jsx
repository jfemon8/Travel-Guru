import React, { use } from "react";
import { useLoaderData } from "react-router";

const SingleNews = () => {
  const news = useLoaderData();

  return (
    <div className="md:w-2/3 mx-auto">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-auto object-cover rounded-2xl mb-4"
      />
      <h1 className="text-center text-2xl font-bold text-[#F9A51A]">
        {news.title}
      </h1>
      <span className="block text-gray-500 my-4 text-xs">
        Date: {news.date}
      </span>
      <p className="text-justify">{news.description}</p>
    </div>
  );
};

export default SingleNews;
