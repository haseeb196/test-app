import { MovingOutlined } from "@mui/icons-material";
import React from "react";

const Box = ({ text, title, icon }) => {
  return (
    <div className="bg-white rounded-lg  md:rounded-[10px] font-raleway max-w-[289px] pt-[14px] pr-[20px] pb-[30px] pl-[22px] flex flex-col md:gap-y-8 gap-y-[18px] shadow-md md:shadow-none">
      <div className="flex justify-between items-center">
        {icon}
        <MovingOutlined className="!text-gray-400 !w-5 !h-5 md:!w-7 md:!h-7" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[#1D1437] md:text-[20px] sm:text-[17px] text-[14px] whitespace-nowrap font-semibold">
          {title}
        </h1>
        <p className="text-[#77737F] sm:text-[13px] text-[11px] md:text-[16px] font-semibold line-clamp-3">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Box;
