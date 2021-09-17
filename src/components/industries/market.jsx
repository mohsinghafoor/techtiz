import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import market from "../../assets/market.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    position: "absolute",
    width: 437,
    height: 571,
    left: 170,
    top: 3220,

    borderRadius: 34,
  },
  heading: {
    position: "absolute",
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
    position: "absolute",
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

export default function Market() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={market} alt="" className={classes.img} />
      <Typography className={classes.heading}>Marketplace </Typography>
      <Typography className={classes.subheading}>
        Thank you again for the successful launch of the 3M and Converse
        applications. Your dedication, hard-work, flexibility, patience and
        professionalism is recognized and appreciated.
      </Typography>
    </Container>
  );
}
