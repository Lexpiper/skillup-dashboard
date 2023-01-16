import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SIdebar from "../components/SIdebar";
import Star from "../components/Star";
import Emptystar from "../components/Emptystar";
import { CourseList } from "../dummy";

const Courses = () => {
  return (
    <div className="courses">
      <SIdebar />
      <div className="flex-[1] p-0 md:px-8 ml-1  md:ml-60">
        <Navbar />
        <div className="flex flex-col md:grid md:grid-cols-4 gap-4 items-center justify-center  bg-[#eee] text-sm p-4 h-fit">
          {CourseList.map((course) => (
            <div
              key={course.id}
              className="Flex bg-white px-4 py-4 w-full drop-shadow-md rounded-lg "
            >
              <div className="w-full h-full">
                <img src={course.img} alt="photo" className="object-contain " />
              </div>
              <h1 className="text-base font-bold pb-2">{course.courseTitle}</h1>
              <p className="text-[#d1d1d1] pb-2 text-xs">
                {course.tutor}, {course.role}
              </p>
              <p className="flex items-center text-red-500 font-semibold pb-2">
                {course.rating}{" "}
                <span className="flex item-center ml-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star key={num} />
                  ))}
                  <Emptystar />
                </span>
                <span className="text-[#d1d1d1] ml-1 ">(30,000)</span>
              </p>
              <p className=" text-lg font-bold pb-3">
                {course.price}{" "}
                <span className="text-[#d1d1d1] ml-2">{course.oldPrice}</span>
              </p>
              <Button text={"Enroll now"} hover={'hover:bg-[#b674f0]'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

// src=""
