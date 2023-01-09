import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-circular-progressbar/dist/styles.css";
import { Rated } from "../dummy";

const Demand = () => {
  return (
    <div className="flex items-center flex-col pt-10 bg-red h-fit">
      <h1 className="pb-8 font-bold">Top Trending Courses on the Internet</h1>
      {Rated.map((item) => (
        <div key={item.id} className=" items-center flex  w-full justify-between bg-gray-300 pt-4 px-4">
          <div className=" w-full">
            <h1 className="mr-8">{item.name}</h1>
          </div>
          <div className="w-full ">
            <ProgressBar
              completed={item.rating}
              bgColor="#0f1012"
              height="3px"
              baseBgColor="#bcbfe7"
              isLabelVisible={true}
              labelSize="0px"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Demand;
