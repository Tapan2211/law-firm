import styles from "./HeadingCompo.module.css"
import React from 'react'

export default function HeadingCompo(props) {
  return (
    <h1 className={styles.heading}>{props.heading}</h1>
  )
}
