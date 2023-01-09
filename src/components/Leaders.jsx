import React from "react";
import { Leads } from "../dummy";

const Leaders = () => {
  return (
    <div className="grid grid-cols-1 ">
      <div className="flex items-center justify-between pt-4">
        <h1 className="text-xl font-semi">Leaders</h1>
        <span className="text-sm cursor-pointer hover:text-slate-500">
          view all
        </span>
      </div>
      {Leads.map((item) => (
        <div key={item.id}  className="flex items-center pt-4 animate__animated animate__fadeInTopRight animate__faster">
          <img
            src={item.img}
            alt="Avatar"
            className="w-9 h-9 rounded-full mr-4 object-cover"
          />
          <div className="flex-1">
            <h1 className="text-sm">{item.name}</h1>
            <p className="text-xs text-[#c3c3c3]">{item.location}</p>
          </div>
          <p className={`text-xs px-2 py-1 bg-[#fbeeb3] rounded-full ${item.level > 10 ? 'bg-green-300': 'bg-red-200'} `}>
           Level {item.level}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Leaders;
