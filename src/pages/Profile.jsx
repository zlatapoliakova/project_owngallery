import "../components/App.scss";

import React, { useState } from "react";

import PostList from "../components/PostList";
import Button from "../components/UI/button/Button";
import Footer from "../components/UI/footer/Footer";
import Header from "../components/UI/header/Header";
import ProfileModal from "../components/UI/modal/ProfileModal";
import avatar from "../img/avatar_profile.png";
import iconEdit from "../img/icon_edit.svg";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="profile">
      <Header showLinks={true} hideUserProfile={true} />
      <div className="profail__info">
        <img className="profaile__info__img" src={avatar} alt="Avatar" />
        <div className="profail__info__txt">
          <div className="profail__info__txt__up">
            <span className="profail__info__txt__name">Alison Richardson</span>
            <Button onClick={openModal} variant="small">
              <img src={iconEdit} alt="Edit icon" />
              Edit profile
            </Button>
          </div>
          <span className="profail__info__txt__email">alison@gmail.com</span>
        </div>
      </div>
      <hr className="line" />
      <PostList hideButtons={false} />
      <Footer />
      <ProfileModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Profile;
