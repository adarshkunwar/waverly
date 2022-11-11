import React, { useState } from "react";
import PostOperation from "./PostOperation";
import MintOperation from "./MintOperation";
const LoggedIn = ({ logIn }) => {
  // let history = useHistory();
  const [preview, setPreview] = useState(false)
  const [activeTab, setActiveTab] = useState("post");
  let tab;
  if (activeTab === "post") tab = <PostOperation preview={preview} setPreview={setPreview}/>;
  if (activeTab === "mint") tab = <MintOperation />;

  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border scale ">
      {/* top */} {!preview && 
      <div className="w-full grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
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
      </div> }
      {tab}

    </div>

  );
};

export default LoggedIn;
