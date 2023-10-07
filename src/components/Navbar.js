import {
  CalendarMonth,
  CalendarMonthOutlined,
  Cancel,
  Notifications,
  NotificationsOutlined,
  Search,
  Tune,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="shadow-lg border h-[81px] items-center bg-[#f2f2f5]   flex justify-between px-3 flex-1 lg:gap-x-40 md:gap-x-20 gap-x-10">
        <div className="flex bg-white border h-[48px]  flex-grow rounded-md justify-between items-center px-3 gap-x-1">
          <div className="flex gap-x-1 flex-grow items-center justify-center">
            <Search fontSize="small" />
            <input
              type="text"
              className="outline-none bg-transparent w-full flex-wrap"
              placeholder="Search for templates, projects, etc"
            />
          </div>
          <div className="!text-gray-300 flex gap-x-2 items-center">
            <Tune className="!w-5 !h-5 hover:!text-gray-600" />
            <Cancel className="!w-3 !h-3 hover:!text-gray-600" />
          </div>
        </div>
        <div className="flex gap-10">
          <button className="bg-[#754DE8] whitespace-nowrap hover:bg-[#6141c2] hover:shadow-md duration-200 transition-all text-white py-[11px] px-[48px] rounded-full">
            Create Content
          </button>
          <div className="px-4 items-center shadow-sm bg-purple-100 rounded-2xl flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.5 22C5.25329 22 1 17.5228 1 12C1 6.47715 5.25329 2 10.5 2C15.7467 2 20 6.47715 20 12C20 17.5228 15.7467 22 10.5 22Z"
                stroke="#463D61"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 8.8C12.3635 8.2839 11.5694 8.00154 10.75 8C8.679 8 7 9.79 7 12C7 14.21 8.679 16 10.75 16C11.594 16 12.373 15.702 13 15.2"
                stroke="#463D61"
                strokeWidth="2"
                strokeWinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 2C14.333 2 23 3 23 12C23 21 14.333 22 10 22"
                stroke="#463D61"
                strokeWidth="2"
              />
            </svg>
            <p className="text-sm font-bold">20</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-x-[58px] items-center m-[4px]  bg-[#F1EDFD] border border-[#D4C8F8]">
        <Tooltip title="Calendar">
          {" "}
          <button className="relative p-[24px] group transition-all rounded-lg hover:bg-[#f7f6f6] focus:!bg-[#EAE4FC]">
            <CalendarMonth className="!hidden group-hover:!block  group-focus:!block group-focus:!text-[#5d4b94] group-hover:!text-gray-700" />
            <CalendarMonthOutlined className="!block group-hover:!hidden group-focus:!hidden !text-gray-500" />
            <div className="w-10 -mb-[2px] bg-[#5d4b94] absolute h-1  group-focus:block hidden bottom-0 rounded-tl-2xl rounded-tr-2xl left-4"></div>
          </button>
        </Tooltip>
        <Tooltip title="Notifications">
          <button className="relative p-[24px] group transition-all rounded-lg hover:bg-[#f7f6f6] focus:!bg-[#EAE4FC]">
            {" "}
            <Notifications className="!hidden group-hover:!block  group-focus:!block group-focus:!text-[#5d4b94] group-hover:!text-gray-700 " />
            <NotificationsOutlined className="!block group-hover:!hidden group-focus:!hidden !text-gray-500" />
            <div className="w-10 -mb-[2px] bg-[#5d4b94] absolute h-1  group-focus:block hidden bottom-0 rounded-tl-2xl rounded-tr-2xl left-4"></div>
          </button>
        </Tooltip>
        <button className="relative p-[18px] rounded-lg hover:bg-[#f7f6f6] focus:!bg-[#EAE4FC] group">
          <img
            src="https://yt3.ggpht.com/a/AATXAJzsHPys1EoSnxprcPapwsQsb1gr97KzKfnRBw=s900-c-k-c0xffffffff-no-rj-mo"
            className="rounded-[10px] w-10 h-10 transform transition-transform ease-in-out duration-300 group-focus:translate-y-1"
            alt=""
          />
          <div className="w-10 -mb-[2px] bg-[#5d4b94] absolute h-1  group-focus:block hidden bottom-0 rounded-tl-2xl rounded-tr-2xl left-4"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
