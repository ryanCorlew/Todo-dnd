import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "lightgrey",
    color: "black",
    padding: "10px",
    border: "solid #00A4FA",
    width: "fit-content",
    minWidth: "224px",
    height: "fit-content",
    margin: "10px",
  },
});

const MyCard = (props) => {
  const classes = useStyles();
  return <Card className={classes.root}>{props.children}</Card>;
};

export default MyCard;
