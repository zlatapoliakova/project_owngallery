import "../components/App.scss";

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import RegistrationModal from "../components/UI/modal/RegistrationModal";
import { useUser } from "../context/UserContext";
import logo from "../img/logo_auth.svg";

const Authorization = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();

  const isAuth = Boolean(window.localStorage.getItem("token"));
  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleChangeEmail = (text) => {
    setEmail(text.target.value);
  };

  const handleChangePassword = (text) => {
    setPassword(text.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch {
      /*empty*/
    }
  };

  return (
    <div className="authorization">
      <form className="authorization__block" onSubmit={handleLogin}>
        <div className="authorization__block__intro">
          <h1>Welcome in OwnGallery!</h1>
          <h2>Dive into a fascinating world with us...</h2>
        </div>
        <div className="authorization__block__enter">
          <div className="authorization__block__enter__item">
            <p>Email</p>
            <Input
              className="input__enter"
              placeholder="Enter your email"
              onChange={handleChangeEmail}
              value={email}
            />
          </div>
          <div className="authorization__block__enter__item">
            <p>Password</p>
            <Input
              className="input__enter"
              placeholder="Enter your password"
              onChange={handleChangePassword}
              value={password}
            />
          </div>
          <a href="#" onClick={openModal}>
            Registration
          </a>
        </div>
        <Button variant="default__small" type="submit">
          Log in
        </Button>
        <img src={logo} alt="Logo" />
      </form>
      <RegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Authorization;
