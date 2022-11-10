import React from "react";

const EmbeddBtn = ({visibility,setVisibility}) => {
  return (
    <div className={`${visibility ? "block" : "hidden"}`}>
      <input type="text" name="data" id="data" className="bg-red-500" />
      <input type="submit" value="" onClick={() => setVisibility(false)} />
    </div>
  );
};

export default EmbeddBtn;
