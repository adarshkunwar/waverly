import React from "react";
import img from "../img/waverly default.png";
const Nav = ({ logIn }) => {
  // chnage this accordingly. Make it props or wahtever you wish
  //   this will change later on

  return (
    <div className="absolute w-[40rem] -mt-8">
      <div className="flex justify-between">
        <div>
          <img src={img} alt="" className="w-36 h-36" />
          {logIn && <h1>Image khai bey paro tataxa</h1>}
        </div>
      </div>
      {/* {activeTab} */}
    </div>
  );
};

export default Nav;
