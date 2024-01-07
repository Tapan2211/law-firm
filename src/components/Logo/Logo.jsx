import React from "react";
import styles from "./Logo.module.css";
export default function Logo({ className }) {
  return (
    <div>
      <a href="#">
        <img
          src={require("../../assets/logo.png")}
          className={className ? className : styles.logo}
        />
      </a>
    </div>
  );
}
