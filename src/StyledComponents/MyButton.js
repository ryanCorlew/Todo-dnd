import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: "5px",
    color: "white",
    border: "1px solid lightgrey",
    "&:hover": { backgroundColor: "#708594" },
    "&:disabled": {
      color: "grey",
      border: "1px solid grey",
    },
  },
});

const MyButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      onClick={props.click}
      className={classes.root}
      variant="outlined"
      disabled={props.value === ""}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
