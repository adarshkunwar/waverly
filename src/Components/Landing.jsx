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
          <button className="mt-5 bg-red-400 py-2 px-10 rounded-xl hover:mt-3">
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
