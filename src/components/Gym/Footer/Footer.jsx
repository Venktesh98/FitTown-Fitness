import { Divider, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import styles from "./Footer.module.css";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <section className={styles["footer-container"]}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4.5}
          /* sx={{           
            display: "flex",
            justifyContent: "center",
          }} */
        >
          <div className={styles["fitTown-container"]}>
            <div className={styles.logo}>
              Fit<span>Town</span>
            </div>
            <div className={styles["gym-description"]}>
              Your Ultimate Fitness Center, The place where you can test the
              best Version of yourself, Step up and gear yourself towards your
              Fitness Journey. <span>#UnleashTheBeastInYou</span>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={2}
          // sx={{ marginLeft: "2%" }}
          /* sx={{           
            display: "flex",
            justifyContent: "center",
          }} */
        >
          <div className={styles["footer-links-container"]}>
            <h3 className={styles["footer-links-heading"]}>Quick Links</h3>
            <div className={styles.quicklinks}>
              <a>Back to Top</a>
              <a>About</a>
              <a>Services</a>
              <a>Trainers</a>
              <a>Gallery</a>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={2.6}
          /* sx={{           
            display: "flex",
            justifyContent: "center",
          }} */
        >
          <div className={styles["footer-links-container"]}>
            <h3 className={styles["footer-links-heading"]}>Location</h3>
            <div className={styles["location-address"]}>
              401, sheetal varsha mahavir business park, Gujarat 380022
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={2.6}
          /* sx={{           
            display: "flex",
            justifyContent: "center",
          }} */
        >
          <div className={styles["footer-links-container"]}>
            <h3 className={styles["footer-links-heading"]}>Contact</h3>
            <div className={styles["contact-details-container"]}>
              <div className={styles["contact-details"]}>
                <div>
                  <CallIcon sx={{ fill: "white", fontSize: "2rem" }} />
                </div>
                <div>+91 8488998652</div>
              </div>

              <div className={styles["contact-details"]}>
                <div>
                  <MailIcon sx={{ fill: "white", fontSize: "2rem" }} />
                </div>
                <div>+91 8488998652</div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Box className={styles.divider}>
        <Divider sx={{ background: "white" }} />
        <p>Copyright © 2022 - fitTown | All rights reserved.</p>
      </Box>
    </section>
  );
};

export default Footer;
