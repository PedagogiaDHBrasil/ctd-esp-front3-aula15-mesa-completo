import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import PropTypes from "prop-types";

export function MyCheckbox({ label }) {
  return (
    <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
  );
}

MyCheckbox.propTypes = {
  label: PropTypes.string,
};

MyCheckbox.defaultProps = {
  label: "Texto Padrão",
};
