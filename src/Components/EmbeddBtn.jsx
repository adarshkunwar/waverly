import React from "react";

const EmbeddBtn = ({ visibility }) => {
  //   const [visibility, setVisibility] = useState(prop.visibility);
  // console.log(visibility);
  return (
    <div className={`${visibility === true ? "block" : "hidden"}`}>
      <input type="text" name="data" id="data" className="bg-red-500" />
    </div>
  );
};

export default EmbeddBtn;
