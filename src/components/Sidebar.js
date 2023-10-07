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
import React from "react";
const Sidebar = () => {
  return (
    <div className="bg-[#F1EDFD] py-[24px] px-[15px] flex flex-col h-full justify-between !w-[106px]">
      <div className="flex flex-col gap-y-[45px] items-center">
        <img src="/sidebar/Logo.svg" alt="" className="w-[38px] h-[40px]" />
        <div className="gap-y-[39px] flex flex-col">
          {" "}
          <div className=" group p-[24px] rounded-[10px] hover:bg-[#EAE4FC] transition-all duration-150">
            <Home className="!w-7 !h-7 !text-[#5E3EBA]  !hidden group-hover:!block" />
            <HomeOutlined className="!w-7 !h-7 !text-gray-600 group-hover:!hidden !block" />
          </div>
          <div className="group p-[24px] rounded-[10px] hover:bg-[#EAE4FC] transition-all duration-150">
            <Web className="!w-7 !h-7 !hidden group-hover:!block group-hover:!text-[#5E3EBA]" />
            <WebOutlined className="!w-7 !h-7 !text-gray-600 !block group-hover:!hidden" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[39px] items-center">
        <div className="p-[24px] rounded-[10px] hover:bg-[#EAE4FC] group transition-all duration-150">
          {" "}
          <Settings className="!hidden group-hover:!block group-hover:!text-[#5E3EBA]" />
          <SettingsOutlined className="!text-gray-600 !block group-hover:!hidden" />
        </div>
        <div className="p-[24px] rounded-[10px] hover:bg-[#EAE4FC] group transition-all duration-150">
          {" "}
          <Logout className="!hidden group-hover:!block group-hover:!text-[#5E3EBA]" />
          <LogoutOutlined className="!text-gray-600 !block group-hover:!hidden" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
