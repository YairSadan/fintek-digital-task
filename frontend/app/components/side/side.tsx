import React from "react";
import styles from "./side.module.css";
import Logo from "../logo";

const Side = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.prompt}>
        Use our weather app to see the weather around the world
      </div>
      <div className={styles.title}>City name</div>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder="Tel aviv" />
        <button className={styles.searchButton}>
          Check
        </button>
      </div>
      <div className={styles.footer}>
        <span>latitude: {}</span> <span>longitude: {}</span> <br />
        <span>accurate to {}</span> <span>at {}</span>
      </div>
    </aside>
  );
};

export default Side;
