import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import laptopimg from "../../assets/img1.png";
import { Container, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 150,
    display: "flex",
    justifyContent: "center",
  },
  dflex: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: -150,
  },
  full: {
    display: "flex",
    maxWidth: 360,
    height: 65,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "61px",
    // /* or 61px */

    color: "#3B3E56",
  },
  app: {
    display: "flex",
    maxWidth: 631,
    height: 89,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "50px",
    /* or 50px */
    color: "#3B3E56",
    marginTop: 20,
  },
  techtiz: {
    display: "flex",
    maxWidth: 588,
    height: 144,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",
    color: "#1E3849",
    marginTop: 30,
  },
  btn: {
    width: 200,
    height: 56,
    marginTop: 30,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: "25px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#FFFFFF",
    "&:hover": {
      background: "#ADD8E6",
    },
  },
  img: {
    position: "absolute",
    width: 620,
    borderRadius: 20,
  },
  blue: {
    position: "absolute",
    width: 125.4,
    height: 421.45,
    marginTop: -168,
    marginLeft: 137,
    background: "#7FC6DC",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
  },
  yellow: {
    position: "absolute",
    width: 122.16,
    height: 441.45,
    marginTop: 180,
    marginLeft: 350,
    background: "#FFC107",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
  },
}));

export default function FullStack() {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Grid item lg={5} md={12} className={classes.dflex}>
        <Box className={classes.full}>Full-Stack</Box>
        <Box className={classes.app}>App Development Company​</Box>
        <Box className={classes.techtiz}>
          At Techtiz, we build applications that click! With extraordinarily
          creative minds on board.
        </Box>
        <Button className={classes.btn}> Let’s Connect Today </Button>
      </Grid>
      <Grid item lg={4} md={12}>
        <Box className={classes.blue}></Box>
        <Box className={classes.yellow}></Box>
        <img src={laptopimg} alt="" className={classes.img} />
      </Grid>
    </Grid>
  );
}
