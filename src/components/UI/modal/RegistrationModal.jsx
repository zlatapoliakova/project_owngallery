import "./Registration.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../../context/UserContext";
import Button from "../button/Button";
import Input from "../input/Input";

const RegistrationModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { register } = useUser();

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      return;
    }

    try {
      const data = await register(name + " " + surName, email, password);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch {
      /*empty*/
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <form onSubmit={handleSignUp}>
          <h2>Sign up</h2>
          <div className="modal__block">
            <div className="modal__block__item">
              <span>Name</span>
              <Input
                className="input__enter"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="modal__block__item">
              <span>Surname</span>
              <Input
                className="input__enter"
                placeholder="Enter your surname"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
              />
            </div>
          </div>
          <div className="modal__block__item">
            <span>Email</span>
            <Input
              className="input__enter"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="modal__block__item">
            <span>Password</span>
            <Input
              className="input__enter"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="modal__block__item">
            <span>Re-password</span>
            <Input
              className="input__enter"
              placeholder="Repeat your password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </div>
          <Button variant="default" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
