import "./Button.scss";

import React from "react";

import cn from "../../../utils";

const Button = ({
  onClick,
  children,
  variant = "default",
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={cn("btn", `btn__${variant}`)}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
