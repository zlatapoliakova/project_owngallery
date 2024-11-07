import React from "react";

import problem from "../img/problem.svg";

const Error = () => {
  return (
    <div className="error__page">
      <h1 className="error__page__txt">Ooops! We have a problems...</h1>
      <img className="error__page__img" src={problem} alt="Problems" />
    </div>
  );
};

export default Error;
