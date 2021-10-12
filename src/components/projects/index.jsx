import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import flutter from "../../assets/flutter.png";
import android from "../../assets/android.png";
import qrat from "../../assets/qrat.png";
import qrat2 from "../../assets/qrat2.png";
import mobilefront from "../../assets/mobilefront.png";
import mobileback from "../../assets/mobileback.png";
import qratpartnerfront from "../../assets/qartfront2.png";
import mobilefront2 from "../../assets/image3.png";
import qratpartnerback from "../../assets/qartback2.png";
import qrat3 from "../../assets/qrat3.png";
import mobilefront3 from "../../assets/mobilefront3.png";
import mobileback3 from "../../assets/mobileback3.png";
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
    maxWidth: 584,
    height: 174,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "143.4%",
    /* or 32px */
    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      maxWidth: 578,
      height: 160,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      height: 190,
    },
  },
  androidimg: {
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
    lineHeight: "30px",

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
    width: 242,
    height: 524,
    borderRadius: 28,
    border: "2px solid black",
    [theme.breakpoints.only("md")]: {
      width: 234,
      height: 490,
    },
    [theme.breakpoints.down("sm")]: {
      width: 214,
      height: 430,
    },
  },
  lonzifying: {
    width: 302,
    height: 544,
    borderRadius: 28,

    [theme.breakpoints.only("md")]: {
      width: 394,
      height: 490,
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: 314,
      height: 430,
      marginTop: 0,
    },
  },
  mobileback: {
    width: 222,
    height: 485,
    position: "absolute",
    borderRadius: 30,
    marginLeft: 320,
    marginTop: 20,
    border: "2px solid black",
    [theme.breakpoints.only("md")]: {
      width: 220,
      height: 450,
      marginLeft: 170,
    },
    [theme.breakpoints.down("sm")]: {
      width: 190,
      height: 390,
      marginLeft: "5rem",
    },
  },
  circle: {
    width: 178,
    height: 173,
    position: "absolute",
    borderRadius: "20rem",
    background: "#FFFFFF",
    boxShadow: "5px 4px 8px -2px rgba(0, 0, 0, 0.25)",
    marginLeft: "-16rem",
    marginTop: 20,
    [theme.breakpoints.only("md")]: {
      width: 163,
      height: 160,
      marginLeft: "-15rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: 123,
      height: 120,
      marginLeft: "-13rem",
    },
  },
  qrat: {
    width: 160,
    height: 161,
    position: "absolute",
    borderRadius: "10rem",
    marginLeft: "-16rem",
    marginTop: 25,
    [theme.breakpoints.only("md")]: {
      width: 153,
      height: 153,
      marginLeft: "-15rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: 110,
      height: 110,
      marginLeft: "-13rem",
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
          <Carousel effect="fade">
            <Grid container className={classes.root}>
              {/* First Component */}
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>qartt</Box>
                <Box className={classes.text}>
                  qartt will allow you to focus on your product, making life
                  easier and saving you the hassle and expense of managing your
                  own delivery team
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 170,
                  }}
                >
                  <Box>
                    <img src={android} alt="" className={classes.androidimg} />
                    <Box className={classes.androidtext}>Android</Box>
                  </Box>
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
                <img src={mobilefront} alt="" className={classes.mobilefront} />
                <img src={mobileback} alt="" className={classes.mobileback} />
                <Box className={classes.circle}></Box>
                <img src={qrat} alt="" className={classes.qrat} />
              </Grid>
            </Grid>

            {/* Second Component */}
            <Grid container className={classes.root}>
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>qartt partner</Box>
                <Box className={classes.text}>
                  By joining us you will make great money on your own schedule.
                  And you will be able to see how much you earned after each
                  delivery and exactly how your earnings were calculated.Your
                  money is deposited on a weekly basis with no delays.
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 170,
                  }}
                >
                  <Box>
                    <img src={android} alt="" className={classes.androidimg} />
                    <Box className={classes.androidtext}>Android</Box>
                  </Box>
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
                <img
                  src={qratpartnerfront}
                  alt=""
                  className={classes.mobilefront}
                />
                <img
                  src={qratpartnerback}
                  alt=""
                  className={classes.mobileback}
                />
                <Box className={classes.circle}></Box>
                <img src={qrat2} alt="" className={classes.qrat} />
              </Grid>
            </Grid>

            {/* Third Component */}
            <Grid container className={classes.root}>
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>dashboard.earth</Box>
                <Box className={classes.text}>
                  Dashboard.Earth connects you to the actions necessary to
                  thrive in the face of climate change. We deliver meaningful
                  actions you can take towards making your city’s most audacious
                  environmental goals a reality.
                </Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: 170,
                  }}
                >
                  <Box>
                    <img src={android} alt="" className={classes.androidimg} />
                    <Box className={classes.androidtext}>Android</Box>
                  </Box>
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
                <img
                  src={mobilefront3}
                  alt=""
                  className={classes.mobilefront}
                />
                <img src={mobileback3} alt="" className={classes.mobileback} />
                {/* <Box className={classes.circle}></Box> */}
                <img src={qrat3} alt="" className={classes.qrat} />
              </Grid>
            </Grid>
          </Carousel>
        </Container>
      )}
    </div>
  );
};
