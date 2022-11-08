import React, { useState, useEffect } from "react";

import Landing from "./Components/Landing";
import LoggedIn from "./Components/LoggedIn";
import Nav from "./Components/Nav";

function App() {

  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLogIn(true);
    }
  }, [])

  return (
    <div>
      <Nav logIn={logIn} />
      {logIn ? <LoggedIn /> : <Landing logIn={setLogIn} />}
    </div>
  );
}

export default App;
