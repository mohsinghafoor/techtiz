import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 200,
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    width: "100%",
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
    [theme.breakpoints.down("sm")]: { fontSize: 45 },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{ display: "flex", justifyContent: "center", marginTop: 150 }}
    >
      <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <Box className={classes.heading}>Our Pricing model</Box>
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
  );
}
