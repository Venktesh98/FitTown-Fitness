import { Grid } from "@mui/material";
import React from "react";

const GridContainerControl = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </>
  );
};

export default GridContainerControl;
