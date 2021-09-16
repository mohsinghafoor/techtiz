import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container, Box, Button } from "@material-ui/core";
import mobile from "../../assets/zoom.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import Fields from "./fields";
import MobileSide from "./mobilepic";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 100,
  },
  services: {
    position: "absolute",
    width: 474,
    height: 105,
    left: 403,
    top: 843,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    // line-height: 113.6%,
    /* or 51px */

    color: "#3B3E56",
  },
  line: {
    position: "absolute",
    width: 4,
    height: 200,
    left: 155,
    top: 990,

    background: "#FFC107",
    transform: "rotate(-90deg)",
  },
  heading: {
    position: "absolute",
    width: 646,
    height: 47,
    left: 150,
    top: 1145,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 28,
    // lineHeight: 47,
    textAlign: "center",

    color: "#000000",
  },
  subheading: {
    position: "absolute",
    width: 652,
    height: 125,
    left: 168,
    top: 1210,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    // line-height: 35,

    color: "#000000",
  },

  btn: {
    position: "absolute",
    width: 306,
    height: 67,
    left: 170,
    top: 1592,

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
    "&:hover": {
      background: "#D8BFD8",
    },
  },
}));

export default function TabValue() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.heading}>
        Join the future of mobility with our expertise
      </Typography>
      <Typography className={classes.subheading}>
        For close to a decade, Intelivita being a top mobile app development
        company has produced apps for various industries and partners, from the
        start-up Social Media app Chatagram, to the Art of Works Virtual Reality
        app for tech giant’s Microsoft, we have worked with them all.
      </Typography>
      <Fields />
      <Button className={classes.btn}>Calculate App development Cost</Button>
    </>
  );
}
