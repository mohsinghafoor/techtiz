import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Box, Button } from "@material-ui/core";
import dedicated from "../../assets/dedicated.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 418,
    height: 531,
    marginTop: 90,
    background: "#F0FBFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: 33,
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: 418,
      height: 531,
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      width: 324,
      height: 462,
      marginLeft: -60,
    },
    [theme.breakpoints.down("sm")]: { width: 454, height: 490 },
    [theme.breakpoints.down("xs")]: { width: 350, height: 490 },
  },

  heading: {
    height: 37,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 311,
      height: 70,
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 311,
      fontSize: 30,
      height: 70,
    },
  },
  img: {
    width: 128,
    height: 109,
    [theme.breakpoints.only("md")]: {
      width: 107,
      height: 91,
    },
  },
  line: {
    width: 300,
    height: 2,

    background: "#C4C4C4",
    [theme.breakpoints.only("md")]: {
      maxWidth: 136,
      height: 1,
    },
    [theme.breakpoints.down("sm")]: {
      width: 269,
    },
  },
  circle: {
    position: "absolute",
    width: 18,
    height: 18,
    marginTop: 160,
    borderRadius: "20rem",
    background: "#81B1C1",
    [theme.breakpoints.down("md")]: {
      maxWidth: 10,
      height: 10,
      marginTop: -90,
    },
  },
  text1: {
    width: 300,
    height: 92,
    marginTop: 30,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "25px",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 292,
      height: 50,
      fontSize: 14,
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: 373,
      fontSize: 18,
      height: 70,
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: 333,
      fontSize: 16,
      height: 70,
    },
  },
  text2: {
    width: 300,
    height: 135,
    fontFamily: "Axiforma",
    fontStyle: " normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "25px",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 292,
      height: 121,
      fontSize: 14,
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: 373,
      fontSize: 18,
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: 333,
      fontSize: 16,
      height: 120,
    },
  },
  btn: {
    width: 223,
    height: 50,
    background: "#FFFFFF",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: "22px",
    /* identical to box height */

    color: "#7FC6DC",
    [theme.breakpoints.only("md")]: {
      maxWidth: 176,
      height: 47,
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 226,
      fontSize: 18,
      height: 49,
    },
  },
}));

export default function Card3() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <img src={dedicated} alt="" className={classes.img} />
        <Box className={classes.heading}>Dedicated Resource</Box>
        <Box className={classes.line} />
        <Box className={classes.circle} />
        <Box className={classes.text1}>
          Our packages are flexible, depending upon the services you acquire.
        </Box>
        <Box className={classes.text2}>
          We provide a detailed consultation about pricing and delivery schedule
          when you first approach us to ensure we’re on the same page.
        </Box>
        <Button className={classes.btn}>Let’s Begin</Button>
      </Card>
    </Container>
  );
}
