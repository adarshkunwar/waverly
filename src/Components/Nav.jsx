import React from "react";
import img from "../img/waverly default.png";
const Nav = (props) => {
  // chnage this accordingly. Make it props or wahtever you wish
  // let loggedIn = false;
  //   this will change later on

  return (
    <div className="absolute w-[40rem] -mt-8">
      <div className="flex justify-between">
        <div>
          <img src={img} alt="" className="w-36 h-36" />
        </div>
      </div>
      {/* {activeTab} */}
    </div>
  );
};

export default Nav;
