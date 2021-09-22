import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";

import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 200,
    marginBottom: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    [theme.breakpoints.down("sm")]: { fontSize: 30 },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.heading}>Our Pricing model</Box>
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <Grid justifyContent="center" item sm={9} md={4}>
          <Card1 />
        </Grid>
        <Grid
          item
          sm={9}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card2 />
        </Grid>
        <Grid
          item
          sm={9}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card3 />
        </Grid>
      </Grid>
    </div>
  );
}
