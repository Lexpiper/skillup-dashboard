import React from "react";
import { MdOutlineDescription } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoMdFlash } from "react-icons/io";
import { BiPaint } from "react-icons/bi";



const Inprogress = () => {
  const percentage = Math.floor(Math.random() * 100) + 1;
  const int = Math.floor(Math.random() * 3) + 1;
  const percentageTwo = Math.floor(Math.random() * 100) + 1;
  const percentageThree = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="grid md:grid-cols-3 items-center gap-4 py-2 animate__animated animate__backInUp animate__faster">
      <div className=" h-48 col-span-1/3 bg-[#d2d4ff] grid grid-rows-2 gap-y-5 p-4 rounded-lg hover:">
        <div className="flex justify-center bg-[#ccccdc] w-14 h-14 rounded-full">
          <MdOutlineDescription className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">Scripts writing</p>
          <ProgressBar
            completed={percentage}
            bgColor="#0f1012"
            height="3px"
            baseBgColor="#bcbfe7"
            isLabelVisible={true}
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="text-xs text-[#a2a5c8]">intensive</p>
            <p className="text-xs text-[#a2a5c8]">
              <span>{int}</span>/3
            </p>
          </div>
        </div>
      </div>
      <div className=" h-48 col-span-1/3 bg-[#e1ece4] grid grid-rows-2 gap-y-5 p-4 rounded-lg">
        <div className="flex justify-center bg-[#d6e0d8] w-14 h-14 rounded-full">
          <IoMdFlash className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">UX Modelling</p>
          <ProgressBar
            completed={percentageTwo}
            bgColor="#0f1012"
            height="3px"
            baseBgColor="#d0dad2"
            isLabelVisible="true"
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="text-xs text-[#a2a5c8]">intensive</p>
            <p className="text-xs text-[#a2a5c8]">
              <span>{int}</span>/3
            </p>
          </div>
        </div>
      </div>
      <div className=" h-48 col-span-1/3 bg-[#fcefb4] grid grid-rows-2 gap-y-5 p-4 rounded-lg">
        <div className="flex justify-center bg-[#efe4ac] w-14 h-14 rounded-full">
          <BiPaint className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">Quick Sketching</p>
          <ProgressBar
            completed={percentageThree}
            bgColor="#0f1012"
            height="3px"
            baseBgColor="#e7dea6"
            isLabelVisible="true"
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="text-xs text-[#a2a5c8]">intensive</p>
            <p className="text-xs text-[#a2a5c8]">
              <span>{int}</span>/3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inprogress;
