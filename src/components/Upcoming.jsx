import React from "react";
import { FaUserNurse } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdAnimation } from "react-icons/md";
import { BsFillPenFill } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";



const Upcoming = () => {
   
  return (
    <div className="grid md:grid-cols-3 items-center gap-4 py-2 animate__animated animate__backInUp animate__faster">
      <div className=" h-48 col-span-1/3 bg-[#eee] grid grid-rows-2 gap-y-5 p-4 rounded-lg hover:">
        <div className="flex justify-center bg-[#dedada] w-14 h-14 rounded-full">
          <FaUserNurse className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">Nursing</p>
          <ProgressBar
            completed="0"
            bgColor="green"
            height="3px"
            baseBgColor="#CDD0CB"
            isLabelVisible={true}
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="flex items-center gap-2 text-xs text-[#a2a5c8]">Loading<AiOutlineLoading3Quarters className="animate-spin text-black"/></p>
            <p className="text-xs text-[#a2a5c8]">
              <span className="text-black">0/3</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-48 col-span-1/3 bg-[#eee] grid grid-rows-2 gap-y-5 p-4 rounded-lg">
        <div className="flex justify-center bg-[#dedada] w-14 h-14 rounded-full">
          <MdAnimation className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">Animation</p>
          <ProgressBar
            completed="0"
            bgColor="green"
            height="3px"
            baseBgColor="#CDD0CB"
            isLabelVisible="true"
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="flex items-center gap-2 text-xs text-[#a2a5c8]">Loading<AiOutlineLoading3Quarters className="animate-spin text-black"/></p>
            <p className="text-xs text-[#a2a5c8]">
              <span className="text-black">0/3</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-48 col-span-1/3 bg-[#eee] grid grid-rows-2 gap-y-5 p-4 rounded-lg">
        <div className="flex justify-center bg-[#dedada] w-14 h-14 rounded-full">
          <BsFillPenFill className=" place-self-center text-2xl " />
        </div>
        <div>
          <p className="font-semibold text-sm pb-2">Copy Writing</p>
          <ProgressBar
            completed="0"
            bgColor="green"
            height="3px"
            baseBgColor="#CDD0CB"
            isLabelVisible="true"
            labelSize="0px"
          />
          <div className="flex items-center justify-between pt-3">
            <p className="flex items-center gap-2 text-xs text-[#a2a5c8]">Loading<AiOutlineLoading3Quarters className="animate-spin text-black"/></p>
            <p className="text-xs text-[#a2a5c8]">
              <span className="text-black">0/3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
