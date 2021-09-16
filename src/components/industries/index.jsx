import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import food from "../../assets/food.png";
import IndustriesTab from "./tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  foodimg: {
    position: "absolute",
    width: 437,
    height: 571,
    left: 170,
    top: 3220,
    filter: "drop-shadow(0px 8px 9px rgba(0, 0, 0, 0.21))",
    borderRadius: 34,
  },
  heading: {
    position: "absolute",
    width: 546,
    height: 78,
    left: 674,
    top: 3250,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "64px",

    color: "#3B3E56",
  },
  subheading: {
    position: "absolute",
    width: 676,
    height: 110,
    left: 674,
    top: 3335,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: "37px",

    color: "#000000",
  },
  dflex: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 729,
    height: 52,
    left: 674,
    top: 3482,
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
  line: {
    position: "absolute",
    width: 59,
    height: 2,
    left: 674,
    top: 3527,

    background: "#FFC107",
  },
}));

export default function Industries() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.heading}>Industries we work</Typography>
      <Typography className={classes.subheading}>
        We Help a diverse clientele build result-driven mobile apps for
        different industries
      </Typography>
      <IndustriesTab />
    </Container>
  );
}
