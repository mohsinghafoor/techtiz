import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import a from "../../assets/a.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Box, Container, Button, Grid } from "@material-ui/core";
import { AppBarDrawer } from "./drawer";
import logo from "../../assets/a.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    [theme.breakpoints.up("lg")]: {
      marginTop: 10,
    },
  },
  buttonbox: {
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
    [theme.breakpoints.down("md")]: {
      width: 155,
      height: 37,
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      width: 130,
      height: 32,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      width: 100,
      height: 30,
    },
  },

  img: {
    width: 240,
    [theme.breakpoints.down("md")]: {
      width: 203,
      height: 63,
    },
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: 140,
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      {isTab ? (
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid
            item
            xs={2}
            sm={1}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <AppBarDrawer />
          </Grid>
          <Grid item xs={6} sm={8} md={8}>
            <img src={logo} alt="" className={classes.img} />
          </Grid>
          <Grid
            item
            xs={4}
            sm={3}
            md={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button className={classes.btn}>Contact</Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.root}>
          <Grid
            item
            md={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a href="#">
              <img src={a} alt="" className={classes.img} />
            </a>
          </Grid>
          <Grid item md={6}>
            <Box className={classes.buttonbox}>
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
          </Grid>
          <Grid item md={1}>
            <Button className={classes.btn}>Contact</Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
