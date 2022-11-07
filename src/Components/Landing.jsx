import React from "react";

const Landing = () => {
  return (
    <div className="w-[40rem] h-[25rem] border-red-200 border">
      <div className="w-full h-full flex justify-center items-center text-center">
        <div>
          <div className="text-3xl text-center">
            It seems like you are not logged in.
            <br />
            Remedy that?
          </div>
          <button className="absolute top-64 left-64 px-5 py-2 btn">
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
