import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import laptopimg from "../../assets/img1.png";
import { Container, Box, Grid } from "@material-ui/core";
import MobileStack from "./mobile";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightgrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  leftgrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      marginLeft: 0,
    },
  },
  full: {
    display: "flex",
    height: 140,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 44,
    lineHeight: "55px",
    // /* or 61px */
    width: 600,
    color: "#3B3E56",
    [theme.breakpoints.only("md")]: {
      width: 450,
      fontSize: 30,
      lineHeight: "41px",
      height: 65,
    },
  },

  techtiz: {
    display: "flex",
    width: 600,
    height: 144,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 28,
    lineHeight: "35px",
    color: "#1E3849",
    marginTop: 30,
    [theme.breakpoints.only("md")]: {
      maxWidth: 450,
      fontSize: 22,
      height: 120,
      lineHeight: "30px",
    },
  },
  btnbox: {
    display: "flex",
    alignItems: "flex-start",
    width: 600,
    [theme.breakpoints.only("md")]: {
      width: 450,
    },
  },
  btn: {
    width: 240,
    height: 50,
    marginTop: 30,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "25px",
    "&:hover": {
      background: "#D3D3D3",
    },
    color: "#FFFFFF",

    [theme.breakpoints.only("md")]: {
      width: 196,
      height: 42,
      fontSize: 12,
    },
  },

  img: {
    position: "absolute",
    width: 560,
    borderRadius: 20,
    [theme.breakpoints.only("md")]: {
      width: 450,
      marginLeft: -20,
    },
  },
  blue: {
    position: "absolute",
    width: 125.4,
    height: 421.45,
    marginTop: -316,
    marginLeft: -160,
    background: "#7FC6DC",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
    [theme.breakpoints.only("md")]: {
      width: 90.4,
      height: 421.45,
      marginTop: -222,
      marginLeft: -97,
    },
  },
  yellow: {
    position: "absolute",
    width: 122.16,
    height: 441.45,
    marginTop: 300,
    marginLeft: 130,
    background: "#FFC107",
    borderRadius: 275,
    transform: "matrix(-0.27, 0.97, -0.95, -0.29, 0, 0)",
    [theme.breakpoints.only("md")]: {
      width: 97.16,
      height: 441.45,
      marginTop: 215,
      marginLeft: 0,
    },
  },
}));

export default function FullStack() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      {isMobile ? (
        <MobileStack />
      ) : (
        <Grid container className={classes.main}>
          <Grid item xs={12} md={6} className={classes.leftgrid}>
            <Box className={classes.full}>
              A Full-Stack Web and Mobile App Development Company​
            </Box>
            {/* <Box className={classes.app}>Web/App Development Company​</Box> */}
            <Box className={classes.techtiz}>
              With a team full of extraordinarily creative minds, we bring a new
              digital life to your business. Techtiz, building applications that
              connect!
            </Box>
            <Box className={classes.btnbox}>
              <Link to="contact">
                <Button className={classes.btn}>
                  {" "}
                  Connect with Us Today!{" "}
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            className={classes.rightgrid}

            // style={{ alignItems: "center" }}
          >
            <Box className={classes.blue}></Box>
            <Box className={classes.yellow}></Box>
            <img src={laptopimg} alt="" className={classes.img} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
