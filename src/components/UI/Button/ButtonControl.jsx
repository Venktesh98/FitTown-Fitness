import { Button } from "@mui/material";
import React from "react";

const inlineStyles = {
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

const ButtonControl = ({ text }) => {
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        sx={{ ...inlineStyles.buttonStyles }}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonControl;
