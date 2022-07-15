import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export function MyTextField({ label, variant }) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant={variant}
      sx={{ width: 1 }}
    />
  );
}

MyTextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
};

MyTextField.defaultProps = {
  label: "Texto Padrão",
  variant: "outlined",
};

