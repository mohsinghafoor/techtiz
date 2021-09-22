import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import food from "../../assets/food.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  foodimg: {
    position: "absolute",
    width: 437,
    height: 571,
    filter: "drop-shadow(0px 8px 9px rgba(0, 0, 0, 0.21))",
    borderRadius: 34,
    marginLeft: "-38rem",
    marginTop: "-19.5rem",
    [theme.breakpoints.only("md")]: {
      width: 350,
      height: 500,
      marginLeft: "-24rem",
    },
  },
  foodheading: {
    display: "flex",
    maxWidth: 729,
    height: 52,
    left: 674,
    top: 3547,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "43px",
    /* or 43px */

    color: "#000000",
  },
  foodsubheading: {
    display: "flex",
    maxWidth: 584,
    height: 174,
    left: 676,
    top: 3600,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    lineHeight: "32px",
    /* or 32px */

    color: "#000000",
  },
}));

export default function Food() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={food} alt="" className={classes.foodimg} />
      <Box className={classes.foodheading}>Food </Box>
      <Box className={classes.foodsubheading}>
        Thank you again for the successful launch of the 3M and Converse
        applications. Your dedication, hard-work, flexibility, patience and
        professionalism is recognized and appreciated.
      </Box>
    </Container>
  );
}
