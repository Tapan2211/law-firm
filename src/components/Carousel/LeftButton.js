import React, { useEffect, useState } from "react";
import styles from "./BtnStyle.module.css";
import { useSwiper } from "swiper/react";

function LeftButton() {
  return (
    <div className={`${styles.btn} prevEl`}>
      <img src={require("../../assests/left.png")} />
    </div>
  );
}

export default LeftButton;
