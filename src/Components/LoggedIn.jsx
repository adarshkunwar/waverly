import React, {useState} from "react";
import PostOperation from "./PostOperation";
import MintOperation from "./MintOperation";


const LoggedIn = ({ logIn }) => {

  const [activeTab, setActiveTab] = useState("post");
  let tab;
  if (activeTab === "post") tab = <PostOperation />;
  if (activeTab === "mint") tab = <MintOperation />;

  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border">
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
      </div>
      {tab}
    </div>
  );
};


export default LoggedIn;
