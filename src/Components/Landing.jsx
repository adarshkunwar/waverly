import React from "react";

const Landing = () => {
  return (
    <div className="w-[40rem] h-[25rem] border-red-200 border ">
      <div className="w-full h-full flex justify-center items-center   text-center">
        <div>
          <div className="absolute top-36 left-36 text-3xl text-center">
            Welcome to Waverly 🌊
          </div>
          <button className="absolute rounded-button top-60 left-52 btn focus:outline-none">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
