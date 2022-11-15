import { Grid } from "@mui/material";
import React from "react";
import styles from "./About.module.css";

const About = () => {
  // debugger;

  return (
    <section id="about">
      <div className={styles["about-fitTown-container"]}>
        <div className={styles["about-fitTown-image"]}></div>
        <div className={styles["fitTown-about-us"]}>
          At FitTown, we are on a mission of transforming you into Fitter,
          Healthier and Energectic in the town. Established back in 2019 and are
          on the pace of becoming one of the best gym with modern equipments
          across the city. Come on lets join us and give yourself a challenge
          with our expertise trainers for transforming you into a fitness freak
          and unleashing the best version of you everyday.
          <p>#BeYourNewVersionEveryday</p>
        </div>
      </div>
    </section>
  );
};

export default About;
