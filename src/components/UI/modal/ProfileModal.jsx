import "./Profile.scss";

import React from "react";

import avatar from "../../../img/avatar_modal.png";
import iconEdit from "../../../img/icon_edit.svg";
import Button from "../button/Button";
import Input from "../input/Input";

const ProfileModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;
  console.log(isOpen);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="edit" onClick={(e) => e.stopPropagation()}>
        <div className="edit__image">
          <img
            className="edit__image__profile"
            src={avatar}
            alt="Profile image"
          />
          <Button variant="small">
            <img src={iconEdit} alt="Edit icon" />
            Edit image
          </Button>
          <Button variant="default" onClick={closeModal}>
            Close Modal
          </Button>
        </div>
        <div className="edit__info">
          <div className="edit__info__item">
            <span>Name</span>
            <Input className="input__enter" placeholder="Enter your name" />
          </div>
          <div className="edit__info__item">
            <span>Surname</span>
            <Input className="input__enter" placeholder="Enter your surname" />
          </div>
          <div className="edit__info__item">
            <span>Email</span>
            <Input className="input__enter" placeholder="Enter your email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
