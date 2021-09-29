import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
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
    [theme.breakpoints.up("lg")]: {
      marginTop: "-8rem",
      marginLeft: 30,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-5rem",
    },
  },
  apple: {
    width: 49.09,
    height: 60.82,
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
      fontSize: 16,
      width: 65,
    },
  },

  btn: {
    width: 306,
    height: 67,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 13,
    // line-height: 20px,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 30,
    "&:hover": {
      background: "#D3D3D3",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 30,
      marginTop: "7rem",
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
      <Box className={classes.root}>
        <Box style={{ height: 50 }}>
          <img src={apple} alt="" className={classes.apple} />
          <Box className={classes.applet}>Apple</Box>
        </Box>
        <Box style={{ height: 50 }}>
          <img src={react} alt="" className={classes.apple} />
          <Box className={classes.applet}>React Native</Box>
        </Box>
        <Box style={{ height: 50 }}>
          <img src={angular} alt="" className={classes.apple} />
          <Box className={classes.applet}>Angular</Box>
        </Box>
        <Box style={{ height: 50 }}>
          <img src={android} alt="" className={classes.apple} />
          <Box className={classes.applet}>Android</Box>
        </Box>
        <Box style={{ height: 50 }}>
          <img src={flutter} alt="" className={classes.apple} />
          <Box className={classes.applet}>Flutter</Box>
        </Box>
      </Box>
      <Button className={classes.btn}>Calculate App development Cost</Button>
    </>
  );
}
