import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "20rem",
  },
  input: {
    color: "white",
  },
});

const MyTextField = ({ change, value }) => {
  const classes = useStyles();
  return (
    <TextField
      classes={{ root: classes.root }}
      InputProps={{
        className: classes.input,
      }}
      placeholder="Enter a Todo"
      onChange={change}
      value={value}
    />
  );
};

export default MyTextField;
