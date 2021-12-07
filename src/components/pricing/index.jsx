import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";

import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
    [theme.breakpoints.up("lg")]: {
      marginTop: 200,
    },
  },
  heading: {
    textAlign: "center",
    height: 55,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "92px",
    color: "#3B3E56",
    [theme.breakpoints.down("sm")]: { fontSize: 45, lineHeight: "70px" },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box className={classes.heading}>Our Pricing Model</Box>
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }} item md={3}>
          <Card1 />
        </Grid>
        <Grid item md={3} style={{ display: "flex", justifyContent: "center" }}>
          <Card3 />
        </Grid>
        <Grid item md={3} style={{ display: "flex", justifyContent: "center" }}>
          <Card2 />
        </Grid>
      </Grid>
    </Container>
  );
}
