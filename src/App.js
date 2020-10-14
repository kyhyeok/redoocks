import React from "react";
import UserContextProvider from "./Context";
import Screen from "./Screen";

function App() {
  return (
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
  );
}

export default App;
