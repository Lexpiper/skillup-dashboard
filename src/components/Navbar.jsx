import React from "react"
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="h-[80px] dark:text-slate-400 border-b-[0.5px] dark:border-b-gray-500 border-b-[rgb(231,228,228)] flex items-center justify-between text-[14px] text-[#555]">
      <div className="flex items-center gap-3 pl-4">
        <span className="border-none cursor-pointer text-black text-base text-center hover:border-b-2 hover:border-solid hover:border-black transition-all ease-in-out delay-100 py-7">
          Dashboards
        </span>
        <span className="border-none cursor-pointer text-black text-base text-center hover:border-b-2 hover:border-solid hover:border-black transition-all ease-in-out delay-100 py-7">
          Learn
        </span>
        <span className="border-none cursor-pointer text-black text-base text-center hover:border-b-2 hover:border-solid hover:border-black transition-all ease-in-out delay-100 py-7">
          Statistic
        </span>
        <span className="border-none cursor-pointer text-black text-base text-center hover:border-b-2 hover:border-solid hover:border-black transition-all ease-in-out delay-100 py-7">
          Courses
        </span>
        <span className="border-none cursor-pointer text-black text-base text-center hover:border-b-2 hover:border-solid hover:border-black transition-all ease-in-out delay-100 py-7">
          Settings
        </span>
      </div>
      <div className="flex items-center gap-3 pr-4">
        <input type="text" placeholder="write something" className="outline-none border-[1px] placeholder:p-1 p-1 cursor-pointer placeholder:text-black rounded-full border-solid border-gray-700"/>
        <span className="text-lg bg-white p-2 border-2 rounded-full cursor-pointer">
          <IoIosNotificationsOutline/>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
