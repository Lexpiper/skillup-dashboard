import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiLevelEndFlag } from "react-icons/gi";
import { SiConcourse } from "react-icons/si";
import { IoLogoOctocat } from "react-icons/io";

import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const SIdebar = () => {
  const percentage = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="hidden md:flex justify-center bg-black fixed top-0 left-0 py-4 h-screen w-[270px] text-white">
      <div className="p-2 h-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl pt-4 ">
          Ski<span className="text-4xl">ll</span>up
        </h1>
        <div className=" flex flex-col items-center mt-2">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="avatar"
            className=" w-20 h-20 rounded-[50%] mb-2"
          />
          <h3 className="text-white text-lg pb-1">Jenny Brunson</h3>
          <p className="text-[#4a4a4a] text-xs pb-2">New York, USA</p>
          <span className="bg-[#5a5a5a] px-2 py-1 rounded-full text-xs">
            23 level
          </span>
        </div>
        <div className="p-4 w-52  ">
          <CircularProgressbarWithChildren
          className=""
            value={percentage}
            strokeWidth={1}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "16px",
              pathTransitionDuration: 0.5,
              pathColor: `white`,
              textColor: "#f88",
              trailColor: "#3a3a3a",
      
              backgroundColor: "#3e98c7",
            })}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-semibold">{percentage}</h1>
              <p className="text-xs p-2 text-center font-thin text-[#4a4a4a]">
                {percentage} to reach a new level
              </p>
            </div>
          </CircularProgressbarWithChildren>
          <div className="flex items-center mt-4 gap-2 ">
            <div className="flex flex-col items-center">
              <span className="bg-[#5a5a5a] p-2 rounded-full ">
                <AiOutlineCheckCircle className="text-[#e6e6e6]" />
              </span>
              <p className="text-xs pt-1 text-dimWhite">Hours</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#5a5a5a] p-2 rounded-full ">
                <GiLevelEndFlag className="text-[#e6e6e6]" />
              </span>
              <p className="text-xs pt-1 text-dimWhite">Lvl</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#5a5a5a] p-2 rounded-full ">
                <SiConcourse className="text-[#e6e6e6]" />
              </span>
              <p className="text-xs pt-1 text-dimWhite">Exp</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-[#5a5a5a] p-2 rounded-full ">
                <IoLogoOctocat className="text-[#e6e6e6]" />
              </span>
              <p className="text-xs pt-1 text-dimWhite">Courses</p>
            </div>
          </div>
          <div className="text-center pt-10">
            <h2>Hey,Jenny! 👋</h2>
            <p className="text-[#4a4a4a] text-xs">Here's a complex overview of your progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIdebar;
