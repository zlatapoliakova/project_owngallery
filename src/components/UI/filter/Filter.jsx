import "./Filter.scss";

import React from "react";

import filter from "../../../img/mage_filter.svg";

const Filter = ({ onClick }) => {
  return (
    <div className="filter" onClick={onClick}>
      <img src={filter} alt="Logo filter" />
      Filter
    </div>
  );
};

export default Filter;
