import React from "react";

const Header = ({ title, reference }) => {
  return <h3 ref={reference}>{title}</h3>;
};

export default Header;
