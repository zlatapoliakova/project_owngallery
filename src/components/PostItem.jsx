import React, { useState } from "react";

import PostModal from "../components/UI/modal/PostModal";
import picture from "../img/post.jpg";

const PostItem = ({ hideButtons }) => {
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
        <img className="post__img" src={picture} alt="Picture" />
        <div className="post_txt">
          <p className="post__txt__descr">Lorem ipsum dolor sit amet</p>
          <span className="post__txt__user-name">Alice Spilberg</span>
        </div>
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={closeModal}
        hideButtons={hideButtons}
        image={picture}
      />
    </div>
  );
};

export default PostItem;
