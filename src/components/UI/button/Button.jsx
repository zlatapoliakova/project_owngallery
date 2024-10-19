import "./Button.scss";

import React from "react";

import cn from "../../../utils";

const Button = ({ onClick, children, variant = "default" }) => {
  return (
    <button onClick={onClick} className={cn("btn", `btn__${variant}`)}>
      {children}
    </button>
  );
};

export default Button;
