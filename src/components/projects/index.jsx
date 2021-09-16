import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import flutter from "../../assets/flutter.png";
import android from "../../assets/android.png";
import qrat from "../../assets/qrat.png";
import mobilefront from "../../assets/mobilefront.png";
import mobileback from "../../assets/mobileback.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    position: "absolute",
    width: 492,
    height: 150,
    left: 170,
    top: 2472,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "64px",

    color: "#3B3E56",
  },
  subheading: {
    position: "absolute",
    width: 542,
    height: 110,
    left: 170,
    top: 2645,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",

    color: "#000000",
  },
  text: {
    position: "absolute",
    width: 584,
    height: 174,
    left: 170,
    top: 2717,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "143.4%",
    /* or 32px */

    color: "#000000",
  },
  androidimg: {
    position: "absolute",
    width: 50.56,
    height: 60.82,
    left: 170,
    top: 2875,
  },
  flutterimg: {
    position: "absolute",
    width: 60.08,
    height: 60.82,
    left: 284,
    top: 2877,
  },
  androidtext: {
    position: "absolute",
    width: 80.6,
    height: 13.19,
    left: 170,
    top: 2950.8,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 18,
    lineHeight: "30px",

    color: "#000000",
  },
  fluttertext: {
    position: "absolute",
    width: 66.68,
    height: 13.19,
    left: 287.72,
    top: 2953.94,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 18,
    lineHeight: "30px",

    color: "#000000",
  },
  mobilefront: {
    position: "absolute",
    width: 242,
    height: 524,
    left: 969,
    top: 2459,
    borderRadius: 28,
  },
  mobileback: {
    position: "absolute",
    width: 222,
    height: 485,
    left: 1116,
    top: 2494,
    borderRadius: 30,
  },
  circle: {
    position: "absolute",
    width: 178,
    height: 173,
    left: 851,
    top: 2478,
    borderRadius: "20rem",
    background: "#FFFFFF",
    boxShadow: "5px 4px 8px -2px rgba(0, 0, 0, 0.25)",
  },
  qrat: {
    position: "absolute",
    width: 160,
    height: 161,
    left: 860,
    top: 2484,
    borderRadius: "15rem",
  },
  yellowdot: {
    position: "absolute",
    width: 26,
    height: 26,
    left: 688,
    top: 3042,
    borderRadius: "20rem",
    background: "#FFC560",
  },
  graydot1: {
    position: "absolute",
    width: 26,
    height: 26,
    left: 740,
    top: 3042,
    borderRadius: "20rem",
    background: "#C4C4C4",
  },
  graydot2: {
    position: "absolute",
    width: 26,
    height: 26,
    left: 790,
    top: 3042,
    borderRadius: "20rem",
    background: "#C4C4C4",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.heading}>
        Recent Projects Include
      </Typography>
      <Typography className={classes.subheading}>
        Packing has never been easier.
      </Typography>
      <Typography className={classes.text}>
        Thank you again for the successful launch of the 3M and Converse
        applications. Your dedication, hard-work, flexibility, patience and
        professionalism is recognized and appreciated.
      </Typography>
      <img src={android} alt="" className={classes.androidimg} />
      <img src={flutter} alt="" className={classes.flutterimg} />
      <Typography className={classes.androidtext}>Android</Typography>
      <Typography className={classes.fluttertext}>Flutter</Typography>
      <img src={mobilefront} alt="" className={classes.mobilefront} />
      <img src={mobileback} alt="" className={classes.mobileback} />
      <Box className={classes.circle}></Box>
      <img src={qrat} alt="" className={classes.qrat} />
      <Box className={classes.yellowdot}></Box>
      <Box className={classes.graydot1}></Box>
      <Box className={classes.graydot2}></Box>
    </Container>
  );
}
