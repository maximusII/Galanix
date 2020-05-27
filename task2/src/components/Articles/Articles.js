import React, { useState } from "react";
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

import img0 from "../../img/vintage-car.png";
import img1 from "../../img/vintage-camera.png";
import img2 from "../../img/vintage-bbq.jpg";
import img3 from "../../img/rotary-phone.png";
import img4 from "../../img/typewriter.png";

const images = [img0, img1, img2, img3, img4];

function Articles() {
  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  function clickHandler(e) {
    if (e.target.name) {
      setOpenModal(true);
      setActiveImage(images[e.target.name]);
    }
    if (e.target.id === "left") {
      setActiveImage(images[images.indexOf(activeImage) - 1]);
    }
    if (e.target.id === "right") {
      setActiveImage(images[images.indexOf(activeImage) + 1]);
    }
    if (e.target.parentNode.id === "close") {
      setOpenModal(false);
    }
  }

  return openModal ? (
    <div className={styles.modal}>
      <div id="close" className={styles.close} onClick={clickHandler}>
        <div className={styles.close1}>|</div>
        <div className={styles.close2}>|</div>
      </div>
      <div
        id="left"
        className={
          images.indexOf(activeImage) !== 0
            ? styles.leftArrow
            : styles.leftArrow__invisible
        }
        onClick={clickHandler}
      >
        &lt;
      </div>

      <img src={activeImage} alt="big-size" />

      <div
        id="right"
        className={
          images.indexOf(activeImage) !== images.length - 1
            ? styles.rightArrow
            : styles.rightArrow__invisible
        }
        onClick={clickHandler}
      >
        &gt;
      </div>
    </div>
  ) : (
    <div className={styles.articles__container}>
      <div className={styles.articles__firstColumn}>
        <div className={styles.articles__first}>
          <FirstArticle clickHandler={clickHandler} />
        </div>
        <div className={styles.articles__second}>
          <SecondArticle clickHandler={clickHandler} />
        </div>
        <div className={styles.articles__third}>
          <ThirdArticle clickHandler={clickHandler} />
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
          <SeventhArticle clickHandler={clickHandler} />
        </div>
      </div>
      <div className={styles.articles__thirdColumn}>
        <EighthArticle
          className={styles.articles__eighth}
          clickHandler={clickHandler}
        />
        <NinthArticle className={styles.articles__ninth} />
      </div>
    </div>
  );
}

export default Articles;
