import "./Header.scss";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../../../context/UserContext";
import iconLogo from "../../../img/logo_header.svg";
import avatar from "../../../img/user_avatar_header.png";
import Button from "../button/Button";

const Header = ({ showLinks = false, hideUserProfile = false }) => {
  const navigate = useNavigate();
  const { user, loading, logout } = useUser();

  const handleAddImageClick = () => {
    navigate("/add");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="header__logo">
        <img src={iconLogo} alt="Logo" />
        {showLinks && (
          <Link to="/" className="navbar__link">
            Home Page
          </Link>
        )}
      </div>
      <div className="navbar__right-side">
        {!loading && (
          <>
            <Button variant={"outline"} onClick={handleAddImageClick}>
              Add an image
            </Button>
            {user && (
              <>
                <Button variant={"outline"} onClick={handleLogout}>
                  Logout
                </Button>
                {!hideUserProfile && (
                  <div
                    className="navbar__user"
                    onClick={handleProfileClick}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="navbar__user__txt">
                      <span className="navbar__user__txt__name">
                        {user.fullname}
                      </span>
                      <span className="navbar__user__txt__email">
                        {user.email}
                      </span>
                    </div>
                    <img
                      className="navbar__user__avatar"
                      src={user.avatar || avatar}
                      alt="User Avatar"
                    />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
