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
    left: 170,
    top: 3220,

    borderRadius: 34,
  },
  heading: {
    display: "flex",
    maxWidth: 729,
    height: 52,
    left: 674,
    top: 3547,

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
    left: 676,
    top: 3600,

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
