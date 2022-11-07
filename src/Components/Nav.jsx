import React from "react";

const Nav = (props) => {
  // chnage this accordingly. Make it props or wahtever you wish
  let loggedIn = false;
  //   this will change later on

  return (
    <div className="absolute w-[40rem] bg-green-400 pt-1 pb-2 px-10 text-2xl">
      <div className="flex justify-between">
        <div>logo</div>
        <div
          className="bg-red-100 rounded-full px-5 py-2"

        >
          {loggedIn ? "Log out" : "log in"}
        </div>
      </div>
      {/* {activeTab} */}
    </div>
  );
};

export default Nav;
