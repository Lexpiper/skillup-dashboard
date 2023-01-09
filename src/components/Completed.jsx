import React from "react";
import { MdOutlineComputer } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoMdFlash } from "react-icons/io";
import { BiPaint } from "react-icons/bi";

const Completed = () => {
  const percentage = Math.floor(Math.random() * 100) + 1; 
  const int = Math.floor(Math.random() * 3) + 1;
  const percentageTwo = Math.floor(Math.random() * 100) + 1;
  const percentageThree = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="grid md:grid-cols-3 items-center gap-4 py-2 animate__animated animate__backInUp animate__faster">
      <div className=" h-48 col-span-1/3 bg-[#f7d6e8] grid grid-rows-2 gap-y-5 p-4 rounded-lg hover:">
        <div className="flex justify-center bg-[#ffdfef] w-14 h-14 rounded-full">
          <MdOutlineComputer className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">Software Development</p>
          <ProgressBar
            completed="100"
            bgColor="green"
            height="3px"
            baseBgColor="#bcbfe7"
            isLabelVisible={true}
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="text-xs text-[#a2a5c8]">Completed ✔</p>
            <p className="text-xs text-[#a2a5c8]">
              <span  className="text-green-700">3/3</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-48 col-span-1/3 bg-[#d09cfad7] grid grid-rows-2 gap-y-5 p-4 rounded-lg">
        <div className="flex justify-center bg-[#dcb6fb] w-14 h-14 rounded-full">
          <MdDesignServices className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">UX Modelling</p>
          <ProgressBar
            completed="100"
            bgColor="green"
            height="3px"
            baseBgColor="#d0dad2"
            isLabelVisible="true"
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="text-xs text-[#a2a5c8]">Completed ✔</p>
            <p className="text-xs text-[#a2a5c8]">
              <span className="text-green-700">3/3</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-48 col-span-1/3 bg-[#CFDAC8] grid grid-rows-2 gap-y-5 p-4 rounded-lg">
        <div className="flex justify-center bg-[#e0ebd9] w-14 h-14 rounded-full">
          <BiPaint className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">Quick Sketching</p>
          <ProgressBar
            completed="100"
            bgColor="green"
            height="3px"
            baseBgColor="#e7dea6"
            isLabelVisible="true"
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="text-xs text-[#a2a5c8]">Completed ✔</p>
            <p className="text-xs text-[#a2a5c8]">
              <span className="text-green-700">3/3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
