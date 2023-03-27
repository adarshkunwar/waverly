import React from "react";

//react-icons
import { AiFillHome as HomeImage } from "react-icons/ai";
import { GiBullseye as VisionImage } from "react-icons/gi";
import { GrGallery as GalleryImage } from "react-icons/gr";
import { FaUserSecret as TeamImage } from "react-icons/fa";

// ! for some reason adding the link breaks the code
// eslint-disable-next-line
import { Link } from "react-router-dom";

const menu = [
  {
    name: "Home",
    icon: <HomeImage />,
    link: null,
  },
  {
    name: "gallery",
    icon: <GalleryImage />,
    link: null,
  },
  {
    name: "about",
    icon: <TeamImage />,
    link: null,
  },
  {
    name: "vision",
    icon: <VisionImage />,
    link: null,
  },
];

const SideBar = ({ active }) => {
  return (
    <div>
      {active && (
        <div>
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex gap-2 items-center cursor-pointer hover:underline hover:-ml-5 transition-all duration-300`}
              >
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
