import React, { useState, useEffect } from "react";

import Landing from "./Components/Landing";
import LoggedIn from "./Components/LoggedIn";
import Nav from "./Components/Nav";
const host = "http://localhost:4000";
const iframe = '<iframe id="identity" frameborder="0" src="https://identity.deso.org/embed" style="height: 100vh; width: 100vw; display: none; position: fixed; z-index: 1000; left: 0; top: 0;"></iframe>'
function App() {
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
  }

  const makeAPICall = async () => {
    try {
      const response = await fetch(`${host}/`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const json = await response.json();
      console.log(json);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  const [logIn, setLogIn] = useState(false);
  return (
    <div>
      <Iframe iframe={iframe} />
      <Nav logIn={logIn} />
      {logIn ? <LoggedIn /> : <Landing logIn={setLogIn} />}
    </div>
  );
}

export default App;
