import React from "react";
import styles from "./Articles.module.css";

import FirstArticle from "./FirstArticle/FirstArticle";
import SecondArticle from "./SecondArticle/SecondArticle";
import ThirdArticle from "./ThirdArticle/ThirdArticle";
import FourthArticle from "./FourthArticle/FourthArticle";
import FifthArticle from "./FifthArticle/FifthArticle";
import SixthArticle from "./SixthArticle/SixthArticle";
import SeventhArticle from "./SeventhArticle/SeventhArticle";
import EighthArticle from "./EighthArticle/EighthArticle";
import NinthArticle from "./NinthArticle/NinthArticle";

function Articles() {
  return (
    <div className={styles.articles__container}>
      <div className={styles.articles__firstColumn}>
        <div className={styles.articles__first}>
          <FirstArticle />
        </div>
        <div className={styles.articles__second}>
          <SecondArticle />
        </div>
        <div className={styles.articles__third}>
          <ThirdArticle />
        </div>
        <div className={styles.articles__fourth}>
          <FourthArticle />
        </div>
      </div>
      <div className={styles.articles__secondColumn}>
        <div className={styles.articles__fifth}>
          <FifthArticle />
        </div>
        <div className={styles.articles__sixth}>
          <SixthArticle />
        </div>
        <div className={styles.articles__seventh}>
          <SeventhArticle />
        </div>
      </div>
      <div className={styles.articles__thirdColumn}>
        <EighthArticle className={styles.articles__eighth} />
        <NinthArticle className={styles.articles__ninth} />
      </div>
    </div>
  );
}

export default Articles;
