import React, { useContext } from "react";
import FirstBall from "./First";
import SecondBall from "./Second";
import { ArrowDropDown, Search, Widgets } from "@mui/icons-material";
import SecondM from "./SecondM";
import { mycontext } from "./Usercontext";

const Introduction = () => {
  const { user } = useContext(mycontext);

  return (
    <div class="px-5 md:py-0 py-4 md:gap-2 gap-10 flex flex-col md:flex-row md:justify-between  items-center relative w-full md:h-[296px] h-[270px] bg-custom-radial-gradient  rounded-[20px] border-[#EAE4FC] border-1">
      <div className="md:hidden flex items-center justify-between w-full gap-5 z-50">
        <div className="rounded-lg bg-white bg-opacity-50 backdrop-blur-10 py-[5px] px-[6px]">
          <Widgets className="!text-gray-500" />{" "}
        </div>
        <div className="hover:cursor-pointer  flex gap-[2px] bg-white rounded-md py-1 px-1 font-raleway text-[14px] whitespace-nowrap !text-[#1D1437]">
          <p>Zara ventures</p>
          <ArrowDropDown />
        </div>
        <img src={user?.photoURL} className="rounded-[10px] w-9 h-9" alt="" />
      </div>
      <div className="gap-y-10 flex flex-col items-start w-full md:w-auto">
        <div className="text-[#4D4959] z-50">
          <h1 className="font-moranga xl:text-[48px] lg:text-[39px] text-[33px] font-semibold">
            Hey {user.displayName}!
          </h1>
          <p className="font-raleway font-medium text-[20px]">
            Lets create something awesome today ✨💫
          </p>
        </div>

        <button className="py-[8px] hidden md:block transition-all px-[48px] font-bold rounded-[20px] border-[2px] border-[#754DE8] bg-white text-[#754DE8] hover:text-white hover:bg-gradient-to-r from-red-600 to-purple-600 hover:!border-transparent">
          Start Creating
        </button>
      </div>
      <div className="absolute -bottom-3 z-50 md:hidden flex rounded-md border border-gray-200 bg-white shadow-md py-2 px-3 w-full max-w-[90vw] gap-2 items-center">
        <Search fontSize="small" />
        <input
          type="text"
          className="flex-grow outline-none bg-transparent"
          placeholder="Search for templates, projects, etc"
        />
      </div>
      <div className="z-50 max-w-[637px] w-full hidden md:flex flex-col gap-y-10 p-4 font-raleway text-lg  font-medium leading-4 rounded-[10px] border bg-rgba backdrop-blur">
        <p>
          You should have more engagement by 6pm today, try posting then. 📆{" "}
        </p>

        <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
      </div>

      <div className="absolute md:right-[76vh] left-0 md:left-auto top-0">
        <FirstBall />
      </div>
      <div className="absolute bottom-2 md:right-[6vh] right-0">
        <SecondBall />
        <SecondM />
      </div>

      <img
        src="/blend.svg"
        alt=""
        className="!z-0 absolute md:right-0 md:top-0 -top-5 max-w-[82vh] w-full"
      />
      <div className="hover:cursor-pointer md:flex hidden  drop-down absolute top-7 right-10  gap-1 bg-white rounded-md py-2 px-2 font-raleway text-[16px] !text-[#1D1437]">
        <p>Zara ventures</p>
        <ArrowDropDown />
      </div>
    </div>
  );
};

export default Introduction;
