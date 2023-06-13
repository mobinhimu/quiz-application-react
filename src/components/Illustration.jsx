import React from "react";

import styles from "./styles/Illustration.module.css";

const Illustration = ({ IllustrationImage, altText }) => {
  return (
    <div className={styles.illustration}>
      <img src={IllustrationImage} alt={altText} />
    </div>
  );
};

export default Illustration;
