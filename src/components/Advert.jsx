import React from "react";

const Advert = () => {
  return (
    <div className="py-4 grid grid-cols-1 ">
      <h1 className="text-xl py-4 font-bold">You may like it</h1>
      <div className="h-60 bg-gradient-to-t from-[#e1ece4] to-[#cbddd0] flex flex-col items-center justify-between rounded-lg mr-6">
        <p className="text-xs place-self-start p-3">Design</p>
        <div className="p-2 text-sm font-semibold">
          <h1>
            User Experience <br /> Design Fundamentals
          </h1>
          <p className="text-xs font-thin text-[#b7c1b9]">
            Create user experience and discover the role of the designer in the
            process
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advert;
