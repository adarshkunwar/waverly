import React from "react";
import img from "../img/waverly default.png";
const Nav = ({ logIn }) => {
  // chnage this accordingly. Make it props or wahtever you wish
  //   this will change later on

  return (
    <div className="absolute w-[40rem] navbar  ">
      <div className="flex justify-between">
        <nav>
          <img src={img} alt="" className="w-36 h-30" />
        </nav>
      </div>
      {/* {activeTab} */}
    </div>
  );
};

export default Nav;
