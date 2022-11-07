import React, {useState} from "react";

import Landing from "./Components/Landing";
import LoggedIn from "./Components/LoggedIn"; 
import Nav from "./Components/Nav";

function App() {

  let logIn = true;
  return (
    <div>
      <Nav/>
      {logIn? <LoggedIn/> : <Landing/> }
    </div>
    );
}

export default App;
