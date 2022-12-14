
import React, { useState } from "react";
import SubmitPost from "./SubmitPost";
import Deso from 'deso-protocol';

import {RiImageAddFill} from "react-icons/ri"
import { IconContext } from "react-icons";
// import { HiOutlineExternalLink } from "react-icons/hi";
import { ImEmbed } from "react-icons/im";
import EmbeddBtn from "./EmbeddBtn";

const PostOperation = ({submit, setSubmit}) => {
  const [imgURLs, setImgURLs] = useState([]);
  const [bodyText, setBodyText] = useState("");
  const [textBoxActive2, setTextBoxActive2] = useState(false);
  const [divImg, setDivImg] = useState("");
  const [submitResponse, setSubmitResponse] = useState();
  if (submit === true) {
    return <SubmitPost response = {submitResponse} toggleSubmit={setSubmit}/>
  }

  const handleUploadImage = async()=>{
    try {
      const pub_key = localStorage.getItem("user_key")
      const deso = new Deso();
      const request = {
        "UserPublicKeyBase58Check": pub_key
      };
      const response = await deso.media.uploadImage(request);
      setImgURLs([...imgURLs,{id:imgURLs.length,name:response.ImageURL}]);
      setDivImg(response.ImageURL.toString());
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmitPost = async () => {
    try {
      const pub_key = localStorage.getItem("user_key");
      const deso = new Deso();
      let imgURLar = [];
      if(Object.keys(imgURLs).length !== 0){
        imgURLar = [imgURLs[imgURLs.length-1].name];
      }
      const request = {
        UpdaterPublicKeyBase58Check: pub_key,
        BodyObj: {
          Body: bodyText,
          VideoURLs: [],
          ImageURLs: imgURLar,
        },
      };
      if(bodyText.length!==0 || Object.keys(imgURLs).length !== 0)
      {
        const response = await deso.posts.submitPost(request);
        console.log(response);
        setSubmitResponse(response)
        setBodyText("");
        setImgURLs([]);
        setDivImg("");
        setSubmit(true);
      }
      else{
        console.log("One should be present!")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        {/* text area */}
      <div className="flex">
      <textarea
          id="textbox"
          className="rounded-xl textbox border-2 resize-none text-lg pt-2 bg-[#efefef] w-[25rem] mt-4 px-5 mx-5 focus:outline-none"
          rows={`${textBoxActive2?'5':'6'}`}
          cols="1"
          placeholder="Enter your post"
          value={bodyText}
          onChange={(e)=>setBodyText(e.target.value)}
        ></textarea>
        <div className="border-2 mt-7 mb-3 w-[11rem] rounded-lg">
        <img src={
          divImg
        } alt=""/>
        {/* <img src={""} alt=""/> */}
        </div>
      </div>
        <EmbeddBtn
                visibility={textBoxActive2}
              />
        {/* btn start here */}
        <div className="buttons mt-2 px-5 flex justify-between">
          {/* left buttons start here */}
          <div className="left-buttons -space-x-5 flex">
            {/* img upload btn start here */}
            <div className="img-upload">
              <button className="logout mr-5  scale-75" onClick={handleUploadImage}>
                <IconContext.Provider value={{ color: "#444", size: "27px" }}>
                  <RiImageAddFill style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
            </div>
            {/* img upload btn ends here */}
            {/* embedd btn starts here */}
            {/* <div className="embedd">
              <div>
                <EmbeddBtn
                  visibility={textBoxActive1}
                  toggle={setTextBoxActive1}
                />
              </div>
              <button
                className="logout mr-5 scale-75"
                onClick={() => setTextBoxActive1(!textBoxActive1)}
              >
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <HiOutlineExternalLink style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
            </div> */}
            {/* embedd btn ends here */}
            {/* use upload image api to generate link for uploaded image */}
            {/* https://images.deso.org/32df342003addbc897b431522b16eff800b6313b85f9ebac91c3f5ae88da8f76.webp */}
            {/* while submiting post use the url */}
            {/* areweave image acts as the imgae url directly no upload image requred */}
            {/* image urls has string array */}
            <div className="areweave">
              
              <button
                className="logout mr-5  scale-75"
                onClick={() => setTextBoxActive2(!textBoxActive2)}
              >
                <IconContext.Provider value={{ color: "#444", size: "27px" }}>
                  <ImEmbed style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
            </div>
          </div>
          {/* right buttons start here */}
          <div className="right-button">
            <button onClick={handleSubmitPost} 
              className="select-none btn focus:outline-none bg-[#efefef] bigbtn"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOperation;
