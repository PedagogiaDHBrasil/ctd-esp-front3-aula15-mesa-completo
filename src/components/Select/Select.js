import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

export function MySelect({ label, option1, option2, option3 }) {
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={select}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value={10}>{option1}</MenuItem>
        <MenuItem value={20}>{option2}</MenuItem>
        <MenuItem value={30}>{option3}</MenuItem>
      </Select>
    </FormControl>
  );
}

MySelect.propTypes = {
  label: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
};

MySelect.defaultProps = {
  label: "Texto Padrão",
  option1: "Opção 1",
  option2: "Opção 2",
  option3: "Opção 3",
};
