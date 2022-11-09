import React from "react";
import img from "../img/waverly default.png";
import profile from "../img/profile.jpeg";
import { CgLogOff } from "react-icons/cg";
import { IconContext } from "react-icons";
<<<<<<< HEAD
import Deso from 'deso-protocol';
import {useNavigate} from 'react-router-dom'
=======
import Deso from "deso-protocol";
>>>>>>> 6e30215675179806e254fd0f8057c2a07ce2281c
const Nav = ({ logIn }) => {
  // chnage this accordingly. Make it props or wahtever you wish
  //   this will change later on
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const deso = new Deso();
    const request = localStorage.getItem("deso_user_key");
    const response = await deso.identity.logout(request);
<<<<<<< HEAD
    localStorage.setItem('isLoggedIn', !response);
    navigate('/');
=======
    localStorage.setItem("isLoggedIn", !response);
    // history.push("/");
>>>>>>> 6e30215675179806e254fd0f8057c2a07ce2281c
    window.location.reload();
  };

  return (
    <div className="absolute w-[40rem] navbar">
      <div className="flex justify-between ">
        <nav>
          <img src={img} alt="" className="w-36 h-30 mt-1" />
        </nav>
<<<<<<< HEAD
      
      {logIn?<button onClick={handleLogOut} className="logout mr-5 mt-1.5 scale-90" >
          <IconContext.Provider value={{color: "red", size: "27px"}}>
          <CgLogOff style={{size: '200px'}}/>
          </IconContext.Provider>
        </button>:' '}
    </div>
=======

        {logIn ? (
          <div className="flex gap-3 items-center">
            <div>
              <img
                src={profile}
                className="w-11 h-11 rounded-full "
                alt="prof img"
              />
            </div>
            <div>
              <button onClick={handleLogOut} className="logout mr-5  scale-90">
                <IconContext.Provider value={{ color: "red", size: "27px" }}>
                  <CgLogOff style={{ size: "200px" }} />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
>>>>>>> 6e30215675179806e254fd0f8057c2a07ce2281c
    </div>
  );
};

export default Nav;
