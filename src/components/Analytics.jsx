import React from "react";

import styles from "./styles/Analytics.module.css";
import Question from "./Question";

const Analytics = () => {
  return (
    <div className={styles.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
};

export default Analytics;
