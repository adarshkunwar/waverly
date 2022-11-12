import React from 'react';
import Deso from 'deso-protocol';

export default function PreviewPost({text,imgs,tooglePreview}) {
  // const imgURLar = imgs.map((img)=>{return img.name})
  var imgURLar = imgs.map(function(item) {
    return item['name'];
  })
  // const handleSubmitPost = ()=>{console.log(typeof(imgURLar));}
  const handleSubmitPost= async()=>{
    try {
      const pub_key = localStorage.getItem("user_key");
      const deso = new Deso();
      const request = {
        "UpdaterPublicKeyBase58Check": pub_key,
        "BodyObj": {
          "Body": text,
          "VideoURLs": [],
          "ImageURLs": imgURLar
        }
      };
      const response = await deso.posts.submitPost(request);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-[40rem] h-[25rem] border-red-200 border ">
      <div className="w-full h-full flex justify-center items-center   text-center">
       <div style={{flexDirection:'column'}}>
       <b>Your Text:</b> {text}&nbsp;<br/>
       <b>Your Image:</b>{imgs.map((img)=>{
          return <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img key={img.id} src={img.name} height="90vh" width="90vw" alt="broken"/>
            </div>
        })}
       </div>
        {/* <button onClick={()=>tooglePreview(false)} className="absolute top-60 left-52 btn focus:outline-none bg-[#efefef] bigbtn"> */}
        <button onClick={()=>tooglePreview(false)} className=" top-100 left-24 btn focus:outline-none bg-[#efefef] bigbtn">
            BACK
          </button>
          <button onClick={handleSubmitPost} className="top-100 left-48 btn focus:outline-none bg-[#efefef] bigbtn">
            SUBMIT POST
          </button>
      </div>
    </div>
  )
}