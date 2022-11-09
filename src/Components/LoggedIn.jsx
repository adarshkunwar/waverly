<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import PostOperation from "./PostOperation";
import MintOperation from "./MintOperation";
const LoggedIn = ({ logIn }) => {
  // let history = useHistory();
>>>>>>> 6e30215675179806e254fd0f8057c2a07ce2281c

  const [activeTab, setActiveTab] = useState("post");
  let tab;
  if (activeTab === "post") tab = <PostOperation />;
  if (activeTab === "mint") tab = <MintOperation />;

  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border scale ">
      {/* top */}
      <div className="w-full grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
<<<<<<< HEAD
      <Link to="/post"><button className="bigbtn">Put a post</button></Link>
        <button className="bigbtn">Mint an NFT</button>
=======
        <button
          onClick={() => setActiveTab("post")}
          className={`bigbtn ${
            activeTab === "post" ? "logout-active bg-[#efefef]" : "bg-[#efefef]"
          }`}
        >
          Put a post
        </button>
        <button
          onClick={() => setActiveTab("mint")}
          className={`bigbtn ${
            activeTab === "mint" ? "logout-active bg-[#efefef]" : "bg-[#efefef]"
          }`}
        >
          Mint an NFT
        </button>
>>>>>>> 6e30215675179806e254fd0f8057c2a07ce2281c
      </div>
      {tab}
    </div>
  );
};

export default LoggedIn;
