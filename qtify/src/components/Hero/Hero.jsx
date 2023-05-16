import React from 'react'
import styles from "./hero.module.css"


function Hero() {
  return (
      <div className={styles.hero}>
        <div> <h2>100 thousand songs, ad-free</h2> <h2> over thousand podcast episode</h2> </div>

        <div>
        <img  src={require("../../assets/vibrating_headphone.png")} width={212} alt="logo" />
        </div>
      </div>
  )
}

export default Hero