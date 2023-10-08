import React from "react";
import Box from "./Box";
import { EditNote, EditOutlined, EditRoad } from "@mui/icons-material";

const Social = () => {
  return (
    <div className="flex flex-col md:gap-[18px] gap-[13px]">
      <h1 className="font-raleway text-[22px] text-[#4D4959] font-semibold">
        Social media
      </h1>
      <div className="flex flex-row  gap-3 md:gap-[18px] md:flex-wrap overflow-x-auto sm:overflow-x-visible">
        <Box
          icon={
            <EditOutlined className="!text-orange-400 !w-5 !h-5 md:!w-7 md:!h-7" />
          }
          text={
            "Generate the best blog post to fit your audience with just few clicks of a button"
          }
          title={"Blog Writing"}
        />
        <Box
          icon={
            <EditNote className="!text-purple-600 !w-5 !h-5 md:!w-7 md:!h-7" />
          }
          title={"Article writer"}
          text={
            "Automatically create unique factual articles at the touch of a button"
          }
        />
        <Box
          icon={
            <EditRoad className="!text-green-500 !w-5 !h-5 md:!w-7 md:!h-7" />
          }
          title={"Product description"}
          text={"Instantly generate engaging product descriptions that sell"}
        />
        <Box
          icon={
            <EditOutlined className="!text-orange-400 !w-5 !h-5 md:!w-7 md:!h-7" />
          }
          title={"Blog Writing"}
          text={
            "Generate the best blog post to fit your audience with just few clicks of a button"
          }
        />
      </div>
    </div>
  );
};

export default Social;
