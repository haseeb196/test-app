import React from "react";
import Introduction from "./Introduction";
import Tools from "./Tools";

const Main = () => {
  return (
    <div className="md:px-3 md:pt-6 flex flex-col gap-y-3 h-full">
      <div>
        <Introduction />
      </div>
      <div className="h-full px-3 md:px-0">
        <Tools />
      </div>
    </div>
  );
};

export default Main;
