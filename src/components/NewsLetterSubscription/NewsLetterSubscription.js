import HeadingCompo from "../HeadingCompo"
import styles from "./NewLetterSubscription.module.css"
import React, { useState } from 'react'
import { enqueueSnackbar, useSnackbar } from "notistack";
export default function NewsLetterSubscription() {
    let {enueueSnackbar}=useSnackbar();
    let [inp,setInp]=useState({name:"",email:""});
    function handleSubmit(e)
    {
        e.preventDefault();
        if(inp.name.length===0)
        {
        enqueueSnackbar("Name can not be empty",{variant:"warning"});
        return;
        }
        if(inp.email.length===0)
        {
            enqueueSnackbar("Enter Your Email address",{variant:"warning"});
            return;
        }
    }
    function handleChange(e)
    {
        setInp((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
  return (
    <div className={styles.subWrapper}>
        <HeadingCompo heading="Subscribe Our Newsletter"/>
        <form onSubmit={handleSubmit} className={styles['form-wrapper']} >
            <input type="text" className={`${styles.input} ${styles['input-name']}`} placeholder="Name" name="name" onChange={handleChange} value={inp.name}/>
            <input type="email" className={`${styles.input}`}placeholder="Enter Your Email" name="email" onChange={handleChange} value={inp.email} style={{fontStyle:"italic"}} />
            <input type="submit" className={styles.btn} value="SEND"/>
        </form>
    </div>
  )
}
