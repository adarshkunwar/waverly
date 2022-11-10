import React,{useState} from "react";
import img from "../img/waverly default.png";
import { CgLogOff } from "react-icons/cg";
import { IconContext } from "react-icons";
import Deso from 'deso-protocol';
import {useNavigate} from 'react-router-dom'
const Nav = ({ logIn }) => {
  // chnage this accordingly. Make it props or wahtever you wish
  //   this will change later on
  const [profile, setProfile] = useState("https://i.pinimg.com/originals/f2/80/48/f280489498a65d247b8f2b6a0bb5cd76.jpg");
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const deso = new Deso();
      const request = localStorage.getItem("deso_user_key");
      const response = await deso.identity.logout(request);
      localStorage.setItem('isLoggedIn', !response);
      localStorage.setItem('user_key', "");
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  async function getProfileImage(){
    try {
      const pub_key = localStorage.getItem("user_key")
      const deso = new Deso();
      const request1 = {
        "PublicKeyBase58Check": pub_key
      };
      const response1 = await deso.user.getSingleProfile(request1);
      const request2 = pub_key;
        const response2 = await deso.user.getSingleProfilePicture(request2);
      if(response1.Profile.ExtraData!= null){
        if(response1.Profile.ExtraData.NFTProfilePictureUrl!=null){
          setProfile(response1.Profile.ExtraData.NFTProfilePictureUrl);
        }else{
          setProfile(response2);}
      }
      else{
        setProfile(response2);
      }
    } catch (error) {
      console.error(error);
    }
  }


  logIn && getProfileImage();

  return (
    <div className="absolute w-[40rem] navbar">
      <div className="flex justify-between ">
        <nav>
          <img src={img} alt="" className="w-36 h-30 mt-1 cursor-pointer" />
        </nav>

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
    </div>
  );
};

export default Nav;
