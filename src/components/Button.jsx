import React from "react";
import styles from "../styles/Button.module.css";

function Button({ children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
