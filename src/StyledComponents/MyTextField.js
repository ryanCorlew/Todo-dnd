import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    width: "20rem",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
});

const MyTextField = ({ change, value }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      placeholder="Enter a Todo"
      onChange={change}
      value={value}
    />
  );
};

export default MyTextField;
