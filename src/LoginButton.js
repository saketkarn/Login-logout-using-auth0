import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./LogoutButton";

const LoginButton = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("Current User",user)

  return( 
    <div>
    {
      isAuthenticated? <LogoutButton/> : <button onClick={() => loginWithRedirect()}>Log In</button>  
    }
    </div>)
};

export default LoginButton;