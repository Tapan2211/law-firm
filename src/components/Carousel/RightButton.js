import React, { useEffect, useState } from "react";
import styles from "./BtnStyle.module.css";
import { ReactComponent as RightIcon } from "../../assests/right.svg";
import { useSwiper } from "swiper/react";

function RightButton() {
  return (
    <div className={`${styles.btn} nextEl`}>
      {" "}
      <RightIcon />{" "}
    </div>
  );
}

export default RightButton;
