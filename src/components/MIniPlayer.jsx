import React from "react";

import miniPlayerImage from "../assets/images/3.jpg";
import styles from "./styles/MiniPlayer.module.css";

const MIniPlayer = () => {
  return (
    <div className={`${[styles.miniPlayer, styles.floatingBtn].join(" ")}`}>
      <span className={`material-icons-outlined ${styles.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${styles.close}`}> close </span>
      <img src={miniPlayerImage} alt="Mini Player Button" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MIniPlayer;
