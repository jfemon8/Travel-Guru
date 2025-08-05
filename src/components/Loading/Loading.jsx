import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <span className="loading loading-ring loading-xl text-secondary"></span>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
