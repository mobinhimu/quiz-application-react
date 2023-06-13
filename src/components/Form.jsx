import React from "react";
import styles from "./styles/Form.module.css";

const Form = ({ children, className }) => {
  return (
    <form className={`${[className, styles.form].join(" ")}`}>{children}</form>
  );
};

export default Form;
