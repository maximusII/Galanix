import React from "react";
import styles from "./ThirdArticle.module.css";
import bbq from "../../../img/vintage-bbq.jpg";

function ThirdArticle() {
  return (
    <div className={styles.thirdArticle__container}>
      <section className={styles.thirdArticle__section}>
        <img src={bbq} alt="bbq" />
      </section>
    </div>
  );
}

export default ThirdArticle;
