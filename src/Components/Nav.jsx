import React from "react";
import img from "../img/waverly default.png";
import { CgLogOff } from 'react-icons/cg';
import { IconContext } from "react-icons";
const Nav = ({ logIn }) => {
  // chnage this accordingly. Make it props or wahtever you wish
  //   this will change later on

  return (
    <div className="absolute w-[40rem] navbar  ">
      <div className="flex justify-between ">
        <nav>
          <img src={img} alt="" className="w-36 h-30 mt-1" />
        </nav>
      
      {logIn?(<button className="logout mr-5 mt-1.5 scale-90" >
          <IconContext.Provider value={{color: "red", size: "27px"}}>
          <CgLogOff style={{size: '200px'}}/>
          </IconContext.Provider>
        </button>):' '}
    </div>
    </div>
  );
};

export default Nav;
