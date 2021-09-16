import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import TabValue from "./tabvalue";
import ServicesTab from "./tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  services: {
    position: "absolute",
    width: 474,
    height: 105,
    left: 553,
    top: 853,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "113.6%",
    /* or 51px */

    color: "#3B3E56",
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.services}>Our Valued Services</Typography>
      <ServicesTab />
      <TabValue />
    </Container>
  );
}
