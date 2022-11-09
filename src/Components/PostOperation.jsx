import React from 'react'

import { BiImageAdd } from "react-icons/bi";
import { IconContext } from "react-icons";

const PostOperation = () => {
  return <div>
      <div>
        <button className="absolute bottom-1/2 left-52 btn focus:outline-none bg-[#efefef] bigbtn">PREVIEW</button>

        <button  className="logout mr-5  scale-90">
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <BiImageAdd style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
      </div>
  </div>;
}

export default PostOperation