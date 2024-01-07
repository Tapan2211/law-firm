import React from "react";
import HeadingCompo from "../HeadingCompo";
import styles from "./PracticeArea.module.css";
import businesslaw1 from "../../assets/BUSINESSLAW11.png";
import partnershiplaw from "../../assets/PARTNERSHIPLAW1.png";
import realestatelaw from "../../assets/REALESTATELAW1.png";
import businesslaw2 from "../../assets/BUSINESSLAW2.png";
import landloard from "../../assets/LANDLORDDISPUTES.png";
import elderAbuse from "../../assets/ELDER_ABUSE.png";

let imgData = [
  {
    img1: { src: businesslaw1, text: "BUSINESS LAW" },
    img2: { src: partnershiplaw, text: "PARTNERSHIP LAW" },
  },
  {
    img1: { src: realestatelaw, text: "REAL ESTATE LAW" },
    img2: { src: businesslaw2, text: "BUSINESS LAW" },
  },
  {
    img1: { src: landloard, text: "LANDLORD DISPUTES" },
    img2: { src: elderAbuse, text: "ELDER ABUSE" },
  },
];

function PracticeArea() {
  function getGrid() {
    let list = imgData.map((ele, index) => {
      if (index % 2 === 0) {
        console.log(ele.img1.src);

        return (
          <>
            <div className={styles["even-1"]} key={`pa{index}`}>
              <img src={ele.img1.src} />
              <h3 className={styles["img-caption"]}>{ele.img1.text}</h3>
            </div>
            <div className={styles["even-2"]}>
              <img src={ele.img2.src} />
              <h3 className={styles["img-caption"]}>{ele.img2.text}</h3>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className={styles["odd-1"]} key={`pa{index}`}>
              {" "}
              <img src={ele.img1.src} />
              <h3 className={styles["img-caption"]}>{ele.img1.text}</h3>
            </div>
            <div className={styles["odd-2"]}>
              <img src={ele.img2.src} />
              <h3 className={styles["img-caption"]}>{ele.img2.text}</h3>
            </div>
          </>
        );
      }
    });
    return list;
  }
  return (
    <div className={styles.practiceAreaWrapper} id="practice-area">
      <HeadingCompo heading="Area of Practices" />
      <div className={styles.gallary}>{getGrid()}</div>
    </div>
  );
}

export default PracticeArea;