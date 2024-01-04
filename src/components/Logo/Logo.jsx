import React from "react";
import styles from "./Logo.module.css";

function Logo({ className }) {
  return (
    <a href="#">
      <img
        src={require("../../assests/logo.png")}
        className={className ? className : styles.logo}
        alt={className}
      />
    </a>
  );
}

export default Logo;
