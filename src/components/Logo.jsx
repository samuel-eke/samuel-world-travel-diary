import React from "react";
import styles from "../styles/Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt=""
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
