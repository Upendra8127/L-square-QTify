import React from 'react'
import styles from "./hero.module.css"


function Hero() {
  return (
      <div className={styles.hero}>
        <div className="heroText"> 100 thousand songs, ad-free <br/> over thousand podcast episode </div>
        <div>
        <img className={styles.heroImage} src={require("../../assets/vibrating_headphone.png")} alt="logo" />
        </div>
      </div>
  )
}

export default Hero