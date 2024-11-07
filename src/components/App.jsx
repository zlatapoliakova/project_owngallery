import "./App.scss";

import React from "react";

import { UserProvider } from "../context/UserContext";
import { CastomRoute } from "../route";

const App = () => {
  return (
    <UserProvider>
      <CastomRoute />
    </UserProvider>
  );
};

export default App;
