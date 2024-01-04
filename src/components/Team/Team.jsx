import React from "react";
import HeadingCompo from "../HeadingCompo";
import styles from "./Team.module.css";
import danielImage from "../../assests/DanielDef.png";
import sanfoleImage from "../../assests/Sanfole.png";
import cesforilaImage from "../../assests/cesforila.png";
import colleenImage from "../../assests/colleen.png";
import handoneImage from "../../assests/haldone.png";
import nickImage from "../../assests/nick.png";
import TeamCard from "./TeamCard/TeamCard";

let teamDetails = [
  { id: "t1", name: "Daniel Def", cases: 301, src: danielImage },
  { id: "t2", name: "Sanfole", cases: 850, src: sanfoleImage },
  { id: "t3", name: "Cesforila", cases: 470, src: cesforilaImage },
  { id: "t4", name: "Colleen", cases: 180, src: colleenImage },
  { id: "t5", name: "Haldone", cases: 212, src: handoneImage },
  { id: "t6", name: "Nik Jeo", cases: 350, src: nickImage },
];

function Team() {
  function generateMemberCard() {
    let maxVal = -Infinity;
    let maxIndex = null;
    teamDetails.forEach((ele, index) => {
      if (ele.cases > maxVal) {
        maxVal = ele.cases;
        maxIndex = index;
      }
    });

    let list = teamDetails.map((ele, index) => (
      <TeamCard
        name={ele.name}
        src={ele.src}
        key={ele.id}
        cases={ele.cases}
        color={index === maxIndex ? "var(--text-black)" : undefined}
        bgcolor={index == maxIndex ? "var(--yellow)" : undefined}
      />
    ));
    return list;
  }
  return (
    <div className={styles.teamWrapper} id="attorneys">
      <HeadingCompo heading="Our Team" />
      <div className={styles.teamDetail}>{generateMemberCard()}</div>
    </div>
  );
}

export default Team;
