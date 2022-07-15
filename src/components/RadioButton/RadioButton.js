import React from "react";
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import PropTypes from "prop-types";

export function MyRadio({
  label,
  option1,
  option2,
  labelOption1,
  labelOption2,
}) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={option1}
        name="radio-buttons-group"
      >
        <FormControlLabel
          value={option1}
          control={<Radio />}
          label={labelOption1}
        />
        <FormControlLabel
          value={option2}
          control={<Radio />}
          label={labelOption2}
        />
      </RadioGroup>
    </FormControl>
  );
}

MyRadio.propTypes = {
  label: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  labelOption1: PropTypes.string,
  labelOption2: PropTypes.string,
};

MyRadio.defaultProps = {
  label: "Texto Padrão",
  option1: "Opção 1",
  option2: "Opção 2",
  labelOption1: "Opção 1.1",
  labelOption2: "Opção 1.2",
};
