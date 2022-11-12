import React from "react";
import Deso from "deso-protocol";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function PreviewPost({ text, imgs, tooglePreview }) {
  // const imgURLar = imgs.map((img)=>{return img.name})
  var imgURLar = imgs.map(function (item) {
    return item["name"];
  });
  // const handleSubmitPost = ()=>{console.log(typeof(imgURLar));}
  const handleSubmitPost = async () => {
    try {
      const pub_key = localStorage.getItem("user_key");
      const deso = new Deso();
      const request = {
        UpdaterPublicKeyBase58Check: pub_key,
        BodyObj: {
          Body: text,
          VideoURLs: [],
          ImageURLs: imgURLar,
        },
      };
      const response = await deso.posts.submitPost(request);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // main border
    <div className="w-[40rem] h-[25rem] border-red-200 border ">
      <button
        onClick={() => tooglePreview(false)}
        className=" absolute top-20 left-5 text-3xl  focus:outline-none bg-[#efefef] logout"
      >
        <IoArrowBackCircleOutline />
      </button>
      <div className="w-[40rem] h-[25rem] ">
        <div className="mt-36 mx-5 break-words flex gap-2">
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
        </div>
        {/* <button onClick={()=>tooglePreview(false)} className="absolute top-60 left-52 btn focus:outline-none bg-[#efefef] bigbtn"> */}
        <button
          onClick={handleSubmitPost}
          className=" absolute top-[21rem] left-[30rem] btn focus:outline-none bg-[#efefef] bigbtn"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
