import React, { useState } from "react";
import "animate.css";
import Inprogress from "./Inprogress";
import Completed from "./Completed";
import Upcoming from "./Upcoming";

const Widgets = () => {
  const [active, setActive] = useState("Inprogress");

  const data = [
    {
      id: "1",
      title: "Inprogress",
    },
    {
      id: "2",
      title: "Upcoming",
    },
    {
      id: "3",
      title: "Completed",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full text-sm">
        <div className="flex items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center  text-black text-bold"
            >
              <span
                onClick={() => setActive(item.title)}
                className={`${
                  active === item.title ? "font-semibold" : null
                } pl-2 cursor-pointer transition-all ease-in-out duration-100`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="text-[#9bc5d6]  text-xs cursor-pointer hover:text-[#7c9ba7] transition-all ease-in-out duration-100">
          View all
        </div>
      </div>
      {active === "Inprogress" ? <Inprogress /> : null}
      {active === "Completed" ? <Completed /> : null}
      {active === "Upcoming" ? <Upcoming /> : null}
    </div>
  );
};

export default Widgets;
