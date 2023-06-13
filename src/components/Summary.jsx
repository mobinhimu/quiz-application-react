import React from "react";

import summaryImage from "../assets/images/signup.svg";
import styles from "./styles/Summary.module.css";

const Summary = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={styles.badge}>
        <img src={summaryImage} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
