import React from 'react';
import styles from "./Navbar.module.css";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Search from '../Search/Search';
function Navbar() {
  return (
    <div className={styles.navbar}>
        <Logo/>
        <Search placeholder="Search a song of your choice"/>
        <Button>Give Feedback</Button>
    </div>
  )
}

export default Navbar;