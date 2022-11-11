import React from "react";

const EmbeddBtn = ({ visibility, toggle }) => {
  return (
    <div className={`${visibility === true ? "block" : "hidden"}`}>
      <input type="text" name="data" id="data" className="bg-red-500" />
      <input type="submit" value="ok" onClick={() => toggle(false)} />
    </div>
  );
};

export default EmbeddBtn;
