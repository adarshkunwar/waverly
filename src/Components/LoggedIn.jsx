import React, { useState } from "react";
import MintOperation from "./MintOperation";
import PostOperation from "./PostOperation";

const LoggedIn = () => {
  const [activeTab, setActiveTab] = useState("Post");
  let mode;
  if (activeTab === "Post") mode = <PostOperation />;
  if (activeTab === "Mint") mode = <MintOperation />;

  return (
    <div className="w-[40rem] h-[25rem] border-red-300 border relative">
      {/* top */}
      <div className="w-full absolute grid grid-cols-2 gap-10 mt-20 px-5 rounded-lg">
        <button onClick={() => setActiveTab("Post")}>POST</button>
        <button onClick={() => setActiveTab("Mint")}>MINT</button>
      </div>
      <div className="absolute top-0 bg-green-200"></div>
      {mode}
    </div>
  );
};

export default LoggedIn;
