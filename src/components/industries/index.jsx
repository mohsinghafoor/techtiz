import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IndustriesTab from "./tab";
import IndustriesAccordion from "./accordian";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    justifyContent: "center",
  },
  right: {
    marginLeft: "40rem",
    marginTop: "10rem",
    [theme.breakpoints.only("md")]: {
      marginLeft: "21rem",
      marginTop: "8rem",
    },
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
    [theme.breakpoints.only("md")]: {
      fontSize: 40,
      width: 450,
    },
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
    [theme.breakpoints.only("md")]: {
      fontSize: 20,
      width: 450,
    },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile ? (
        <IndustriesAccordion />
      ) : (
        <Grid className={classes.root} container>
          <Grid item lg={6} className={classes.right}>
            <Box className={classes.heading}>Industries We Work</Box>
            <Box className={classes.subheading}>
              We Help a diverse clientele build result-driven mobile apps for
              different industries
            </Box>
            <IndustriesTab />
          </Grid>
        </Grid>
      )}
    </>
  );
}
