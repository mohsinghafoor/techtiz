import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import apple from "../../assets/apple.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import android from "../../assets/android.png";
import flutter from "../../assets/flutter.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    maxWidth: 500,
    marginTop: 70,
    [theme.breakpoints.down("md")]: {
      maxWidth: 400,
    },
  },
  apple: {
    width: 49.09,
    height: 60.82,
    [theme.breakpoints.down("md")]: {
      maxWidth: 40,
      height: 40.82,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 30,
    },
  },
  react: {
    width: 61.55,
    height: 60.82,
    [theme.breakpoints.down("md")]: {
      maxWidth: 40,
      height: 40.82,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 30,
    },
  },
  angular: {
    width: 60.08,
    height: 72.54,
    [theme.breakpoints.down("md")]: {
      maxWidth: 40,
      height: 40.82,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 30,
    },
  },
  android: {
    width: 50.56,
    height: 60.82,
    [theme.breakpoints.down("md")]: {
      maxWidth: 40,
      height: 40.82,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 30,
    },
  },
  flutter: {
    width: 60.08,
    height: 60.82,
    [theme.breakpoints.down("md")]: {
      maxWidth: 40,
      height: 40.82,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 30,
    },
  },
  applet: {
    width: 74,
    height: 51,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: 65,
    },
  },
  reactt: {
    width: 72,
    height: 51,
    left: 270,
    top: 1501,
    display: "flex",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",

    color: " #000000",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: 65,
    },
  },
  angulart: {
    width: 79,
    height: 51,
    left: 373,
    top: 1501,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",

    color: " #000000",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: 65,
    },
  },
  androidt: {
    width: 81,
    height: 51,

    fontFamily: " Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",
    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: 65,
    },
  },
  fluttert: {
    width: 67,
    height: 51,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",

    color: "#000000",
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
      width: 65,
    },
  },
}));

export default function Fields() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <img src={apple} alt="" className={classes.apple} />
        <Box className={classes.applet}>Apple</Box>
      </Box>
      <Box>
        <img src={react} alt="" className={classes.react} />
        <Box className={classes.reactt}>React Native</Box>
      </Box>
      <Box>
        <img src={angular} alt="" className={classes.angular} />
        <Box className={classes.angulart}>Angular</Box>
      </Box>
      <Box>
        <img src={android} alt="" className={classes.android} />
        <Box className={classes.androidt}>Android</Box>
      </Box>
      <Box>
        <img src={flutter} alt="" className={classes.flutter} />
        <Box className={classes.fluttert}>Flutter</Box>
      </Box>
    </Box>
  );
}
