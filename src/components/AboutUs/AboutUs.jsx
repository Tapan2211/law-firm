import React from "react";
import styles from "./AboutUs.module.css";
import HeadingCompo from "../HeadingCompo";

function AboutUs() {
  return (
    <div className={styles["aboutus-wrapper"]}>
      <div className={styles["left-section"]}>
        <HeadingCompo heading="Let's Introduce OurSelf " />
      </div>
      <div className={styles["about-right"]}>
        <h1 className={`${styles.heading} ${styles["sub-heading"]}`}>
          Criminal Lawyer
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AboutUs;
