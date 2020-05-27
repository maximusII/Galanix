import React from "react";
import styles from "./ThirdArticle.module.css";
import bbq from "../../../img/vintage-bbq.jpg";

function ThirdArticle({ clickHandler }) {
  return (
    <div className={styles.thirdArticle__container}>
      <section className={styles.thirdArticle__section} onClick={clickHandler}>
        <img name="2" src={bbq} alt="bbq" />
      </section>
    </div>
  );
}

export default ThirdArticle;
