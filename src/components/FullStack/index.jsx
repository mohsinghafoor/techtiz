import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import laptopimg from "../../assets/img1.png";
import { Container, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  full: {
    position: "absolute",
    width: 360,
    height: 65,
    left: 170,
    top: 194,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "61px",
    // /* or 61px */

    color: "#3B3E56",
  },
  app: {
    position: "absolute",
    width: 631,
    height: 89,
    left: 170,
    top: 269,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "50px",
    /* or 50px */

    color: "#3B3E56",
  },
  techtiz: {
    position: "absolute",
    width: 588,
    height: 144,
    left: 170,
    top: 397,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",

    color: "#1E3849",
  },
  btn: {
    position: "absolute",
    width: 200,
    height: 56,
    left: 170,
    top: 568,

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
  box: {
    position: "absolute",
    width: 624,
    height: 417,
    left: 649,
    top: 147,
  },
  img: {
    position: "absolute",
    width: 624,
    left: 819,
    top: 250,
    borderRadius: 50,
  },
  blue: {
    position: "absolute",
    width: 125.4,
    height: 421.45,
    left: 963.76,
    top: 80.26,

    background: "#7FC6DC",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
  },
  yellow: {
    position: "absolute",
    width: 122.16,
    height: 441.45,
    left: 1163.28,
    top: 367.12,

    background: "#FFC107",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
  },
}));

export default function FullStack() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.full}>Full-Stack</Typography>
      <Typography className={classes.app}>App Development Company​</Typography>
      <Typography className={classes.techtiz}>
        At Techtiz, we build applications that click! With extraordinarily
        creative minds on board.
      </Typography>
      <Button className={classes.btn}> Let’s Connect Today </Button>
      {/* <Box className={classes.box}> */}
      <Box className={classes.blue}></Box>
      <Box className={classes.yellow}></Box>
      <img src={laptopimg} alt="" className={classes.img} />

      {/* </Box> */}
    </Container>
  );
}
