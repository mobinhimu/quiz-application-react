/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";

const Info = ({ text, status }) => {
  const navigateLink = useNavigate();

  const handleNavigate = function () {
    status === "Login" ? navigateLink("/login") : navigateLink("/signup");
  };

  return (
    <div className="info">
      {text} <span onClick={handleNavigate}>{status}</span> instead.
    </div>
  );
};

export default Info;
