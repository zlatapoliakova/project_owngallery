import "./App.scss";

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AddPost from "../pages/AddPost";
import Authorization from "../pages/Authorization";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
