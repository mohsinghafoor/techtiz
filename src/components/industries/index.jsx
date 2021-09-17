import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import IndustriesTab from "./tab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  foodimg: {
    width: 437,
    height: 571,
    filter: "drop-shadow(0px 8px 9px rgba(0, 0, 0, 0.21))",
    borderRadius: 34,
  },
  heading: {
    width: 546,
    height: 78,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "64px",
    marginLeft: 70,
    color: "#3B3E56",
  },
  subheading: {
    marginLeft: 70,
    width: 676,
    height: 110,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: "37px",

    color: "#000000",
  },
  dflex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 729,
    height: 52,
  },
  content: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    textDecoration: "none",
    lineHeight: "32px",
    /* or 32px */

    color: "black",
  },
}));

export default function Industries() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item lg={6}>
        <Box className={classes.heading}>Industries we work</Box>
        <Box className={classes.subheading}>
          We Help a diverse clientele build result-driven mobile apps for
          different industries
        </Box>
        <IndustriesTab />
      </Grid>
    </Grid>
  );
}
