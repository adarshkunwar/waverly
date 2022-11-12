import React, { useState } from "react";
import PostOperation from "./PostOperation";
import MintOperation from "./MintOperation";
const LoggedIn = ({ logIn }) => {
  // let history = useHistory();
  const [submit, setSubmit] = useState(false)
  const [activeTab, setActiveTab] = useState("post");
  let tab;
  if (activeTab === "post") tab = <PostOperation submit={submit} setSubmit={setSubmit}/>;
  if (activeTab === "mint") tab = <MintOperation />;

  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border scale ">
      {/* top */} {!submit && 
      <div className="w-full grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
        <button
          onClick={() => setActiveTab("post")}
          className={`bigbtn select-none ${
            activeTab === "post" ? "logout-active bg-[#efefef]" : "bg-[#efefef]"
          }`}
        >
          POST
        </button>
        <button
          onClick={() => setActiveTab("mint")}
          className={`bigbtn select-none ${
            activeTab === "mint" ? "logout-active bg-[#efefef]" : "bg-[#efefef]"
          }`}
        >
          MINT
        </button>
      </div> }
      {tab}

    </div>

  );
};

export default LoggedIn;
