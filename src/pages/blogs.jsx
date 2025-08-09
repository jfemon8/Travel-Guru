import React from "react";
import { useLoaderData } from "react-router";

const blogs = () => {
  const blogsData = useLoaderData();

  return (
    <div>
      {blogsData.map((blog) => (
        <div
          key={blog.id}
          className="border border-gray-200 p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-4 hover:shadow-lg mb-4 items-center"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded"
          />
          <div>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(blog.date).toLocaleDateString()} by {blog.author}
            </p>
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default blogs;
