import React from "react";
import FirstBall from "./First";
import SecondBall from "./Second";
import { ArrowDropDown } from "@mui/icons-material";

const Introduction = () => {
  return (
    <div class="pl-5 flex justify-between  items-center relative w-full h-[296px] bg-custom-radial-gradient  rounded-[20px] border-[#EAE4FC] border-1">
      <div className="gap-y-10 flex flex-col items-start">
        <div className="text-[#4D4959]">
          <h1 className="font-moranga xl:text-[48px] lg:text-[39px] text-[30px] font-medium">
            Hey James!
          </h1>
          <p className="font-raleway font-medium text-[20px]">
            Lets create something awesome today ✨💫
          </p>
        </div>

        <button className="py-[8px] transition-all px-[48px] font-bold rounded-[20px] border-[2px] border-[#754DE8] bg-white text-[#754DE8] hover:text-white hover:bg-gradient-to-r from-red-600 to-purple-600 hover:!border-transparent">
          Start Creating
        </button>
      </div>
      <div className="z-50 max-w-[637px] w-full flex flex-col gap-y-10 p-4 font-raleway text-lg ml-52 font-medium leading-4 rounded-[10px] border bg-rgba backdrop-blur">
        <p>
          You should have more engagement by 6pm today, try posting then. 📆{" "}
        </p>

        <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
      </div>
      <div>
        {" "}
        <div className="absolute right-[76vh] top-0">
          <FirstBall />
        </div>
        <div className="absolute bottom-0 right-[6vh] z-50">
          {" "}
          <SecondBall />
        </div>
        <img
          src="/blend.svg"
          alt=""
          className="!z-0 absolute right-0 top-0 max-w-[82vh] w-full"
        />
        <div className="hover:cursor-pointer drop-down absolute top-10 right-10 flex gap-1 bg-white rounded-md py-2 px-2 font-raleway text-[16px] !text-[#1D1437]">
          <p>Zara ventures</p>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
