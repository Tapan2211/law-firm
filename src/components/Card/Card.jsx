import React from "react";
import styles from "./Card.module.css";

function Card({ title, text, color, designation, src }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: color ? color : undefined }}
    >
      <div className={styles.imgContainer}>
        {src ? (
          <img src={src} width={101} />
        ) : (
          <img
            src={require("../../assets/card-img.png")}
            width={101}
            height={101}
          />
        )}
      </div>
      <div>
        <h1 className={styles["sub-heading"]}>{title}</h1>
        {designation ? (
          <h6 className={styles["designation"]}>{designation}</h6>
        ) : null}
      </div>
      <p className={styles.para}>{text}</p>
      {!designation && <button className={styles.btn}>Read More</button>}
    </div>
  );
}

export default Card;
