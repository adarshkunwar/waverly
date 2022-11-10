// comment from alex, embedded btn still have work to do. only the design is done

import React, { useState } from "react";
import Deso from 'deso-protocol';
import { BiImageAdd } from "react-icons/bi";
import { IconContext } from "react-icons";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ImEmbed } from "react-icons/im";
import EmbeddBtn from "./EmbeddBtn";
const PostOperation = () => {
  const [textBoxActive, setTextBoxActive] = useState(false);
  const [imgAddColor  , setImgAddColor  ] = useState("red");
  const imgURLs = [];
  const [bodyText, setBodyText] = useState("");

  const handleUploadImage = async()=>{
    try {
      console.log("upload image clicked");
      console.log(bodyText);
      const pub_key = localStorage.getItem("user_key")
      const deso = new Deso();
      const request = {
        "UserPublicKeyBase58Check": pub_key
      };
      const response = await deso.media.uploadImage(request);
      imgURLs.push(response.ImageURL);
      setImgAddColor("green");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div>
        {/* text area */}
        <textarea
          id="textbox"
          className="textbox border-2 resize-none bg-slate-300 w-[37rem] mt-3 px-5 mx-5 focus:outline-none"
          rows="7"
          cols="50"
          value={bodyText}
          onChange={(e)=>setBodyText(e.target.value)}
        ></textarea>
        {/* btn start here */}
        <div className="buttons mt-2 flex justify-between">
          {/* left buttons start here */}
          <div className="left-buttons flex">
            <div className="img-upload">
              <button className="logout mr-5  scale-75">
                <IconContext.Provider value={{ color: `${imgAddColor}`, size: "27px" }}>
                  <BiImageAdd style={{ size: "200px" }} onClick={handleUploadImage}/>
                </IconContext.Provider>
              </button>
            </div>
            <div className="embedd">
              <div className={`${textBoxActive ? "mt-5" : "mt-0"}`}>
                <EmbeddBtn visibility={textBoxActive} setVisibility={setTextBoxActive}/>
              </div>
              <button
                className="logout mr-5  scale-75"
                onClick={() => setTextBoxActive(!textBoxActive)}
              >
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <HiOutlineExternalLink style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
            </div>
            {/* use upload image api to generate link for uploaded image */}
            {/* https://images.deso.org/32df342003addbc897b431522b16eff800b6313b85f9ebac91c3f5ae88da8f76.webp */}
            {/* while submiting post use the url */}
            {/* areweave image acts as the imgae url directly no upload image requred */}
            {/* image urls has string array */}
            <div className="areweave">
              <button
                className="logout mr-5  scale-75"
                onClick={() => setTextBoxActive(!textBoxActive)}
              >
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <ImEmbed style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
            </div>
          </div>
          {/* right buttons start here */}
          <div className="right-button">
            <button
              onClick={() => setTextBoxActive(false)}
              className=" btn focus:outline-none bg-[#efefef] bigbtn"
            >
              PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOperation;
