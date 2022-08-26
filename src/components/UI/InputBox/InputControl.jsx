import { TextField } from "@mui/material";
import React from "react";

const InputControl = ({ name, onChange, label }) => {
  const inlineStyles = {
    inputStyles: {
      width: "100%",
    },
  };
  return (
    <div>
      <TextField
        sx={{ ...inlineStyles.inputStyles }}
        id="outlined-basic"
        label={label}
        variant="outlined"
        name={name}
        // value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputControl;
