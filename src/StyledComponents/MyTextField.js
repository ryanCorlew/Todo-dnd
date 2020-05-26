import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "fit-content",
  },
  input: {
    color: "white",
  },
});

const MyTextField = ({ change, value, isEditing }) => {
  const classes = useStyles();

  if (isEditing) {
    return (
      <TextField
        classes={{ root: classes.root }}
        InputProps={{
          className: null,
        }}
        placeholder=""
        onChange={change}
        defaultValue={value}
      />
    );
  } else {
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
  }
};

export default MyTextField;
