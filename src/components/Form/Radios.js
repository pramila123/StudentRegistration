import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

const Radios = ({ value, label, ...otherProps }) => {
  const radioConfig = {
    ...otherProps,
  };
  return (
    <FormControlLabel
      {...radioConfig}
      value={value}
      control={<Radio />}
      label={label}
    />
  );
};

export default Radios;
