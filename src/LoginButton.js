import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const LoginButton = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Hello, {user.name}</p>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <p>Hello, please login!</p> <button onClick={() => loginWithRedirect()}>Log In</button> </div>
      )}
    </div>
  );
};

export default LoginButton;
