import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import a from "../../assets/a.svg";
import { Box, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 240,
  },
  dflex: {
    display: "flex",
    justifyContent: "space-between",
    width: 550,
    height: 35,
  },
  a: {
    textDecoration: "none",
  },
  buttons: {
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    color: "#000000",
  },
  btn: {
    width: 189,
    height: 47,
    background: "#FFC107",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    color: "#FFFFFF",
    paddingTop: 10,
    "&:hover": {
      background: "#ADD8E6",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <a href="#">
        <img src={a} alt="" className={classes.logo} />
      </a>
      <Box className={classes.dflex}>
        <a href="#" className={classes.a}>
          <Box className={classes.buttons}>Services</Box>
        </a>
        <a href="#" className={classes.a}>
          <Box className={classes.buttons}>Expertise</Box>
        </a>
        <a href="#" className={classes.a}>
          <Box className={classes.buttons}>About</Box>
        </a>
        <a href="#" className={classes.a}>
          <Box className={classes.buttons}>Portfolio</Box>
        </a>
      </Box>
      <Button className={classes.btn}>Contact</Button>
    </Container>
  );
}
