import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AddPost from "../pages/AddPost";
import Authorization from "../pages/Authorization";
import Error from "../pages/Error";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

export const CastomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
};
