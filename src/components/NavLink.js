import React from "react";
import { useNavigate } from "react-router-dom";

const NavLink = ({ label, path, simulateAPICall }) => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    await simulateAPICall(navigate, path);
  };

  return (
    <a href={path} onClick={handleClick} style={{ margin: "0 10px", cursor: "pointer" }}>
      {label}
    </a>
  );
};

export default NavLink;
