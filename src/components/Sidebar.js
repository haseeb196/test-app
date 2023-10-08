import {
  Home,
  HomeOutlined,
  Logout,
  LogoutOutlined,
  Settings,
  SettingsOutlined,
  Web,
  WebOutlined,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
const Sidebar = () => {
  return (
    <div className="bg-[#F1EDFD] hidden py-[24px] px-[15px] md:flex flex-col min-h-full justify-between !w-[106px] fixed">
      <div className="flex flex-col gap-y-[45px] items-center">
        <a href="/">
          <img src="/sidebar/Logo.svg" alt="" className="w-[38px] h-[40px]" />
        </a>
        <div className="gap-y-[39px] flex flex-col">
          {" "}
          <Tooltip title="Home">
            {" "}
            <div className=" group p-[24px] rounded-[10px] hover:bg-[#EAE4FC] transition-all duration-400">
              <Home className="!w-7 !h-7 !text-[#5E3EBA]  !hidden group-hover:!block" />
              <HomeOutlined className="!w-7 !h-7 !text-gray-600 group-hover:!hidden !block" />
            </div>
          </Tooltip>
          <Tooltip title="My Content">
            {" "}
            <div className="group p-[24px] rounded-[10px] hover:bg-[#EAE4FC] transition-all duration-400">
              <Web className="!w-7 !h-7 !hidden group-hover:!block group-hover:!text-[#5E3EBA]" />
              <WebOutlined className="!w-7 !h-7 !text-gray-600 !block group-hover:!hidden" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-[39px] items-center">
        <Tooltip title="Settings">
          {" "}
          <div className="p-[24px] rounded-[10px] hover:bg-[#EAE4FC] group transition-all duration-400">
            {" "}
            <Settings className="!hidden group-hover:!block group-hover:!text-[#5E3EBA]" />
            <SettingsOutlined className="!text-gray-600 !block group-hover:!hidden" />
          </div>
        </Tooltip>
        <Tooltip title="Logout">
          <div className="p-[24px] rounded-[10px] hover:bg-[#EAE4FC] group transition-all duration-400">
            {" "}
            <Logout className="!hidden group-hover:!block group-hover:!text-[#5E3EBA]" />
            <LogoutOutlined className="!text-gray-600 !block group-hover:!hidden" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
