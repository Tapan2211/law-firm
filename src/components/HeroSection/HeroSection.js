import React from "react";
import HeroContent from "./HeroContent";
import styles from "./HeroSection.module.css";
import Navbar from "../Navbars";

export default function HeroSection() {
  return (
    <div className={styles.herosection}>
      <div className="container">
        <div className={styles["hero-content-wrapper"]}>
          <div className={styles["hero-section1"]}>
            <Navbar/>
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
}
