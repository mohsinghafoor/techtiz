import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import market from "../../assets/market1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: 437,
    height: 571,
    position: "absolute",
    borderRadius: 34,
    marginLeft: "-38rem",
    marginTop: "-19.5rem",
    [theme.breakpoints.only("md")]: {
      width: 287,
      height: 450,
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
    maxWidth: 684,
    height: 174,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 22,
    lineHeight: "123.4%",
    /* or 32px */

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      maxWidth: 584,
      height: 178,
    },
  },
}));

export default function Market() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={market} alt="" className={classes.img} />
      <Box className={classes.heading}>Marketplace </Box>
      <Box className={classes.subheading}>
        Our team of developers has the expertise and experience to develop
        full-fledged cutting-edge mobile and cross-platform applications to
        cater to users’ growing demands in today’s competitive markets. From
        developing full-scale product solutions for large enterprises to
        need-specific solutions of different businesses, we offer end-to-end
        Solution
      </Box>
    </Container>
  );
}
