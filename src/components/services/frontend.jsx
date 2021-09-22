import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import front from "../../assets/frontend.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    position: "absolute",
    // marginTop: 200.93,
    filter: "drop-shadow(9px 0px 14px rgba(0, 0, 0, 0.25))",
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

export default function FrontEnd() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={front} alt="" className={classes.img} />
    </Container>
  );
}
