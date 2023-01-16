import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { data } from "../dummy";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("dashboard");
  const [dark, setDark] = useState(false)
  return (
    <div className="h-[80px] dark:text-slate-400 border-b-[0.5px] sticky top-0 z-50 bg-white dark:border-b-gray-500 border-b-[rgb(231,228,228)] flex items-center justify-between text-[14px] text-[#555]">
      <div className="text-3xl w-full flex  md:hidden  py-2 bg-black rounded-md text-center px-4">
        <h1 className=" cursor-pointer">
          <Link to="/">
            Ski<span className="text-4xl text-[#A555EC]">ll</span>up
          </Link>
        </h1>
        <div className="sm:hidden  flex flex-1 justify-end  items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer bg-black"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  bg-black-gradient z-30 p-4 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex  items-center flex-1 flex-col">
              {data.map((item, index) => (
                <li
                  key={item.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                    active === item.title ? "text-white" : "text-[#A555EC]"
                  } ${
                    index === data.length - 1 ? "mb-0" : "mb-4"
                  } hover:text-white`}
                  onClick={() => setActive(item.title)}
                >
                  <Link className="hover:text-secondary" to={`/${item.name}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <div
              onClick={() => setDark(!dark)} className={`flex md:hidden w-20 h-10 rounded-full mt-10 ${dark ? 'bg-black' : " bg-gray-200"}`}>
                <span className={ `${dark ? 'ml-10' : null} h-10 w-10 bg-white rounded-full`}  />
              </div>
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
            <Link
              to={`/${item.name}`}
              className="border-none cursor-pointer text-black text-sm text-center hover:border-b-2 hover:border-solid hover:border-black transition-all ease-in-out delay-100 py-7"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>

    

      <div className="hidden md:flex items-center gap-3 pr-4 ">
        <input
          type="text"
          placeholder="search"
          className="outline-none border-[1px] placeholder:p-1 p-2  placeholder:text-slate-200 placeholder:text-xs rounded-full border-solid border-gray-700 "
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
