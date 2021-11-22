import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import flutter from "../../assets/flutter.png";
import android from "../../assets/android.png";
import react from "../../assets/react.png";
import ios from "../../assets/apple.png";
import qart2 from "../../assets/qart2.png";
import qart1 from "../../assets/qart1.png";
import dashimg from "../../assets/dashboard3.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ProjectsMobile from "./accordian";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: -10,
    padding: 30,
  },
  contentStyle: {
    height: "660px",
    background: "grey",
  },
  root: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    display: "flex",
    maxWidth: 492,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 55,
    lineHeight: "64px",
    color: "#3B3E56",
    [theme.breakpoints.only("md")]: {
      fontSize: 45,
      lineHeight: "52px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
      lineHeight: "40px",
      height: 80,
    },
  },
  subheading: {
    display: "flex",
    maxWidth: 542,
    height: 70,
    marginTop: 20,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      height: 50,
      lineHeight: "40px",
    },
  },
  text: {
    display: "flex",
    maxWidth: 684,
    height: 214,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "143.4%",
    /* or 32px */
    color: "#000000",
    [theme.breakpoints.up("lg")]: {
      lineHeight: "135.4%",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      maxWidth: 600,
      marginBottom: 30,
      height: 160,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      height: 190,
    },
  },
  reactimg: {
    width: 50.56,
    height: 60.82,
  },
  flutterimg: {
    width: 60.08,
    height: 60.82,
    left: 284,
  },
  androidtext: {
    width: 80.6,
    height: 13.19,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 18,
    lineHeight: "24px",

    color: "#000000",
  },
  fluttertext: {
    width: 66.68,
    height: 13.19,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 18,
    lineHeight: "30px",

    color: "#000000",
  },
  mobilefront: {
    width: 442,
    height: 524,
    borderRadius: 28,
    [theme.breakpoints.only("md")]: {
      width: 394,
      height: 490,
    },
    [theme.breakpoints.down("sm")]: {
      width: 324,
      height: 420,
      marginLeft: -30,
    },
  },
}));
export const Projects = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.main} id="portfolio">
      {isMobile ? (
        <ProjectsMobile />
      ) : (
        <Container>
          <Carousel effect="fade" autoPlay="flase">
            <Grid container className={classes.root}>
              {/* First Component */}
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>qartt</Box>
                <Box className={classes.text}>
                  qartt provides an intuitive and seamless delivery service,
                  allowing you to focus on your core product and services.
                  Without the complication of coordinating an entire in-house
                  delivery team, your resources are free to be utilized where
                  they are needed the most.
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 170,
                  }}
                >
                  <Box>
                    <img src={flutter} alt="" className={classes.flutterimg} />
                    <Box className={classes.fluttertext}>Flutter</Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={qart1} alt="" className={classes.mobilefront} />
              </Grid>
            </Grid>

            {/* Second Component */}
            <Grid container className={classes.root}>
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>qartt partner</Box>
                <Box className={classes.text}>
                  By joining qartt, you can pick up a great side-hustle with
                  flexible hours and great pay. You will see your earnings in
                  real-time, and see precisely how they are calculated. Your
                  money is deposited weekly with zero delays.
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 170,
                  }}
                >
                  <Box>
                    <img src={flutter} alt="" className={classes.flutterimg} />
                    <Box className={classes.fluttertext}>Flutter</Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={qart2} alt="" className={classes.mobilefront} />
              </Grid>
            </Grid>

            {/* Third Component */}
            <Grid container className={classes.root}>
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>dashboard.earth</Box>
                <Box className={classes.text}>
                  Dashboard.Earth provides you with the actions needed to thrive
                  in the face of climate change and the steps required to
                  achieve them. The platform offers meaningful actions you can
                  take to turn your city’s most audacious environmental goals
                  into reality. One act is all it takes to start to turn the
                  tides of climate change.
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 170,
                  }}
                >
                  <Box>
                    <img src={react} alt="" className={classes.flutterimg} />
                    <Box className={classes.androidtext}>React Native</Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={dashimg} alt="" className={classes.mobilefront} />
              </Grid>
            </Grid>
          </Carousel>
        </Container>
      )}
    </div>
  );
};
