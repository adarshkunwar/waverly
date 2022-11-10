import React from 'react'

import { BiImageAdd } from "react-icons/bi";
import { IconContext } from "react-icons";
import {HiOutlineExternalLink} from 'react-icons/hi';
import {ImEmbed} from 'react-icons/im';

const PostOperation = () => {
  return <div>
      <div>
      <textarea id="textbox" className='textbox' rows="10" cols="50"></textarea>
      <input type='text'  className='textbox'></input>
        <button className="absolute bottom-1/2 left-52 btn focus:outline-none bg-[#efefef] bigbtn">PREVIEW</button>

        <button  className="logout mr-5  scale-90">
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <BiImageAdd style={{ size: "200px" }} />
                </IconContext.Provider>
              </button> 
               <button  className="logout mr-5  scale-90">
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <HiOutlineExternalLink style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
              {/* use upload image api to generate link for uploaded image */}
              {/* https://images.deso.org/32df342003addbc897b431522b16eff800b6313b85f9ebac91c3f5ae88da8f76.webp */}
              {/* while submiting post use the url */}
              {/* areweave image acts as the imgae url directly no upload image requred */}
              {/* image urls has string array */}
              <button  className="logout mr-5  scale-90">
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <ImEmbed style={{ size: "200px" }} />
                </IconContext.Provider>
              </button> 

             
      </div>
  </div>;
}

export default PostOperation