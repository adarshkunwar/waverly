import React from "react";
import { Link } from "react-router-dom";
// import Deso from 'deso-protocol';
const LoggedIn = ({ logIn }) => {
  // let history = useHistory();
  // const handleLogOut = async () => {
  //   const deso = new Deso();
  //   const request = localStorage.getItem("deso_user_key");
  //   const response = await deso.identity.logout(request);
  //   localStorage.setItem('isLoggedIn', !response);
  //   // history.push("/");
  //   window.location.reload();

  // }


  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border">
      {/* top */}
      <div className="w-full grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
      <Link to="/post"><button className="bigbtn">Put a post</button></Link>
        <button className="bigbtn">Mint an NFT</button>
      </div>
    </div>
  );
};

// LoggedIn.prototype = {
//   name: PropTypes.string,
// };

// LoggedIn.defaultProps = {
//   name: "jello",
// };

export default LoggedIn;
