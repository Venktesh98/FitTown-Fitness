import styled from "@emotion/styled";
import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import { fontWeight } from "@mui/system";
import React, { useState } from "react";
import InputControl from "../../UI/InputBox/InputControl";
import styles from "./Contact.module.css";

const inlineStyles = {
  gridStyles: {
    marginLeft: "auto",
    marginRight: "auto",
    // border: "1px solid black",
    width: "90%",
    // padding: "10% 0",
  },
  buttonStyles: {
    width: "100%",
    background: "#f5472d",
    fontWeight: 600,
    borderRadius: "2px",
    height: "3rem",
    letterSpacing: "3px",

    "&:hover": {
      background: "rgb(41,45,51)",
    },
  },
};

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("In submit");
  };

  console.log("Vlaues:", values);
  return (
    <div>
      <Paper elevation={6}>
        <Grid
          container
          spacing={2}
          sx={{
            textAlign: "center",
            border: "1px solid black",
            padding: "5% 0",
          }}
        >
          <Grid item xs={12} lg={4} sx={{ border: "1px solid black" }}>
            <h2>Contact Us</h2>
            <div>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1} sx={{ ...inlineStyles.gridStyles }}>
                  <Grid item xs={12} lg={12}>
                    <InputControl
                      name="name"
                      onChange={handleOnChange}
                      label="Your Name"
                      //   value={values.name}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <InputControl
                      name="email"
                      onChange={handleOnChange}
                      label="Your Email"
                      //   value={values.email}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={6}
                      placeholder="Your Message"
                      name="message"
                      onChange={handleOnChange}
                      className={styles["textarea"]}
                    />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ ...inlineStyles.buttonStyles }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            sx={{ backgroundColor: "rgb(41,45,51)", border: "1px solid black" }}
          >
            <Grid container spacing={2} sx={{ padding: "5% 0" }}>
              <Grid item xs={12}>
                <div className={styles.headings}>Call Us</div>
                <p className={styles.details}>+91 9099856568</p>
                <p className={styles.details}>+91 9099856844</p>
              </Grid>
              <Grid item xs={12}>
                <div className={styles.headings}>Location</div>
                <p className={`${styles.details} ${styles.location}`}>
                  401, sheetal varsha mahavir business park, Gujarat 380022
                </p>
              </Grid>
              <Grid item xs={12}>
                <div className={styles.headings}>Top Services</div>
                <ul>
                  <li>Muscle Building</li>
                  <li>Weighlifting</li>
                  <li>Cardio</li>
                  <li>Zumba</li>
                  <li>Boxing</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4} sx={{ border: "1px solid black" }}>
            HEllo Text
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Contact;
