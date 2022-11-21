import React from "react";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import styles from "./Services.module.css";

const inlineStyles = {
  icon: {
    fontSize: "4rem",
    // border: "1px solid black",
    color: "#ff6349",
  },
};
const Services = () => {
  return (
    <section id="services">
      <div className={styles["services-wrapper"]}>
        <div className={styles.overlay}></div>
        <div className={styles["services-container"]}></div>
        <div className={styles["services-content"]}>
          <h1>Services</h1>
          <div className={styles["service-description"]}>
            FitTown has emerged itself into a great extent within shorter time
            with modern day facilities and top class trainers, Here at FitTown
            you will get complete body transformation, Suggested diet plans
            according to your body analysis,expertise guidance,One to one
            conversation by trainers and scheduled workouts according to your
            needs and Body Mass Index(BMI) with modern day equipments that
            boosts your energy levels with required suplements that are
            available at FitTown store. We are available 24*7 so that you can
            choose yolur slot and come at your convienience your transformation
            is our proiority so What are you waiting for come on join us, do
            take a step today for your better tomorrow.
          </div>
        </div>
      </div>

      <div className={styles["services-card-container"]}>
        <div className={styles["services-card-content"]}>
          <div className={styles["services-card"]}>
            <div>
              <DownhillSkiingIcon sx={{ ...inlineStyles.icon }} />
            </div>
            <h1>CARDIO CLASS</h1>
            <p className={styles.description}>
              This class mainly focuses on raising your heart rate into your
              target heart rate zone.This is the zone where you burn most of the
              fat and calories, This will also enhance the heart rate.
            </p>
          </div>

          <div className={styles["services-card"]}>
            <div>
              <FitnessCenterIcon sx={{ ...inlineStyles.icon }} />
            </div>
            <h1>CROSSFIT CLASS</h1>
            <p className={styles.description}>
              This class mainly focuses on increasing your strength, endurance
              and improves the body composition. The core benfits are loosing
              weight, increasing stamina, and maintaining your figure.
            </p>
          </div>

          <div className={styles["services-card"]}>
            <div>
              <SportsMmaIcon sx={{ ...inlineStyles.icon }} />
            </div>
            <h1>BOXING CLASS</h1>
            <p className={styles.description}>
              This class helps in maintaining your overall physical
              conditioning, The core benefits are Improves heart health, Aids
              weight loss, Boost whole body strength, Improves balnace and
              reduces stress and so on.
            </p>
          </div>

          <div className={styles["services-card"]}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/weightlifting.png"}
                alt="No Image"
                className={styles.weightlifting}
              />
            </div>
            <h1>Weighlifting CLASS</h1>
            <p className={styles.description}>
              In this class the trainers will mainly focuses to help you manage
              or lose weight, and it can increase your metabolism to help you
              burn more calories.Strength training may enhance your quality of
              life and improve your ability to do everyday activities
            </p>
          </div>

          <div className={styles["services-card"]}>
            <div>
              <SelfImprovementIcon sx={{ ...inlineStyles.icon }} />
            </div>
            <h1>YOGA CLASS</h1>
            <p className={styles.description}>
              This class mainly focuses on which you move your body into various
              positions in order to become more fit or flexible, to improve your
              breathing, and to relax your mind.
            </p>
          </div>

          <div className={styles["services-card"]}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/zumba.png"}
                alt="No Image"
                className={styles.zumba}
              />
            </div>
            <h1>ZUMBA CLASS</h1>
            <p className={styles.description}>
              Zumba is a powerful exercise with a 600 to 1,000-calorie burn in
              just an hour. Tones your entire body. You may feel sore in places
              you never knew existed, but it gets results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;