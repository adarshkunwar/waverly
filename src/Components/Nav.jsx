import React from "react";
import img from "../img/waverly default.png";
const Nav = (props) => {
  // change this accordingly. Make it props or wahtever you wish
  let loggedIn = false;
  //   this will change later on

  return (
    <div className="absolute w-[40rem]  navbar">
      <div className="flex justify-between">
        <div>
          <img src={img} alt="" className="w-39 h-12" />
        </div>
      </div>
      {/* {activeTab} */}
    </div>
  );
};

export default Nav;
