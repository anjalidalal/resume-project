import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <button className={styles.btn}>
        Social Card
        <img src="./profile.png" width="28px" height="28px" alt="" />
      </button>
      <button className={styles.btn}>
        All Cards
        <img src="./card.png" width="28px" height="28px" alt="" />
      </button>
    </div>
  );
};

export default Header;
