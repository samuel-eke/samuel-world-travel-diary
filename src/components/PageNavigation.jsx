import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/PageNav.module.css";
import Logo from "./Logo";
function PageNavigation() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">My Products</NavLink> <br />
        </li>
        <li>
          <NavLink to="/pricing">My Prices</NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNavigation;
