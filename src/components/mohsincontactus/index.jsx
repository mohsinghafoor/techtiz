import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Grid } from "@material-ui/core";
import ContactForm from "./form";
import MySales from "./sales";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: { marginTop: "30rem" },
    [theme.breakpoints.only("md")]: { marginTop: "45rem" },
  },
  blue: {
    position: "absolute",
    width: 619.84,
    height: 166.37,
    background: "rgba(127, 198, 220, 0.5)",
    borderRadius: 155,
    transform: "rotate(-21.83deg)",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "-45rem",
      marginTop: "-35rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "-35rem",
      marginTop: "-70rem",
      width: 384.94,
      height: 106.71,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-20rem",
      marginTop: "-48rem",
      width: 231.94,
      height: 62.71,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-12rem",
      marginTop: "-48rem",
      width: 200.94,
      height: 50.71,
    },
  },
  yellow: {
    position: "absolute",
    width: 623.59,
    height: 172.86,
    background: "rgba(249, 196, 103, 0.5)",
    borderRadius: 155,
    transform: "rotate(-21.83deg)",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "34rem",
      marginTop: "39rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "34rem",
      marginTop: "42rem",
      width: 384.94,
      height: 106.71,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20rem",
      marginTop: "8rem",
      width: 231.94,
      height: 62.71,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "12rem",
      marginTop: "10rem",
      width: 200.94,
      height: 50.71,
    },
  },
  sale: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      marginLeft: 650,
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      marginTop: "31rem",
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      marginTop: "34.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      marginTop: "34.5rem",
    },
  },
  form: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      marginLeft: -350,
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      marginTop: "-30.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      marginTop: "-20.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
    },
  },
}));

export default function MyContactUs() {
  const classes = useStyles();

  return (
    <Container className={classes.main}>
      <Box className={classes.blue} />
      <Box className={classes.yellow} />
      <Box className={classes.sale}>
        <MySales />
      </Box>
      <Box className={classes.form}>
        <ContactForm />
      </Box>
    </Container>
  );
}
