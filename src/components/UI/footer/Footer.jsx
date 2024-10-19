import "./Footer.scss";

import React from "react";

import logo from "../../../img/logo__footer.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div>Copyright © Kramatorsk</div>
      <img src={logo} alt="Logo" />
      <div>Made Poliakova Zlata in 2024</div>
    </div>
  );
};

export default Footer;
