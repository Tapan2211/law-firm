import HeadingCompo from "../HeadingCompo";
import styles from "./ClientReview.module.css";
import React, { useState } from 'react'
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import JaneInmage from "../../assets/Jane-Cooper.png"
import devonImage from "../../assets/Devon-Lane.png";
import robortImage from "../../assets/Robert-Fox.png";
import celiaImage from "../../assets/review4.jpg";
import natImage from "../../assets/review5.jpg";
import bobImage from "../../assets/review6.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import Card from "../Card/Card";
let reviewData=[
    {id:"rev1",src:JaneInmage,title:"Jane Cooper",designation:"Ceo of Hunt",text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia"},
    {id:"rev2",src:devonImage,title:"Devon Lane",designation:"Ceo of Hunt",text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia"},
    {id:"rev3",src:robortImage,title:"Robert Fox",designation:"Ceo of Hunt",text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia"},
    {id:"rev4",src:celiaImage,title:"Celia Almeda",designation:"Ceo of NinjaCode",text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia"},
    {id:"rev5",src:natImage,title:"Nat Reynolds",designation:"Ceo of Buzz",text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia"},
    {id:"rev6",src:bobImage,title:"Bob Roberts",designation:"Ceo of TechAwesome",text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer sit aliqua dolor do amet sint. Velit officia"}
]

export default function ClientReview() {
 //   let [begin,setBegin]=useState(null)
 //let [swiper,setSwiper]=useState(null)
function getCard()
{
    let list=reviewData.map((ele,index)=>{
        let color;
  if(index%2===1){
    color='var(--gray-bg)';
    }
        return  <SwiperSlide key={ele.id} ><Card title={ele.title} designation={ele.designation} text={ele.text} src={ele.src} color={color} /></SwiperSlide>
    })
    return list;
}
    return (
    <div className={styles.reviewWrapper}>
        <div className={styles.section1}>
         <div>
        <HeadingCompo heading="What Our Client Says"/>
        </div>
        <div className={styles['section1-right']}>
            <LeftButton className={`${styles.button}`} />
            <RightButton className={`${styles.button}`}/>
        </div>
          
        </div>
        <div>
        {/* <div className={styles.cardContainer}> */}
            {/* {getCard()} */}


              <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={{ prevEl: '.prevEl', nextEl: '.nextEl' }}
     breakpoints={{
        1200:{
        slidesPerView:3
        },
        640:{
            slidesPerView:2,
        },
        200:{
            slidesPerView:1,
        }
        
     }}
      modules={[Navigation]}
    //   onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => setSwiper(swiper)}
    >
        
      {
       
    getCard()
    }
    </Swiper>

          </div>
          
          
          
    </div>
  )
}
