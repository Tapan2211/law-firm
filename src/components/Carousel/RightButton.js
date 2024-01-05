import React, { useEffect, useState } from 'react'
import styles from "./BtnStyle.module.css"
import {ReactComponent as RightIcon  }  from "../../assets/right.svg"
import { useSwiper } from 'swiper/react';
export default function RightButton() {
    // const swiper = useSwiper();
    // let [isEnd,setIsEnd]=useState(swiper?swiper.isEnd:false)
    // useEffect(()=>{
    //   if(swiper)
    //   {
    //  swiper.on("slideChange",()=>
    //  {setIsEnd(swiper.isEnd)})
    //   }
    // },[])
  return  (  <div  className={`${styles.btn} nextEl`}> <RightIcon/> </div>
  )
}
