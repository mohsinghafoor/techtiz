import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import apple from "../../assets/apple.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import android from "../../assets/android.png";
import flutter from "../../assets/flutter.png";

const useStyles = makeStyles((theme) => ({
  btn: {
    width: 170,
    height: 57,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    // line-height: 20px
    color: "#FFFFFF",
    paddingTop: 10,
    "&:hover": {
      background: "#D3D3D3",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 30,
      marginTop: "3rem",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "5rem",
    },
  },
}));

export default function Fields() {
  const classes = useStyles();

  return (
    <>
      <Button className={classes.btn}>Get Quote</Button>
    </>
  );
}
