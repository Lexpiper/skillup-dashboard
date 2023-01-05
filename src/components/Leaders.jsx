import React from "react";

const Leaders = () => {
  return (
    <div className="grid grid-cols-1 ">
      <div className="flex items-center justify-between pt-4">
        <h1 className="text-xl font-semi">Leaders</h1>
        <span className="text-sm cursor-pointer hover:text-slate-500">view all</span>
      </div>
      <div className="flex items-center pt-4 animate__animated animate__fadeInTopRight animate__faster">
        <img
          src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Avatar"
          className="w-9 h-9 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <h1 className="text-sm">Jonny Carrot</h1>
          <p className="text-xs text-[#c3c3c3]">Miami, USA</p>
        </div>
        <p className="text-xs px-2 py-1 bg-[#fbeeb3] rounded-full ">level 30</p>
      </div>
      <div className="flex items-center pt-4 animate__animated animate__fadeInTopRight animate__fast">
        <img
          src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Avatar"
          className="w-9 h-9 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <h1 className="text-sm">Jonny Carrot</h1>
          <p className="text-xs text-[#c3c3c3]">Miami, USA</p>
        </div>
        <p className="text-xs px-2 py-1 bg-[#fbeeb3] rounded-full ">level 30</p>
      </div>
      <div className="flex items-center pt-4 animate__animated animate__fadeInTopRight animate__slow">
        <img
          src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Avatar"
          className="w-9 h-9 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <h1 className="text-sm">Jonny Carrot</h1>
          <p className="text-xs text-[#c3c3c3]">Miami, USA</p>
        </div>
        <p className="text-xs px-2 py-1 bg-[#fbeeb3] rounded-full ">level 30</p>
      </div>
      <div className="flex items-center pt-4 animate__animated animate__fadeInTopRight animate__slower">
        <img
          src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Avatar"
          className="w-9 h-9 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <h1 className="text-sm">Jonny Carrot</h1>
          <p className="text-xs text-[#c3c3c3]">Miami, USA</p>
        </div>
        <p className="text-xs px-2 py-1 bg-[#fbeeb3] rounded-full ">level 30</p>
      </div>
    </div>
  );
};

export default Leaders;
