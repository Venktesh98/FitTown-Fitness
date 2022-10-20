import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import styles from "./Pricing.module.css";

const BuyNowButton = styled(Button)({
  backgroundColor: "white",
  color: "#f5634b",
  fontWeight: "600",

  "&:hover": {
    backgroundColor: "white",
    color: "#f5634b",
  },
});

const Pricing = () => {
  return (
    <section className={styles["pricing-section"]}>
      <div className={styles["price-headings"]}>
        <h2>Choose your fitness regime</h2>
        <h4>The flexile plans that suits your fitness needs.</h4>
      </div>

      <div className={styles["table-container"]}>
        <table>
          <thead>
            <tr className={styles["table-heading"]}>
              <th scope="col"></th>
              <td></td>
              <th scope="col">
                <div
                  className={`${styles.elite} ${styles["elite-background"]}`}
                >
                  ELITE
                </div>
              </th>
              <th scope="col">
                <div className={`${styles.pro} ${styles["pro-background"]}`}>
                  PRO
                </div>
              </th>
              <th scope="col">
                <div className={`${styles.live} ${styles["live-background"]}`}>
                  LIVE
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {/* First Row */}
            <tr>
              <th scope="row">
                <div className={styles["gym-rows"]}>
                  ELITE Gyms & At Centre Group Classes
                </div>
              </th>
              <td className={styles["empty-cell"]}></td>

              <td className={styles["gym-data-rows"]}>
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div
                    className={`${styles["gyms-colmns-text"]} ${styles["gym-session-text"]}`}
                  >
                    04 Sessions/ month
                  </div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div className={styles["cancel-column"]}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/white-circle-cross.png"
                      }
                      alt="No Image"
                    />
                  </div>
                </div>
              </td>
            </tr>

            {/* Second Row */}
            <tr>
              <th scope="row">
                <div className={styles["gym-rows"]}>PRO Gyms</div>
              </th>
              <td className={styles["empty-cell"]}></td>

              <td className={styles["gym-data-rows"]}>
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div className={styles["cancel-column"]}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/white-circle-cross.png"
                      }
                      alt="No Image"
                    />
                  </div>
                </div>
              </td>
            </tr>

            {/* Third Row */}
            <tr>
              <th scope="row">
                <div className={styles["gym-rows"]}>Smart workout plans</div>
              </th>
              <td className={styles["empty-cell"]}></td>

              <td className={styles["gym-data-rows"]}>
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div className={styles["cancel-column"]}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/white-circle-cross.png"
                      }
                      alt="No Image"
                    />
                  </div>
                </div>
              </td>
            </tr>

            {/* Fourth Row */}
            <tr>
              <th scope="row">
                <div className={styles["gym-rows"]}>At home workout</div>
              </th>
              <td className={styles["empty-cell"]}></td>

              <td className={styles["gym-data-rows"]}>
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/blue-tick-circle.png"
                      }
                      loading="lazy"
                      alt="No Image"
                    />
                  </div>

                  <div className={styles["gyms-colmns-text"]}>Unlimited</div>
                </div>
              </td>
            </tr>

            {/* Fifth Row - last row*/}
            <tr>
              <th scope="row">
                <div className={styles["gym-rows"]}></div>
              </th>
              <td className={styles["row-last"]}></td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["row-last"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div className={styles["gyms-colmns-text-last-row"]}>
                    Starting at &#8377;1100 / month
                  </div>

                  <div>
                    <BuyNowButton variant="contained">Buy Now</BuyNowButton>
                  </div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]} ${styles["row-last"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div className={styles["gyms-colmns-text-last-row"]}>
                    Starting at &#8377;714 / month
                  </div>

                  <div>
                    <BuyNowButton variant="contained">Buy Now</BuyNowButton>
                  </div>
                </div>
              </td>

              <td
                className={`${styles["gym-data-rows"]} ${styles["gym-data-rows-extended"]} ${styles["row-last"]}`}
              >
                <div className={styles["gym-colmns"]}>
                  <div className={styles["gyms-colmns-text-last-row"]}>
                    Starting at &#8377;115 / month
                  </div>
                  <div>
                    <BuyNowButton variant="contained">Buy Now</BuyNowButton>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Pricing;
