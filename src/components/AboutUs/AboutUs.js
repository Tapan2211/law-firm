import React from 'react'
import styles from "./AboutUs.module.css"
import HeadingCompo from '../HeadingCompo'

export default function AboutUs() {
  return (
    // <div className={styles.['section-wrapper']}>
    <div className={styles['aboutus-wrapper']}>
        {/* <div> */}
        <div className={styles['left-section']}>
        {/* <h1 className={styles['heading']}>Let's Introduce OurSelf </h1> */}
        <HeadingCompo heading="Let's Introduce OurSelf " />
        </div>
        {/* <h1>OurSelf</h1> */}
        {/* </div> */}
        <div className={styles['about-right']}>
            <h1 className={`${styles.heading} ${styles['sub-heading']}`}>Criminal Lawyer</h1>
            <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
        </div>
    {/* </div> */}
    </div>
  )
}
