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
    width: 371.92,
    height: 360.62,
    marginLeft: 170.13,
    [theme.breakpoints.only("md")]: {
      marginLeft: -320,
      marginTop: 100,
      width: 300,
      height: 320,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: -400,
      marginTop: 100,
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
