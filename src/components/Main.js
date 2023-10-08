import React from "react";
import Introduction from "./Introduction";
import Tools from "./Tools";

const Main = () => {
  return (
    <div className="px-3 pt-6 flex flex-col gap-y-3 h-full">
      <div>
        <Introduction />
      </div>
      <div className="h-full">
        <Tools />
      </div>
    </div>
  );
};

export default Main;
