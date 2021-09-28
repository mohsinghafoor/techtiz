import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Button } from "@material-ui/core";
import Fields from "./fields";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("lg")]: {
      marginTop: "20rem",
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
  },
}));

export default function TabValue() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {/* <Box className={classes.heading}>
        Join the future of mobility with our expertise
      </Box>
      <Box className={classes.subheading}>
        For close to a decade, Intelivita being a top mobile app development
        company has produced apps for various industries and partners, from the
        start-up Social Media app Chatagram, to the Art of Works Virtual Reality
        app for tech giant’s Microsoft, we have worked with them all.
      </Box> */}
      <Fields />
      <Button className={classes.btn}>Calculate App development Cost</Button>
    </Container>
  );
}
