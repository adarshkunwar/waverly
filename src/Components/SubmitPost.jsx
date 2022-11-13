import React, {useState} from "react";
// import Deso from "deso-protocol";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Submit.css';
import {FaLink} from "react-icons/fa";

export default function SubmitPost({ response, toggleSubmit }) {
  // const imgURLar = imgs.map((img)=>{return img.name})
  // var imgURLar = imgs.map(function (item) {
  //   return item["name"];
  // });
  const [checkBoxActive, setCheckBoxActive] = useState(false)      

  setTimeout(()=> {
    document.getElementById("check").checked = true;
    setCheckBoxActive(true);
  }, 1000)


  // const handleSubmitPost = ()=>{console.log(typeof(imgURLar));}
  // const handleSubmitPost = async () => {
  //   try {
  //     const pub_key = localStorage.getItem("user_key");
  //     const deso = new Deso();
  //     const request = {
  //       UpdaterPublicKeyBase58Check: pub_key,
  //       BodyObj: {
  //         Body: text,
  //         VideoURLs: [],
  //         ImageURLs: imgURLar,
  //       },
  //     };
  //     const response = await deso.posts.submitPost(request);
  //     console.log(response);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleSubmitPost = async () => {
  //   try {
  //     const pub_key = localStorage.getItem("user_key");
  //     const deso = new Deso();
  //     const imgURLar = [imgURLs[0].name]
  //     console.log(imgURLar);
      // const request = {
      //   UpdaterPublicKeyBase58Check: pub_key,
      //   BodyObj: {
      //     Body: bodyText,
      //     VideoURLs: [],
      //     ImageURLs: imgURLar,
      //   },
      // };
      // const response = await deso.posts.submitPost(request);
      // console.log(response);
      // window.location.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (

    // main border
    <div className="w-[40rem] h-[25rem] border-red-200 border ">
      <button
        onClick={() => toggleSubmit(false)}
        className=" absolute top-20 left-5 text-3xl  focus:outline-none bg-[#efefef] logout"
      >
        <IoArrowBackCircleOutline />
      </button>
       <div className="w-[40rem]  ">
       <input type="checkbox" id="check"/>
      <label htmlFor="check">
         <div className="check-icon"></div>
      </label>
        {/* <div className="mt-36 mx-5 break-words flex gap-2"> 
          <div className="text">
            <div className="w-72 text-center">{text.slice(0, 220)}</div>
          </div>
          <div className="image">
            <b></b>
            {imgs.map((img) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    key={img.id}
                    src={img.name}
                    className="w-80 h-40 object-contain"
                    alt="no img"
                  />
                </div>
              );
            })}
          </div>
        </div> */}
        {/* <button onClick={()=>toogleSubmit(false)} className="absolute top-60 left-52 btn focus:outline-none bg-[#efefef] bigbtn"> */}
        <a href={`https://diamondapp.com/posts/${response.submittedTransactionResponse.PostEntryResponse.PostHashHex}`} target="_blank" rel="noreferrer"><button
          // onClick={handleSubmitPost}
          className={` absolute flex items-center gap-2 top-[16rem] left-[13.2rem] btn focus:outline-none bg-[#efefef] bigbtn ${checkBoxActive?"block":"hidden"}`}
        >
          <span className=" text-blue-500 flex gap-2 items-center mt-1"><span className="-mt-0.5"><FaLink/></span><span className="diamondfont">VIEW POST</span></span>
        </button>
        </a>
      </div>
    </div>
  );
}
