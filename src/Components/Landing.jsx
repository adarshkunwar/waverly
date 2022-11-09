import React from "react";
import Deso from "deso-protocol";

// first login garda they check on identity.deso.org

const Landing = ({ logIn }) => {
  
  const loginToDeso = async () => {
    try {
      const deso = new Deso();
      const request = 4;
      const response = await deso.identity.login(request);
      const { key, user } = response;
      const res = {};
      res[key] = user;
      localStorage.setItem('deso_user', JSON.stringify(response.user));
      localStorage.setItem('deso_user_key', JSON.stringify(response.key))
      localStorage.setItem('users', JSON.stringify(res))
      // localStorage.setItem('lastIdentityServiceURL', '"https://identity.deso.org"')
      // localStorage.setItem("IdentityUsersKey", JSON.stringify(res));
      localStorage.setItem("isLoggedIn", "true");
      logIn(true);
    }
    catch (error) {
      console.error(error);
  }
}
  return (
    <div className="w-[40rem] h-[25rem] border-red-200 border ">
      <div className="w-full h-full flex justify-center items-center   text-center">
        <div>
          <div className="absolute top-40 left-14  text-3xl text-center welcomewaverly">
            <span id="welcometo">Welcome to </span>Waverly 🌊👋
          </div>
          <button onClick={loginToDeso} className="absolute top-60 left-52 btn focus:outline-none bigbtn">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
