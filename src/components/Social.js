import React from "react";
import Box from "./Box";
import { EditNote, EditOutlined, EditRoad } from "@mui/icons-material";

const Social = () => {
  return (
    <div className="flex flex-col gap-[18px]">
      <h1 className="font-raleway text-[22px] text-[#4D4959] font-semibold">
        Social media
      </h1>
      <div className="flex flex-row gap-[18px] flex-wrap">
        <Box
          icon={<EditOutlined className="!text-orange-400" />}
          text={
            "Generate the best blog post to fit your audience with just few clicks of a button"
          }
          title={"Blog Writing"}
        />
        <Box
          icon={<EditNote className="!text-purple-600 !w-8 !h-8" />}
          title={"Article writer"}
          text={
            "Automatically create unique factual articles at the touch of a button"
          }
        />
        <Box
          icon={<EditRoad className="!text-green-500" />}
          title={"Product description"}
          text={"Instantly generate engaging product descriptions that sell"}
        />
        <Box
          icon={<EditOutlined className="!text-orange-400" />}
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
