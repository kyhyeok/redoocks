import React, { useContext } from "react";
import { UserContext } from "./Context";

const Header = () => {
  const {
    user: { name, loggedIn }
  } = useContext(UserContext);
  return (
    <header>
      <a href="#">Home</a> Hello, {name} you are{" "}
      {loggedIn ? "logged In" : "anonymous"}
    </header>
  );
};

export default Header;
