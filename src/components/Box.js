import { MovingOutlined } from "@mui/icons-material";
import React from "react";

const Box = ({ text, title, icon }) => {
  return (
    <div className="bg-white  rounded-[10px] font-raleway max-w-[289px] pt-[14px] pr-[20px] pb-[30px] pl-[22px] flex flex-col gap-y-8">
      <div className="flex justify-between">
        {icon}
        <MovingOutlined className="!text-gray-400" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#1D1437] text-[20px] font-semibold">{title}</h1>
        <p className="text-[#77737F] text-[16px] font-semibold line-clamp-3">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Box;
