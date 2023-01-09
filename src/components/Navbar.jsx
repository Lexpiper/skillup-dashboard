import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { data } from "../dummy";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("dashboard")
  return (
    <div className="h-[80px] dark:text-slate-400 border-b-[0.5px] dark:border-b-gray-500 border-b-[rgb(231,228,228)] flex items-center justify-between text-[14px] text-[#555]">
      <div className="text-3xl w-full flex  md:hidden  py-2 bg-black rounded-md text-center px-4">
        <h1>
          Ski<span className="text-4xl text-[#A555EC]">ll</span>up
        </h1>
        <div className="sm:hidden  flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer bg-black"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : 'flex'
            }  bg-black-gradient z-30 p-4 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex  items-center flex-1 flex-col">
              {data.map((item,index) => (
                <li
                  key={item.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                    active === item.title ? "text-white" : "text-[#A555EC]"
                  } ${
                    index === data.length - 1 ? "mb-0" : "mb-4"
                  } hover:text-white`}
                  onClick={() => setActive(item.title)}
                >
                  <a className="hover::text-secondary" href={`#${item.title}`}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center ">
        {data.map((item) => (
          <div
            key={item.name}
            className="items-center gap-3 pl-4 font-semibold hidden md:flex"
          >
            <span className="border-none cursor-pointer text-black text-sm text-center hover:border-b-2 hover:border-solid hover:border-black transition-all ease-in-out delay-100 py-7">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3 pr-4 ">
        <input
          type="text"
          placeholder="write something"
          className="outline-none border-[1px] placeholder:p-1 p-2  placeholder:text-black rounded-full border-solid border-gray-700 "
        />
        <span className="text-lg bg-white p-2 border-2 rounded-full cursor-pointer relative ">
          <IoIosNotificationsOutline />
          <div className="absolute right-0 top-0 left--10 text-xs font-semibold  text-white bg-red-400 text-center rounded-full w-4 h-4">
            2
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
