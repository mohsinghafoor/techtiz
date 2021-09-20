import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, Container, Typography } from "@material-ui/core";

import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 200,
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    height: 55,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "92px",
    color: "#3B3E56",
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.heading}>Our Pricing model</Box>
      <Card1 />
      <Card2 />
      <Card3 />
    </Container>
  );
}
