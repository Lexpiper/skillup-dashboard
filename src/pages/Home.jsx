import React from "react";
import Navbar from "../components/Navbar";
import SIdebar from "../components/SIdebar";
import Statistics from "../components/Statistics";
import Widgets from "../components/Widgets";
import Leaders from "../components/Leaders";
import Advert from "../components/Advert";



const Home = () => {


  return (
    <div className="flex flex-6">
      <SIdebar />
      <div className="flex-1 p-0 md:px-8 ml-1  md:ml-60">
        <Navbar />
        <div className="flex items-center w-full h-screen">
          <div className="b w-full  md:w-[70%] h-screen p-4 ">
            <Widgets />
            <Statistics />
          
          </div>
          <div className="h-screen  md:w-[30%] hidden md:grid">
            <Leaders />
            <Advert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
