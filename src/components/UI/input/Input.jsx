import "./Input.scss"; // Імпорт стилів

import React from "react";

const Input = ({ className, placeholder }) => {
  return <input className={className} type="text" placeholder={placeholder} />;
};

export default Input;
