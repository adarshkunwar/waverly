import React, { useState } from "react";
// import PropTypes from "prop-types";
import Deso from "deso-protocol";
import MintOperation from "./MintOperation";
import PostOperation from "./PostOperation";
import { CgLogOff } from "react-icons/cg";
import { IconContext } from "react-icons";
const LoggedIn = ({ logIn }) => {
  // let history = useHistory();
  const handleLogOut = async () => {
    const deso = new Deso();
    const request = localStorage.getItem("deso_user_key");
    const response = await deso.identity.logout(request);
    localStorage.setItem("isLoggedIn", !response);
    // history.push("/");
    window.location.reload();
  };

  const [activeTab, setActiveTab] = useState("post");
  let tab;
  if (activeTab === "post") tab = <PostOperation />;
  if (activeTab === "mint") tab = <MintOperation />;
  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border scale relative">
      {/* top */}
      <div className="w-full grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
        <button
          onClick={() => setActiveTab("post")}
          className={`bigbtn ${
            activeTab === "post" ? "bg-green-500" : "bg-[#efefef]"
          }`}
        >
          Put a post
        </button>
        <button
          onClick={() => setActiveTab("mint")}
          className={`bigbtn ${
            activeTab === "mint" ? "bg-green-500" : "bg-[#efefef]"
          }`}
        >
          Mint an NFT
        </button>
        <button className="logout" onClick={handleLogOut}>
          <IconContext.Provider value={{ color: "red", size: "27px" }}>
            <CgLogOff style={{ size: "200px" }} />
          </IconContext.Provider>
        </button>
      </div>
      <div className="absolute top-0 bg-green-200"></div>
      {tab}
    </div>
  );
};

export default LoggedIn;
