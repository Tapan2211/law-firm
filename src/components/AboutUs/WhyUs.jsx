import React from "react";
import HeadingCompo from "../HeadingCompo";
import styles from "./WhyUs.module.css";
import Card from "../Card/Card";

function WhyUs() {

  let cardData = [
    {
      title: "98% Success Rate",
      text: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "100% Success Rate",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      color: "var(--gray-bg)",
    },
    {
      title: "100% Success Rate",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];

  return (
    <div className={styles.whyusWrapper} id="about-us">
      <HeadingCompo heading="Why Choose Us?" />
      <div className={styles["card-outer"]}>
        <div className={styles["card-wrapper"]}>
          {cardData.map((ele, index) => {
            let color;
            if (index % 2 === 1) {
              color = "var(--gray-bg)";
            }
            return (
              <Card
                key={`card-${index}`}
                text={ele.text}
                title={ele.title}
                color={color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
