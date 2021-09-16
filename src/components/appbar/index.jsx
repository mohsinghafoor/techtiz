import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import a from "../../assets/a.svg";
import { Typography, Box, Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  logo: {
    position: "absolute",
    width: 240,
    left: 170,
    top: 38,
  },
  dflex: {
    display: "flex",
    justifyContent: "space-between",
    width: 550,
    position: "absolute",
    height: 35,
    left: 575,
    top: 59,
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
    position: "absolute",
    width: 189,
    height: 47,
    left: 1250,
    top: 50,
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
          <Typography className={classes.buttons}>Services</Typography>
        </a>
        <a href="#" className={classes.a}>
          <Typography className={classes.buttons}>Expertise</Typography>
        </a>
        <a href="#" className={classes.a}>
          <Typography className={classes.buttons}>About</Typography>
        </a>
        <a href="#" className={classes.a}>
          <Typography className={classes.buttons}>Portfolio</Typography>
        </a>
      </Box>
      <Button className={classes.btn}>Contact</Button>
    </Container>
  );
}
