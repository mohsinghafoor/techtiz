import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container, Box, Button } from "@material-ui/core";
import Fields from "./fields";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 100,
  },
  services: {
    width: 474,
    height: 105,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    // line-height: 113.6%,
    /* or 51px */

    color: "#3B3E56",
  },
  heading: {
    display: "flex",
    maxWidth: 646,
    height: 47,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 28,
    // lineHeight: 47,
    textAlign: "center",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 20,
      width: 500,
    },
  },
  subheading: {
    display: "flex",
    maxWidth: 652,
    height: 125,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    // line-height: 35,

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      width: 400,
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
      background: "#D8BFD8",
    },
  },
}));

export default function TabValue() {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.heading}>
        Join the future of mobility with our expertise
      </Box>
      <Box className={classes.subheading}>
        For close to a decade, Intelivita being a top mobile app development
        company has produced apps for various industries and partners, from the
        start-up Social Media app Chatagram, to the Art of Works Virtual Reality
        app for tech giant’s Microsoft, we have worked with them all.
      </Box>
      <Fields />
      <Button className={classes.btn}>Calculate App development Cost</Button>
    </Container>
  );
}
