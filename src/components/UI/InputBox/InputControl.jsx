import { TextField } from "@mui/material";
import React from "react";

const InputControl = ({
  type = "text",
  value,
  name,
  onChange,
  label,
  required = false,
  error = null,
}) => {
  const inlineStyles = {
    inputStyles: {
      width: "100%",
      // marginBottom: "10px",
    },
  };
  return (
    <div>
      <TextField
        sx={{ ...inlineStyles.inputStyles }}
        type={type}
        required={required}
        // id="outlined-basic"
        label={label}
        variant="outlined"
        name={name}
        value={value}
        onChange={onChange}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
};

export default InputControl;
