import React from "react";
import Social from "./Social";

const Tools = () => {
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="text-[#4D4959] font-raleway flex flex-col gap-2 px-1">
        <h1 className="text-2xl font-semibold">Most Popular Tools</h1>
        <p className="text-lg font-medium">
          Explore the trending tools to create your copies fast
        </p>
      </div>
      <div className="h-full bg-[#F4F3F6] p-1 rounded-lg shadow-md flex gap-5 flex-col pb-5">
        <Social />
        <Social />
      </div>
    </div>
  );
};

export default Tools;
