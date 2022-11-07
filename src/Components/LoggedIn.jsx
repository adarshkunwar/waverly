import React from "react";
import PropTypes from "prop-types";

const LoggedIn = (prop) => {
  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border">
      {/* top */}
      <div className="w-full grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
        <button>Put a post</button>
        <button>Mint an NFT</button>
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
