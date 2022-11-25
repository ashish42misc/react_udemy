import React, { useState, useEffect } from "react";

//Create Context object
//param is your app wide default state, generally an object
//this returns an object that also contain a component needed in other components and hence export enabled
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});
export default AuthContext;

export const AuthContxtProvider = (props) => {

  //User logged in state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem("isUserLoggedInState", "1");
    //console.log("login handler");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    //console.log("logout handler")
    setIsLoggedIn(false);
    localStorage.removeItem("isUserLoggedInState");
  };

  useEffect(() => {
    const isUserLoggedInAlready = localStorage.getItem("isUserLoggedInState");
    console.log("in use effect - entry from authcontext");
    if (isUserLoggedInAlready === "1") {
      //console.log("in use effect logged in condition");
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
