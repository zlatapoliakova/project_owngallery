import "../components/App.scss";

import React, { useEffect, useState } from "react";

import PostList from "../components/PostList";
import Button from "../components/UI/button/Button";
import Footer from "../components/UI/footer/Footer";
import Header from "../components/UI/header/Header";
import ProfileModal from "../components/UI/modal/ProfileModal";
import { useUser } from "../context/UserContext";
import avatar from "../img/avatar_profile.png";
import iconEdit from "../img/icon_edit.svg";

const Profile = () => {
  const { user, setUser } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userFullName, setUserFullName] = useState(""); // Використовуємо fullname замість окремих ім'я та прізвища
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState(avatar);

  useEffect(() => {
    if (user) {
      setUserFullName(user.fullname); // Оновлюємо fullname
      setUserEmail(user.email);
      setUserImage(user.profileImage || avatar);
    }
  }, [user]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const updateProfile = (newFullName, newSurname, newEmail, newImage) => {
    setUserFullName(newFullName); // Оновлюємо fullname
    setUserEmail(newEmail);
    if (newImage) setUserImage(newImage);

    // Оновлюємо дані користувача в контексті
    setUser((prevUser) => ({
      ...prevUser,
      fullname: newFullName,
      email: newEmail,
      profileImage: newImage,
    }));
  };

  return (
    <div className="profile">
      <Header showLinks={true} hideUserProfile={true} />
      <div className="profail__info">
        <img className="profaile__info__img" src={userImage} alt="Avatar" />
        <div className="profail__info__txt">
          <div className="profail__info__txt__up">
            <span className="profail__info__txt__name">
              {userFullName} {/* Відображаємо лише fullname */}
            </span>
            <Button onClick={openModal} variant="small">
              <img src={iconEdit} alt="Edit icon" />
              Edit profile
            </Button>
          </div>
          <span className="profail__info__txt__email">{userEmail}</span>
        </div>
      </div>
      <hr className="line" />
      <PostList hideButtons={false} />
      <Footer />
      <ProfileModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        updateProfile={updateProfile}
        currentName={userFullName} // Передаємо fullname, а не окремо ім'я та прізвище
        currentEmail={userEmail}
        currentImage={userImage}
      />
    </div>
  );
};

export default Profile;
