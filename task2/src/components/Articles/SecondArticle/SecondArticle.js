import React from "react";
import styles from "./SecondArticle.module.css";
import vintageCamera from "../../../img/vintage-camera.png";

function SecondArticle({ clickHandler }) {
  return (
    <div className={styles.secondArticle__container}>
      <section className={styles.secondArticle__section} onClick={clickHandler}>
        <h2>Extra! Only next week</h2>
        <h3> &#9733;World Tour Top Stars Of America&#9733;</h3>
        <img name="1" src={vintageCamera} alt="vintage-camera" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          molestias quam ipsam nesciunt. Veritatis et tempora corporis unde
          aspernatur dicta laborum iste vel vitae nisi inventore itaque
          temporibus rem repudiandae porro officia placeat molestiae eligendi
          necessitatibus expedita praesentium laborum impedit maxime dolorum
          doloremque, incidunt quibusdam rerum laudantium repellat ab. Totam
          quam sint doloremque voluptates molestiae aspernatur, ratione eius ab
          amet. Corrupti magnam repudiandae nostrum incidunt eos omnis, dolores
          cum neque eaque possimus aperiam praesentium alias consectetur! Nisi
          iusto unde a praesentium officiis, omnis facere? sint doloremque
          voluptates molestiae aspernatur, ratione eius ab amet. Corrupti magnam
          repudiandae nostrum incidunt eos omnis, dolores cum neque eaque
          possimus aperiam praesentium alias consectetur! Nisi iusto unde a
          praesentium officiis, omnis facere? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur molestias quam ipsam nesciunt.
          Veritatis et tempora corporis unde aspernatur dicta laborum iste vel
          vitae nisi inventore itaque temporibus rem repudiandae porro officia
          placeat molestiae eligendi optio consequatur facilis pariatur ad,
          deleniti nesciunt. Velit nostrum neque eaque, aut voluptatibus alias
          distinctio nobis necessitatibus expedita praesentium laborum impedit
          maxime dolorum doloremque, incidunt quibusdam rerum laudantium
          repellat ab. Totam quam sint doloremque voluptates molestiae
          aspernatur, ratione eius ab amet. Corrupti magnam repudiandae nostrum
          incidunt eos omnis, dolores cum neque eaque possimus aperiam
          praesentium alias consectetur! Nisi iusto unde a praesentium officiis,
          omnis facere? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur molestias quam ipsam nesciunt. Veritatis et tempora corporis
          unde aspernatur dicta laborum iste vel vitae nisi inventore itaque
          temporibus rem repudiandae porro officia placeat molestiae eligendi
          optio consequatur facilis pariatur ad, deleniti nesciunt. Velit
          nostrum neque eaque, aut voluptatibus alias distinctio nobis
          necessitatibus expedita praesentium laborum impedit maxime dolorum
          doloremque, incidunt quibusdam rerum laudantium repellat ab. Totam
          quam sint doloremque voluptates molestiae aspernatur, ratione eius ab
          amet. Corrupti magnam repudiandae nostrum incidunt eos omnis, dolores
          cum neque eaque possimus aperiam praesentium alias consectetur! Nisi
          iusto unde a praesentium officiis, omnis facere?raesentium alias
          consectetur! Nisi iusto unde a praesentium officiis, omnis facere?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          molestias quam ipsam nesciunt. Veritatis et tempora corporis unde
          aspernatur dicta laborum iste vel vitae nisi inventore itaque
          temporibus rem repudiandae porro officia placeat molestiae eligendi
          optio consequatur facilis pariatur ad, deleniti nesciunt. Velit
          nostrum neque eaque, aut voluptatibus alias distinctio nobis
          necessitatibus expedita praesentium laborum impedit maxime dolorum
          doloremque, incidunt quibusdam rerum laudantium repellat ab. Totam
          quam sint doloremque voluptates molestiae aspernatur, ratione eius ab
          amet. Corrupti magnam repudiandae nostrum incidunt eos omnis, dolores
          cum neque eaque possimus aperiam praesentium alias consectetur! Nisi
          iusto unde a praesentium officiis, omnis facere?
        </p>
      </section>
    </div>
  );
}

export default SecondArticle;
