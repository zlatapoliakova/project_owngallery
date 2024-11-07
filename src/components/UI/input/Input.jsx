import "./Input.scss"; // Імпорт стилів

import React from "react";

const Input = ({
  type = "text",
  value,
  onChange,
  className,
  placeholder,
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
