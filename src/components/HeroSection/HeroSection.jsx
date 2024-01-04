import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Navbar from "../Navbar/Navbar";
import HeroContent from "./HeroContent";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.herosection}>
      <div className="container">
        <div className={styles["hero-content-wrapper"]}>
          <div className={styles["hero-section1"]}>
            <Navbar />
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
