import React from "react";
import styles from "./EighthArticle.module.css";
import typewriter from "../../../img/typewriter.png";

function EighthArticle({ clickHandler }) {
  return (
    <div className={styles.eighthArticle__container}>
      <section className={styles.eighthArticle__section} onClick={clickHandler}>
        <img name="4" src={typewriter} alt="rotary phone" />
        <h2>Your title</h2>
        <h3>All information</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          molestias quam ipsam nesciunt. Veritatis et tempora corporis unde
          aspernatur dicta laborum iste vel vitae nisi inventore itaque
          temporibus rem repudiandae porro officia placeat molestiae eligendi
          optio consequatur facilis pariatur ad, deleniti nesciunt. Velit
          nostrum neque eaque, aut voluptatibus alias distinctio nobis
          necessitatibus expedita praesentium laborum impedit maxime dolorum
          doloremque, incidunt quibusdam rerum laudantium repellat ab. Totam
          quam sint doloremque voluptates molestiae aspernatur, ratione eius ab
          amet. Corrupti magnam rep praesentium alias consectetur! Nisi iusto
          unde a praesentium officiis, omnis facere? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur molestias quam ipsam nesciunt.
          Veritatis et tempe eaoluptatibus alias distinctio nobis necessitatibus
          expedita praesentium laborum impedit maxime dolorum doloremque,
          incidunt quibusdam rerum laudantium repellat ab. Totam quam sint
          doloremque voluptates molestiae aspernatur, ratione eius ab amet.
          Corrupti magnam repudiandae nostrum incidunt eos omnis, dolores cum
          neque eaque possimus aperiamora corporis unde aspernatur dicta laborum
          iste vel vitae nisi inventore itaque temporibus rem repudiandae porro
          officia placeat molestiae eligendi optio consequatur facilis pariatur
          ad, deleniti nesciunt. Velit nostrum neque eaque, aut voluptatibus
          alias distinctio nobis necessitatibus expedita praesentium laborum
          impedit maxime dolorum doloremque, incidunt quibusdam rerum laudantium
          repellat ab. Totam quam sint doloremque voluptates molestiae
          aspernatur, ratione eius ab amet. Corrupti magnam repudiandae nostrum
          incidunt eos omnis, dolores cum neque eaque possimus aperiam
          praesentium alias consectetur! Nisi iusto unde a praesentium officiis,
          omnis facere?
        </p>
      </section>
    </div>
  );
}

export default EighthArticle;
