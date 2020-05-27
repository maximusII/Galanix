import React from "react";
import styles from "./SeventhArticle.module.css";
import rotaryPhone from "../../../img/rotary-phone.png";

function SeventhArticle({ clickHandler }) {
  return (
    <div className={styles.seventhArticle__container}>
      <section
        className={styles.seventhArticle__section}
        onClick={clickHandler}
      >
        <h2>Phone number</h2>
        <h2>+000 111 2223</h2>
        <p>24 hours/7 day in a week</p>
        <img name="3" src={rotaryPhone} alt="rotary phone" />
      </section>
    </div>
  );
}

export default SeventhArticle;
