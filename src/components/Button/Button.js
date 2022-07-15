import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

export function MyButton({ label, variant }) {
  return (
    <Button variant={variant} sx={{ width: 1 }}>
      {label}
    </Button>
  );
}

MyButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
};

MyButton.defaultProps = {
  label: "Texto Padrão",
  variant: "outlined",
};
