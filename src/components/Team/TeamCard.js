import styles from "./TeamCard.module.css"
import React from 'react'

export default function  TeamCard( {src,cases,name,color,bgcolor}) {
  return (
    <div className={styles.teamCardWrapper } style={{backgroundColor:bgcolor?bgcolor:undefined}} >
    <div className={styles.imgWrapper}>
    <img src={src} />
    </div>
    <div className={styles.teamCardRight}>
      <h3 className={styles['member-name']} style={{color:color?color:undefined}}>{name}</h3>
      <p>{cases} Cases</p>
    </div>

    </div>
  )
}
