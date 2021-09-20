import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import flutter from "../../assets/flutter.png";
import android from "../../assets/android.png";
import qrat from "../../assets/qrat.png";
import mobilefront from "../../assets/mobilefront.png";
import mobileback from "../../assets/mobileback.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    display: "flex",
    maxWidth: 492,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "64px",
    color: "#3B3E56",
  },
  subheading: {
    display: "flex",
    maxWidth: 542,
    height: 70,
    marginTop: 20,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",

    color: "#000000",
  },
  text: {
    display: "flex",
    maxWidth: 584,
    height: 174,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "143.4%",
    /* or 32px */

    color: "#000000",
  },
  androidimg: {
    width: 50.56,
    height: 60.82,
  },
  flutterimg: {
    width: 60.08,
    height: 60.82,
    left: 284,
  },
  androidtext: {
    width: 80.6,
    height: 13.19,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 18,
    lineHeight: "30px",

    color: "#000000",
  },
  fluttertext: {
    width: 66.68,
    height: 13.19,
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

    borderRadius: 28,
  },
  mobileback: {
    width: 222,
    height: 485,
    position: "absolute",
    borderRadius: 30,
    marginLeft: 170,
    marginTop: 20,
  },
  circle: {
    width: 178,
    height: 173,
    position: "absolute",
    borderRadius: "20rem",
    background: "#FFFFFF",
    boxShadow: "5px 4px 8px -2px rgba(0, 0, 0, 0.25)",
    marginLeft: "-6rem",
    marginTop: 20,
  },
  qrat: {
    width: 160,
    height: 161,
    position: "absolute",
    borderRadius: "10rem",
    marginLeft: -85,
    marginTop: 25,
  },
  yellowdot: {
    width: 26,
    height: 26,
    position: "absolute",
    borderRadius: "20rem",
    background: "#FFC560",
    marginTop: "40rem",
    marginLeft: -220,
  },
  graydot1: {
    width: 26,
    height: 26,
    position: "absolute",
    borderRadius: "20rem",
    background: "#C4C4C4",
    marginTop: "40rem",
    marginLeft: -170,
  },
  graydot2: {
    width: 26,
    height: 26,
    position: "absolute",
    borderRadius: "20rem",
    background: "#C4C4C4",
    marginTop: "40rem",
    marginLeft: -120,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item lg={6}>
        <Box className={classes.heading}>Recent Projects Include</Box>
        <Box className={classes.subheading}>Packing has never been easier.</Box>
        <Box className={classes.text}>
          Thank you again for the successful launch of the 3M and Converse
          applications. Your dedication, hard-work, flexibility, patience and
          professionalism is recognized and appreciated.
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 170,
          }}
        >
          <Box>
            <img src={android} alt="" className={classes.androidimg} />
            <Box className={classes.androidtext}>Android</Box>
          </Box>
          <Box>
            <img src={flutter} alt="" className={classes.flutterimg} />
            <Box className={classes.fluttertext}>Flutter</Box>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={4}>
        <img src={mobilefront} alt="" className={classes.mobilefront} />
        <img src={mobileback} alt="" className={classes.mobileback} />
        <Box className={classes.circle}></Box>
        <img src={qrat} alt="" className={classes.qrat} />
        <Box className={classes.yellowdot}></Box>
        <Box className={classes.graydot1}></Box>
        <Box className={classes.graydot2}></Box>
      </Grid>
    </Grid>
  );
}
