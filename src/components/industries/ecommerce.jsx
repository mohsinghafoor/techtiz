import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import ecommerce from "../../assets/ecommercimg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: 437,
    height: 571,
    position: "absolute",
    marginLeft: "-38rem",
    marginTop: "-19.5rem",
    borderRadius: 34,
    [theme.breakpoints.only("md")]: {
      width: 290,
      height: 470,
      marginLeft: "-21rem",
      marginTop: "-16.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: 380,
      height: 540,
      marginLeft: "-27rem",
      marginTop: "-20rem",
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
    [theme.breakpoints.up("lg")]: {
      marginTop: 40,
    },
    [theme.breakpoints.only("md")]: {
      maxWidth: 484,
      fontSize: 24,
    },
  },
  subheading: {
    display: "flex",
    maxWidth: 584,
    height: 174,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    lineHeight: "143.4%",
    /* or 32px */

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      maxWidth: 584,
      height: 178,
    },
  },
}));

export default function Ecommerce() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={ecommerce} alt="" className={classes.img} />
      <Box className={classes.heading}>FoE-Commerce </Box>
      <Box className={classes.subheading}>
        Thank you again for the successful launch of the 3M and Converse
        applications. Your dedication, hard-work, flexibility, patience and
        professionalism is recognized and appreciated.
      </Box>
    </Container>
  );
}
