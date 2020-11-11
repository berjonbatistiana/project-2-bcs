import React from "react";
import TextField from "@material-ui/core/TextField";
import {accentColor} from "../components"

export const TextFieldInput = ({ input, label }) => {
  return (
      <TextField
        {...input}
        label={label}
        fullWidth
      />
    );
};
