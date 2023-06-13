import React from "react";

import styles from "./styles/Button.module.css";

const Button = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`${[styles.button, className].join(" ")}  `}
    >
      {children}
    </button>
  );
};

export default Button;
