import "./PostModal.scss";

import React from "react";

import image_avatar from "../../../img/avatar_profile.png";
import close from "../../../img/close.svg";
import delete_logo from "../../../img/delete_post_logo.svg";
import edit from "../../../img/edit_post_logo.svg";
import Button from "../button/Button";

const PostModal = ({
  image,
  userName,
  description,
  title,
  isOpen,
  onClose,
  hideButtons = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal__post" onClick={(e) => e.stopPropagation()}>
        <div className="modal__post__header">
          <div className="modal__post__header__user">
            <img
              className="modal__post__header__user__avatar"
              src={image_avatar}
              alt="User Avatar"
            />
            <div className="modal__post__header__user__txt">
              <span className="modal__post__header__user__txt__name">
                {title}
              </span>
              <span className="modal__post__header__user__txt__email">
                {userName}
              </span>
            </div>
          </div>
          <div className="modal__post__header__btns ">
            {!hideButtons && (
              <div className="modal__post__header__btns__first ">
                <Button variant="small">
                  <img src={edit} alt="Edit logo" />
                  <div className="modal__post__header__btns__first__btn">
                    Edit
                  </div>
                </Button>
                <Button variant="small">
                  <img src={delete_logo} alt="Delete logo" />
                  <div className="modal__post__header__btns__first__btn">
                    Delete
                  </div>
                </Button>
              </div>
            )}
            <img src={close} alt="Logo" onClick={onClose} />
          </div>
        </div>
        <img className="modal__post__image" src={image} alt="Modal Content" />
        <div className="modal__post__text">{description}</div>
      </div>
    </div>
  );
};

export default PostModal;
