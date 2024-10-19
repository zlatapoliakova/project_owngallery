import "./ToggleableList.scss";

import React, { useState } from "react";

const ToggleableList = ({ items }) => {
  const [activeItem, setActiveItem] = useState([]);

  const handleItemClick = (index) => {
    setActiveItem((prevItems) => {
      if (prevItems.includes(index)) {
        return prevItems.filter((item) => item !== index);
      } else {
        return [...prevItems, index];
      }
    });
  };

  return (
    <div className="toggleable-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={`toggleable-list__item ${activeItem.includes(index) ? "active" : ""}`}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ToggleableList;
