import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/Video.module.css";
import thumbnail from "../assets/images/3.jpg";

const Video = () => {
  return (
    <NavLink to="/quiz">
      <div className={styles.video}>
        <img src={thumbnail} alt="Thumbnail" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={styles.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Video;
