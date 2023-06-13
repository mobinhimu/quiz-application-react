import React from "react";

import styles from "./styles/TextInput.module.css";

const TextInput = ({ icon, ...attribute }) => {
  return (
    <div className={styles.textInput}>
      <input {...attribute} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
