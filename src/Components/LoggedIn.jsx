import React from "react";
import PropTypes from "prop-types";

const LoggedIn = (prop) => {
  return (
    <div className="w-[40rem] h-[25rem] relative border-red-300 border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">
        <div>What whould you like to do?</div>
        <div className="flex justify-evenly">
          <button className="mt-5 bg-red-400 py-2 px-5 rounded-xl hover:mt-3 text-lg">
            Put a post
          </button>
          <button className="mt-5 bg-red-400 py-2 px-5 rounded-xl hover:mt-3 text-lg">
            mint an NFT
          </button>
        </div>
      </div>
    </div>
  );
};

LoggedIn.prototype = {
  name: PropTypes.string,
};

LoggedIn.defaultProps = {
  name: "jello",
};

export default LoggedIn;
