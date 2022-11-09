
import React, { useState, useEffect } from "react";
import Landing from "./Components/Landing";
import LoggedIn from "./Components/LoggedIn";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLogIn(true);
    }
  }, [])

  return (
    <>
      <Router>
        <div>
          <Nav logIn={logIn} />

          {logIn ?
            <Routes>
              <Route exact path="/" element={<LoggedIn logIn />} />
            </Routes> :
            <Routes>
              <Route exact path="/" element={<Landing logIn={setLogIn} />} />
            </Routes>
          }
        </div>
      </Router>
    </>
  );
}

export default App;
