import React, { useState } from "react";
import styles from "./card.module.css";

const Card = () => {
  const [style, setStyle] = useState(styles.cream);
  return (
    <div className={styles.card}>
      <div className={styles.buttons}>
        <button
          style={{ backgroundColor: "#f2d6d6" }}
          onClick={() => setStyle(styles.cream)}
        ></button>
        <button
          style={{ backgroundColor: "#000" }}
          onClick={() => setStyle(styles.black)}
        ></button>
        <button
          style={{ backgroundColor: "#f44336" }}
          onClick={() => setStyle(styles.red)}
        ></button>
        <button
          style={{ backgroundColor: "#2196f3" }}
          onClick={() => setStyle(styles.blue)}
        ></button>
        <button
          style={{ backgroundColor: "#ffeb3b" }}
          onClick={() => setStyle(styles.yellow)}
        ></button>
        <button
          style={{ backgroundColor: "#4caf50" }}
          onClick={() => setStyle(styles.green)}
        ></button>
      </div>
      <div className={style}>
        <h1>HELLOOOOO.....</h1>
      </div>
    </div>
  );
};

export default Card;
