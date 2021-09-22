import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import img from "../../assets/2.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  circle: {
    position: "absolute",
    width: 424.36,
    height: 420.36,
    left: 850.89,
    marginTop: 50.93,
    borderRadius: "50rem",
    background: "#F0F0F0",
    transform: "rotate(5.76deg)",
  },
  smallyellow: {
    position: "absolute",
    width: 83.06,
    height: 83.06,
    left: 970.47,
    // top: 200.91,
    borderRadius: "20rem",
    background: "#FFC560",
    transform: "rotate(17.12deg)",
  },
  smallblue: {
    position: "absolute",
    width: 83.06,
    height: 83.06,
    left: 1070.79,
    marginTop: 400.93,
    borderRadius: "20rem",
    background: "#00D7D3",
    transform: "rotate(17.12deg)",
  },
  mobile: {
    position: "absolute",
    width: 503.92,
    height: 501.62,
    marginLeft: 100.13,
    [theme.breakpoints.only("md")]: {
      marginLeft: 400,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: 650,
    },

    // top: 200.93,
    //transform: "rotate(17.78deg)",
  },
}));

export default function PictureSide() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <img src={img} alt="" className={classes.mobile} />
    </Container>
  );
}
