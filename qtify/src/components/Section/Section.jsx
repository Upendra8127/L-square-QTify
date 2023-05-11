import React from 'react'
import styles from "./Section.module.css";

function Section({title}) {
  return( 
  <div className={styles.wrapper}>
   <div><h4>{title}</h4></div>
   <div><h4>Show All</h4></div>
    
 </div>)

}

export default Section