import React from "react";
import PageNavigation from "../components/PageNavigation";
import styles from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNavigation />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link
          to="/login"
          className="cta">
          Track your journey
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
