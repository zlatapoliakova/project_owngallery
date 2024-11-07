import React, { useState } from "react";

import PostModal from "../components/UI/modal/PostModal";
import post_default from "../img/post_bg.png";
const PostItem = ({ image, title, userName, description, hideButtons }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="post" onClick={openModal}>
        <img className="post__img" src={image || post_default} alt="Picture" />
        <div className="post_txt">
          <p className="post__txt__title">{title}</p>
          <span className="post__txt__user-name">{userName}</span>
        </div>
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={closeModal}
        hideButtons={hideButtons}
        image={image || post_default}
        title={title}
        description={description}
        userName={userName}
      />
    </div>
  );
};

export default PostItem;
