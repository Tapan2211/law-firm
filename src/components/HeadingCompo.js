import React from "react";
import styles from "./HeadingCompo.module.css";

function HeadingCompo(props) {
  return <h1 className={styles.heading}>{props.heading}</h1>;
}

export default HeadingCompo;
