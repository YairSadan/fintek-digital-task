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
        <span>latitude 32.07</span> <span style={{ marginLeft: "20px"}}>longitude 34.76</span><br />
        <span>accurate to 13/02/2022 at 16:24</span>
      </div>
    </aside>
  );
};

export default Side;
