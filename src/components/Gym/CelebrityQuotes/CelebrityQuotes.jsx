import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CelebrityQuotes.module.css";

const CelebrityQuotes = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      <div className={styles["carousel-wrapper"]}>
        <div className={styles["carousel-overlay"]}></div>
        <div className={styles["carousel-background-wrapper"]}>
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3500}
            centerMode={false}
            className={styles["carousel"]}
            containerClass="container-with-dots"
            draggable
            focusOnSelect={false}
            infinite={true}
            ssr={true} // means to render carousel on server-side.
            swipeable={true}
            minimumTouchDrag={80}
            pauseOnHover
          >
            <div className={styles["carousel-wrapper"]}>
              <div className={styles["carousel-image-container"]}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/celebrities/hrithik.jfif"
                  }
                />
              </div>

              <p className={styles.author}>Hrithik Roshan</p>

              <p className={styles["author-quote"]}>
                "The more you practice overcoming your OBSTACLES, The more you
                will welcome them and be UNAFRAID."
              </p>
            </div>

            <div className={styles["carousel-wrapper"]}>
              <div className={styles["carousel-image-container"]}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/celebrities/virat.jpg"}
                />
              </div>

              <p className={styles.author}>Virat Kohli</p>

              <p className={styles["author-quote"]}>
                "A fit body gives you confidence"
              </p>
            </div>

            <div className={styles["carousel-wrapper"]}>
              <div className={styles["carousel-image-container"]}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/celebrities/rock.jfif"}
                />
              </div>

              <p className={styles.author}>Dwayne Johnson - The Rock</p>

              <p className={styles["author-quote"]}>
                "Blood, Sweat and Respect. First two you give and last one you
                earn."
              </p>
            </div>

            <div className={styles["carousel-wrapper"]}>
              <div className={styles["carousel-image-container"]}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/celebrities/arnold.jfif"
                  }
                />
              </div>

              <p className={styles.author}>Arnold Schwarzenegger</p>

              <p className={styles["author-quote"]}>
                "STRENGTH does not come from winning, Your Struggles develop
                your strength. WHEN YOU GO THROUGH HARDSHIPS AND DECIDE NOT TO
                SURRENDER that is Strength"
              </p>
            </div>

            <div className={styles["carousel-wrapper"]}>
              <div className={styles["carousel-image-container"]}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/celebrities/anoop.jpg"}
                />
              </div>

              <p className={styles.author}>Anoop Thakur</p>

              <p className={styles["author-quote"]}>
                "Never explain yourself to others, Show them."
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CelebrityQuotes;
