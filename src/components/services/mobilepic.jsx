import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import mobile from "../../assets/zoom.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  circle: {
    position: "absolute",
    width: 424.36,
    height: 420.36,
    left: 770.89,
    top: 200.25,
    borderRadius: "50rem",
    background: "#F0F0F0",
    transform: "rotate(5.76deg)",
  },
  smallyellow: {
    position: "absolute",
    width: 83.06,
    height: 83.06,
    left: 900.47,
    top: 150.91,
    borderRadius: "20rem",
    background: "#FFC560",
    transform: "rotate(17.12deg)",
  },
  smallblue: {
    position: "absolute",
    width: 83.06,
    height: 83.06,
    left: 1000.79,
    top: 550.13,
    borderRadius: "20rem",
    background: "#00D7D3",
    transform: "rotate(17.12deg)",
  },
  mobile: {
    position: "absolute",
    width: 360.92,
    height: 501.62,
    left: 800.13,
    top: 150.93,
    filter: "drop-shadow(9px 0px 14px rgba(0, 0, 0, 0.25))",
    //transform: "rotate(17.78deg)",
  },
  pic1: {
    position: "absolute",
    left: 850.13,
    top: 210.93,
    width: 207.17,
    height: 137.09,
    transform: "rotate(2.5deg)",
    borderRadius: 21,
  },
  pic2: {
    position: "absolute",
    left: 900.13,
    top: 340.93,
    width: 233.19,
    height: 121.06,
    transform: "rotate(3.12deg)",
    borderRadius: 12,
  },
  pic3: {
    position: "absolute",
    left: 800.13,
    top: 400.93,
    width: 208.19,
    height: 109.06,

    transform: "rotate(2.12deg)",
    borderRadius: 12,
  },
}));

export default function MobileSide() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.circle}></Box>
      <Box className={classes.smallyellow}></Box>
      <Box className={classes.smallblue}></Box>
      <img src={mobile} alt="" className={classes.mobile} />
      <img src={pic1} className={classes.pic1} alt="" />
      <img src={pic2} className={classes.pic2} alt="" />
      <img src={pic3} className={classes.pic3} alt="" />
    </Container>
  );
}
