import React from "react";
import Social from "./Social";

const Tools = () => {
  return (
    <div className="h-full flex flex-col gap-3 md:mt-0 mt-4">
      <div className="text-[#4D4959] font-raleway flex flex-col gap-2 px-1">
        <h1 className="text-2xl font-semibold">Most Popular Tools</h1>
        <p className="text-lg font-medium">
          Explore the trending tools to create your copies fast
        </p>
      </div>
      <div className="h-full md:bg-[#F4F3F6] bg-white p-1 md:rounded-lg md:shadow-md flex gap-5 flex-col md:pb-5">
        <Social />
        <Social />
        <Social />
      </div>
    </div>
  );
};

export default Tools;
