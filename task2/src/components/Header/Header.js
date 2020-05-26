import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__title}>
        <h1>The Old Newspaper</h1>
      </div>
      <div className={styles.header__subtitle1}>
        <p>Largest Daily Circulation In New York</p>
        <p className={styles.header__subtitle1_weekdays}>135,789 WEEKDAYS</p>
        <p className={styles.header__subtitle1_date}>
          ABC Publishing Statement
          <br /> May 31, 1954
        </p>
      </div>
      <div className={styles.header__subtitle2}>
        <p>Lorem Ipsum Life History, Pages 13 and 14 Only There</p>
      </div>
    </header>
  );
}

export default Header;
