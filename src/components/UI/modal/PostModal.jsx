import "./PostModal.scss";

import React from "react";

import image_avatar from "../../../img/avatar_profile.png";
import close from "../../../img/close.svg";
import delete_logo from "../../../img/delete_post_logo.svg";
import edit from "../../../img/edit_post_logo.svg";
import image_post from "../../../img/modal__image.png";
import Button from "../button/Button";

const PostModal = ({ isOpen, onClose, hideButtons = true }) => {
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
                Title
              </span>
              <span className="modal__post__header__user__txt__email">
                Alison Richardson
              </span>
            </div>
          </div>
          <div className="modal__post__header__logo ">
            {!hideButtons && (
              <>
                <Button variant="small">
                  <img src={edit} alt="Edit logo" />
                  Edit
                </Button>
                <Button variant="small">
                  <img src={delete_logo} alt="Delete logo" />
                  Delete
                </Button>
              </>
            )}
            <img src={close} alt="Logo" onClick={onClose} />
          </div>
        </div>
        <img
          className="modal__post__image"
          src={image_post}
          alt="Modal Content"
        />
        <div className="modal__post__text">
          Lorem ipsum dolor sit amet consectetur. Dolor dictumst pulvinar
          sollicitudin at arcu auctor aliquam.
        </div>
      </div>
    </div>
  );
};

export default PostModal;
