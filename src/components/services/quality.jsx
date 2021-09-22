import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import quality from "../../assets/quality.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    position: "absolute",
    width: 450.92,
    height: 400.62,
    marginLeft: 100.13,
    [theme.breakpoints.only("md")]: {
      marginLeft: 400,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 700,
    },
  },
}));

export default function Quality() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={quality} alt="" className={classes.img} />
    </Container>
  );
}
