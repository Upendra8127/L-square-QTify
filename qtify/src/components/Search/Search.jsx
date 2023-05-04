import React from 'react'
import styles from "./Search.module.css"

function Search({placeholder}) {
  return(
    <div className={styles.wrapper}>
    <input className={styles.search} placeholder={placeholder} />
    <button className={styles.searchButton}><img src={require("../../assets/search_icon.png")} alt="logo" /> </button>
    </div>
  )
}

export default Search