import React from "react";
import { useUser } from "./Context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a> Hello, {name} you are{" "}
      {loggedIn ? "logged In" : "anonymous"}
    </header>
  );
};

export default Header;
