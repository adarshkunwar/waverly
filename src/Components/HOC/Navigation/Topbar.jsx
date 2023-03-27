import React from "react";

const Topbar = () => {
  return (
    <div className="w-11/12 mx-auto py-2 flex justify-between items-center">
      <div>Logo</div>
      <button className="px-5 py-2 bg-tertiary rounded-full text-black">
        Connect Wallet
      </button>
    </div>
  );
};

export default Topbar;
