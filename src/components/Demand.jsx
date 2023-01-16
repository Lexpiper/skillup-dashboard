import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "react-circular-progressbar/dist/styles.css";
import { Rated } from "../dummy";

const Demand = () => {

  const sortedRated = Rated.sort((a, b) => {
    return b.rating - a.rating;
  });
  return (
    <div className="flex items-center flex-col mt-10 bg-red h-fit bg-[#eee] text-sm">
      <h1 className="p-4 font-bold">Top Trending Courses on the Internet</h1>
      {sortedRated.map((item) => (
        <div key={item.id} className=" items-center bg-[#eee] flex  w-full justify-between pt-4 px-4">
          <div className=" w-fit drop-shadow-lg mr-8 flex-1 bg-none">
            <h1 className=" bg-white px-4 font-semibold text-sm py-2 rounded-lg ">{item.name}</h1>
          </div>
          <div className="w-full flex-[1.5] ">
            <ProgressBar
            animateOnRender={true}
              completed={item.rating}
              bgColor={'linear-gradient(to right, #bcbfe7, #7e74b5)'}
              height="10px"
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
