import "./Registration.scss";

import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";
import Input from "../input/Input";

const RegistrationModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const handleMainClick = () => {
    navigate("/main");
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <form>
          <h2>Sign up</h2>
          <div className="modal__block">
            <div className="modal__block__item">
              <span>Name</span>
              <Input className="input__enter" placeholder="Enter your name" />
            </div>
            <div className="modal__block__item">
              <span>Surname</span>
              <Input
                className="input__enter"
                placeholder="Enter your surname"
              />
            </div>
          </div>
          <div className="modal__block__item">
            <span>Email</span>
            <Input className="input__enter" placeholder="Enter your email" />
          </div>
          <div className="modal__block__item">
            <span>Password</span>
            <Input className="input__enter" placeholder="Enter your password" />
          </div>
          <div className="modal__block__item">
            <span>Re-password</span>
            <Input
              className="input__enter"
              placeholder="Repeat your password"
            />
          </div>
          <Button variant="default" onClick={handleMainClick}>
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
