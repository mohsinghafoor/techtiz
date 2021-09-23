import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import education from "../../assets/education.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    position: "absolute",
    width: 437,
    height: 571,
    borderRadius: 34,
    marginLeft: "-38rem",
    marginTop: "-19.5rem",
    [theme.breakpoints.only("md")]: {
      width: 287,
      height: 419,
      marginLeft: "-22rem",
      marginTop: "-14rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: 380,
      height: 540,
      marginLeft: "-27rem",
      marginTop: "-17.5rem",
    },
  },
  heading: {
    display: "flex",
    maxWidth: 729,
    height: 52,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "143.4%",
    /* or 43px */

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 484,
      fontSize: 24,
    },
  },
  subheading: {
    display: "flex",
    maxWidth: 584,
    height: 174,
    left: 676,
    top: 3600,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    lineHeight: "143.4%",
    /* or 32px */

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      maxWidth: 484,
    },
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={education} alt="" className={classes.img} />
      <Box className={classes.heading}>Education </Box>
      <Box className={classes.subheading}>
        Thank you again for the successful launch of the 3M and Converse
        applications. Your dedication, hard-work, flexibility, patience and
        professionalism is recognized and appreciated.
      </Box>
    </Container>
  );
}
