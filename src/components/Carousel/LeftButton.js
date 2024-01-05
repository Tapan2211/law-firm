
import React, { useEffect, useState } from 'react'
import styles from "./BtnStyle.module.css"
import { useSwiper } from 'swiper/react';
export default function LeftButton() {
  // const swiper = useSwiper();
  // const [isBeginning, setIsBeginning] = useState(swiper?swiper.isBeginning:true);

  // useEffect(() => {
  //   console.log(swiper)
  //   if (swiper) {
  //     swiper.on("slideChange", function () {
  //       setIsBeginning(swiper.isBeginning);
  //     });
  //   }
  // }, [swiper]);

  return (<div className={`${styles.btn} prevEl`}><img src={require("../../assets/left.png")} /></div> )
  
}
