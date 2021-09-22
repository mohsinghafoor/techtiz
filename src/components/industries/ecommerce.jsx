import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
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
      width: 350,
      height: 500,
      marginLeft: "-24rem",
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
