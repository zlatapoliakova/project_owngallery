const cn = (...classNames) => {
  return classNames
    .filter((className) => typeof className === "string" && className !== "")
    .join(" ");
};

export default cn;
