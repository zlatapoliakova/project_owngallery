import "./SidePanel.scss";

import React from "react";

import exit from "../../../img/log-out.svg";
import filter from "../../../img/mage_filter.svg";
import ToggleableList from "../list/ToggleableList";

const SidePanel = ({ isOpen, onClose }) => {
  const items = Array.from({ length: 100 }, (_, index) => `Lorem${index + 1}`);

  return (
    <div className={`side ${isOpen ? "open" : ""}`}>
      <div className="side__up">
        <div className="side__up__right">
          <img src={filter} alt="Icon filter" />
          <h2>Filter</h2>
        </div>
        <img src={exit} onClick={onClose} />
      </div>
      <div className="side__content">
        <ToggleableList items={items} />
      </div>
    </div>
  );
};

export default SidePanel;
