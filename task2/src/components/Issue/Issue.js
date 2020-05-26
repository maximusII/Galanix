import React from "react";
import styles from "./Issue.module.css";

function Issue() {
  return (
    <div className={styles.issue__container}>
      <div className={styles.issue__item1}>
        <p>Vol. 127 - N0. 139</p>
      </div>
      <div className={styles.issue__item2}>
        <p>New York, Sunday, May17, 1954-48 Pages in 4 Sections</p>
      </div>
      <div className={styles.issue__item3}>
        <p>Price 10 cents</p>
      </div>
    </div>
  );
}

export default Issue;
