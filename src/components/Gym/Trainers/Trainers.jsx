import React from "react";
import styles from "./Trainers.module.css";

const Trainers = () => {
  return (
    <section id="trainers">
      <div className={styles.heading}>Our Team</div>
      <div className={styles["trainers-listing-wrapper"]}>
        <div className={styles["trainers-listing"]}>
          <div className={styles["trainer-listing-bg"]}></div>
          <div className={styles["single-trainer"]}>
            <div className={styles["trainer-name"]}>
              <span>Hussian</span>
              <br />
              <span>Lokhandvala</span>
            </div>
            <div className={styles["trainer-image-wrapper"]}>
              <img
                className={styles["trainer-image"]}
                src={process.env.PUBLIC_URL + "/assets/trainers/Hussain.jpg"}
                alt="No Image"
              />
            </div>
          </div>
          <div className={styles["single-trainer"]}>
            <div className={styles["trainer-name"]}>
              <span>Ankit</span>
              <br />
              <span>Khatri</span>
            </div>
            <div className={styles["trainer-image-wrapper"]}>
              <img
                className={styles["trainer-image"]}
                src={process.env.PUBLIC_URL + "/assets/trainers/Ankit.jpg"}
                alt="No Image"
              />
            </div>
          </div>
          <div className={styles["single-trainer"]}>
            <div className={styles["trainer-name"]}>
              <span>Ayaz</span>
              <br />
              <span>Khan</span>
            </div>
            <div className={styles["trainer-image-wrapper"]}>
              <img
                className={styles["trainer-image"]}
                src={process.env.PUBLIC_URL + "/assets/trainers/Ayaz_Khan.jpg"}
                alt="No Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
