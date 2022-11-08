import React from "react";
import PropTypes from "prop-types";
import Deso from 'deso-protocol';
import { CgLogOff } from 'react-icons/cg';
import { IconContext } from "react-icons";
const LoggedIn = ({ logIn }) => {
  // let history = useHistory();
  const handleLogOut = async () => {
    const deso = new Deso();
    const request = localStorage.getItem("deso_user_key");
    const response = await deso.identity.logout(request);
    localStorage.setItem('isLoggedIn', !response);
    // history.push("/");
    window.location.reload();

  }


  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border">
      {/* top */}
      <div className="w-full grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
        <button className="bigbtn">Put a post</button>
        <button className="bigbtn">Mint an NFT</button>
        <button className="logout" onClick={handleLogOut}>
          <IconContext.Provider value={{color: "red", size: "27px"}}>
          <CgLogOff style={{size: '200px'}}/>
          </IconContext.Provider>
        </button>
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
