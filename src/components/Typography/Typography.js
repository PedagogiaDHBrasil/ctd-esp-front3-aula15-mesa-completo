import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export function MyTypography({ label }) {
  return <Typography>{label}</Typography>;
}

MyTypography.propTypes = {
  label: PropTypes.string,
};

MyTypography.defaultProps = {
  label: "Título Padrão",
};
