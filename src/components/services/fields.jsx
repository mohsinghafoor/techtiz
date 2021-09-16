import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import apple from "../../assets/apple.png";
import angular from "../../assets/angular.png";
import android from "../../assets/android.png";
import flutter from "../../assets/flutter.png";
import react from "../../assets/react.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  apple: {
    position: "absolute",
    width: 49.09,
    height: 60.82,
    left: 186,
    top: 1417,
  },
  react: {
    position: "absolute",
    width: 61.55,
    height: 60.82,
    left: 278,
    top: 1423,
  },
  angular: {
    position: "absolute",
    width: 60.08,
    height: 72.54,
    left: 373,
    top: 1417,
  },
  android: {
    position: "absolute",
    width: 50.56,
    height: 60.82,
    left: 484,
    top: 1417,
  },
  flutter: {
    position: "absolute",
    width: 60.08,
    height: 60.82,
    left: 585,
    top: 1417,
  },
  applet: {
    position: "absolute",
    width: 74,
    height: 11,
    left: 182,
    top: 1501,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",

    color: "#000000",
  },
  reactt: {
    position: "absolute",
    width: 110,
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
  },
  angulart: {
    position: "absolute",
    width: 79,
    height: 11,
    left: 373,
    top: 1501,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",

    color: " #000000",
  },
  androidt: {
    position: "absolute",
    width: 81,
    height: 11,
    left: 476,
    top: 1501,

    fontFamily: " Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",

    color: "#000000",
  },
  fluttert: {
    position: "absolute",
    width: 67,
    height: 11,
    left: 578,
    top: 1501,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "22px",

    color: "#000000",
  },
}));

export default function Fields() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={apple} alt="" className={classes.apple} />
      <img src={react} alt="" className={classes.react} />
      <img src={angular} alt="" className={classes.angular} />
      <img src={android} alt="" className={classes.android} />
      <img src={flutter} alt="" className={classes.flutter} />
      <Typography className={classes.applet}>Apple</Typography>
      <Typography className={classes.reactt}>React Native</Typography>
      <Typography className={classes.angulart}>Angular</Typography>
      <Typography className={classes.androidt}>Android</Typography>
      <Typography className={classes.fluttert}>Flutter</Typography>
    </Container>
  );
}
