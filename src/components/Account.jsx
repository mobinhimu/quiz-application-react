import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/Account.module.css";

const Account = () => {
  return (
    <div className={styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <NavLink to="/signup">Signup</NavLink>
      ||
      <NavLink to="/login">Login</NavLink>
      {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  );
};

export default Account;
