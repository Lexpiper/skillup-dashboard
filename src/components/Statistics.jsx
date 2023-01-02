import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";
import { IoMdFlash } from "react-icons/io";
import { BiPaint } from "react-icons/bi";
import { FaScroll } from "react-icons/fa";




const Statistics = () => {
  return (
    <div className="w-full flex-col md:flex-row items-center pt-2">
      <div className="flex w-full items-center justify-between mb-2 ">
        <h1 className="text-b ase font-semibold text-[#090909]">Statistics</h1>
        <p className="flex items-center bg-[#f2f2f2] text-xs px-2 py-1 rounded-full">
          <span>By hours</span> <AiOutlineDown />{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center ">
        <div className="grid grid-rows-2 items-center gap-3">
          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="col col-span-1 bg-[#d1d3fe] w-10 h-10 rounded-full flex justify-center">
              <MdOutlineDescription className="place-self-center" />
            </div>
            <div className="col col-span-2">
              <span className="flex flex-col">
                <p className="text-[#c6c6c6] text-xs">Writing Courses</p>
                <p className="font-semibold text-sm">102 h 4omin</p>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="col col-span-1 bg-[#dfebe3] w-10 h-10 rounded-full flex justify-center">
              <IoMdFlash  className="place-self-center" />
            </div>
            <div className="col col-span-2">
              <span className="flex flex-col">
                <p className="text-[#c6c6c6] text-xs">Writing Courses</p>
                <p className="font-semibold text-sm">102 h 4omin</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-full h-32 w-32 flex flex-col items-center justify-center drop-shadow-xl ">
            <span className="text-[#bababa] text-sm">Total hours</span>
            <h1 className="font-bold text-black text-3xl">289</h1>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center gap-3">
          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="col col-span-1 bg-[#fbedb3] w-10 h-10 rounded-full flex justify-center">
              <BiPaint className="place-self-center" />
            </div>
            <div className="col col-span-2">
              <span className="flex flex-col">
                <p className="text-[#c6c6c6] text-xs">Writing Courses</p>
                <p className="font-semibold text-sm">102 h 4omin</p>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="col col-span-1 bg-[#f7d6e7] w-10 h-10 rounded-full flex justify-center">
              <FaScroll className="place-self-center" />
            </div>
            <div className="col col-span-2">
              <span className="flex flex-col">
                <p className="text-[#c6c6c6] text-xs">Writing Courses</p>
                <p className="font-semibold text-sm">102 h 4omin</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
