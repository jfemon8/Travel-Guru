import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-[#F9A51A]">
        Latest News
      </h1>
      <p className="text-center">
        Stay tuned for the latest updates and news articles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 p-4 rounded bg-gray-50 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <span className="text-xs text-gray-500">{item.date}</span>
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p>
              {item.description.slice(0, 100)}...
              <Link
                to={`/home/news/${item.id}`}
                className="text-[#F9A51A] hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
