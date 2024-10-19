import "../components/App.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import RegistrationModal from "../components/UI/modal/RegistrationModal";
import logo from "../img/logo_auth.svg";

const Authorization = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleMainClick = () => {
    navigate("/main");
  };

  return (
    <div className="authorization">
      <div className="authorization__block">
        <div className="authorization__block__intro">
          <h1>Welcome in OwnGallery!</h1>
          <h2>Dive into a fascinating world with us...</h2>
        </div>
        <div className="authorization__block__enter">
          <div className="authorization__block__enter__item">
            <p>Email</p>
            <Input className="input__enter" placeholder="Enter your email" />
          </div>
          <div className="authorization__block__enter__item">
            <p>Password</p>
            <Input className="input__enter" placeholder="Enter your password" />
          </div>
          <a href="#" onClick={openModal}>
            Registration
          </a>
        </div>
        <Button variant="default__small" onClick={handleMainClick}>
          Log in
        </Button>
        <img src={logo} alt="Logo" />
      </div>
      <RegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Authorization;
