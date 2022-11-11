import React from "react";

const EmbeddBtn = ({ visibility }) => {
  //   const [visibility, setVisibility] = useState(prop.visibility);
  // console.log(visibility);
  return (
    <div className={`${visibility === true ? "block" : "hidden"}`}>
      <input type="text" placeholder="Embed Something" name="data" id="data" className="rounded-md border border-[#43655A] text-lg -mt-2 py-1 w-[37rem] mx-5 px-3" />
    </div>
  );
};

export default EmbeddBtn;
