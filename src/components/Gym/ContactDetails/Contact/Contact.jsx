import styled from "@emotion/styled";
import { Button, Grid, Paper, TextareaAutosize } from "@mui/material";
import { fontWeight } from "@mui/system";
import React, { useState } from "react";
import { Form } from "../../../Hooks/useForm";
import ButtonControl from "../../../UI/Button/ButtonControl";
import InputControl from "../../../UI/InputBox/InputControl";
import Map from "../Map/Map";
import styles from "./Contact.module.css";

const inlineStyles = {
  gridStyles: {
    marginLeft: "auto",
    marginRight: "auto",
    // border: "1px solid black",
    width: "90%",
    // padding: "10% 0",
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
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ ...inlineStyles.gridStyles }}>
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
                    <ButtonControl text="Submit" />
                  </Grid>
                </Grid>
              </Form>
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
            <Map />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Contact;
