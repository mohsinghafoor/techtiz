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
    width: 620,
    left: 829,
    top: 200,
    borderRadius: 50,
  },
  blue: {
    position: "absolute",
    width: 125.4,
    height: 421.45,
    left: 963.76,
    top: 42.26,

    background: "#7FC6DC",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
  },
  yellow: {
    position: "absolute",
    width: 122.16,
    height: 441.45,
    top: 358.12,
    left: 1178.28,

    background: "#FFC107",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
  },
  wave: {
    marginLeft: -170,
    marginTop: 400,
    width: "98.6rem",
  },
}));

export default function FullStack() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box
        style={{
          height: "30rem",
          width: "99rem",
          background: "#f9f9f9",
          marginLeft: -177,
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={classes.wave}
        >
          <path
            fill="#f9f9f9"
            fill-opacity="1"
            d="M0,0L48,48C96,96,192,192,288,245.3C384,299,480,309,576,272C672,235,768,149,864,144C960,139,1056,213,1152,208C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </Box>
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
