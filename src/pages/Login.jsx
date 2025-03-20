import React, { useState } from "react";
import styles from "../styles/Login.module.css";

function Login() {
  const [email, setEmail] = useState("me@email.com");
  const [password, setPassword] = useState("");
  return (
    <main className={styles.login}>
      <form
        action=""
        className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            name=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
