import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/Nav.module.css";
import Account from "./Account";
import navImage from "../assets/images/logo-bg.png";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" className={styles.brand}>
            <img src={navImage} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </NavLink>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
