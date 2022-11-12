import React from "react";
import { RiImageAddFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const MintOperation = () => {
  return (
    <div className="flex">
      <div>
        <textarea
          id="textbox"
          className="rounded-xl textbox border-2 resize-none text-lg pt-2 bg-[#efefef] w-[17.5rem] mt-4 px-5 mx-5 focus:outline-none"
          rows="5"
          cols="1"
          placeholder="Enter your post"
        ></textarea>
        <div className="flex">
          <div className="img-upload">
            <button className="logout mr-5  scale-75">
              <IconContext.Provider value={{ size: "27px" }}>
                <RiImageAddFill style={{ size: "200px" }} />
              </IconContext.Provider>
            </button>
          </div>
          <div>Number of copies</div>
        </div>
      </div>

      <div>secondy text</div>
    </div>
  );
};

export default MintOperation;

