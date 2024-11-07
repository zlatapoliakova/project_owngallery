import "./Profile.scss";

import React, { useEffect, useState } from "react";

import avatar from "../../../img/avatar_modal.png";
import iconEdit from "../../../img/icon_edit.svg";
import Button from "../button/Button";
import Input from "../input/Input";

const ProfileModal = ({
  isOpen,
  closeModal,
  updateProfile,
  currentName,
  currentEmail,
  currentImage,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState(currentEmail);
  const [image, setImage] = useState(currentImage);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      const fullName = currentName ? currentName.split(" ") : [];
      setName(fullName[0] || ""); // Ім'я
      setSurname(fullName[1] || ""); // Прізвище
      setEmail(currentEmail); // Email
      setImage(currentImage); // Аватар
      setError(""); // Скидання помилки
    }
  }, [isOpen, currentName, currentEmail, currentImage]); // Замінили currentSurname на currentName, бо прізвище вже обробляється

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const handleSave = () => {
    if (!name || !surname || !email) {
      setError("Please fill in all fields.");
      return;
    }

    // Оновлюємо fullname
    const updatedFullName = `${name} ${surname}`;
    updateProfile(updatedFullName, surname, email, image); // Використовуємо нове fullname
    closeModal();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="edit" onClick={(e) => e.stopPropagation()}>
        <div className="edit__image">
          <img
            className="edit__image__profile"
            src={image || avatar}
            alt="Profile image"
          />
          <label>
            <Button variant="small">
              <img src={iconEdit} alt="Edit icon" />
              Edit image
            </Button>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </label>
          <Button variant="default" onClick={handleSave}>
            Save Modal
          </Button>
        </div>
        <div className="edit__info">
          <div className="edit__info__item">
            <span>Name</span>
            <Input
              className="input__enter"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="edit__info__item">
            <span>Surname</span>
            <Input
              className="input__enter"
              placeholder="Enter your surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="edit__info__item">
            <span>Email</span>
            <Input
              className="input__enter"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
