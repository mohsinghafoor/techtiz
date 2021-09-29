import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import flutter from "../../assets/flutter.png";
import android from "../../assets/android.png";
import qrat from "../../assets/qrat.png";
import mobilefront from "../../assets/mobilefront.png";
import mobileback from "../../assets/mobileback.png";
import qrat2 from "../../assets/qrat2.png";
import mobilefront2 from "../../assets/mobilefront2.png";
import mobileback2 from "../../assets/mobileback2.png";
import qrat3 from "../../assets/qrat3.png";
import mobilefront3 from "../../assets/mobilefront3.png";
import mobileback3 from "../../assets/mobileback3.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import AccordionProjects from "./accordian";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 100,
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
    border: "4px solid black",
    [theme.breakpoints.only("md")]: {
      width: 234,
      height: 490,
    },
  },
  mobileback: {
    width: 222,
    height: 485,
    position: "absolute",
    borderRadius: 30,
    marginLeft: 340,
    marginTop: 20,
    border: "4px solid black",
    [theme.breakpoints.only("md")]: {
      width: 220,
      height: 450,
      marginLeft: 170,
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
  },
}));
export const Projects = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.main}>
      {isMobile ? (
        <AccordionProjects />
      ) : (
        <Container>
          <Carousel effect="fade">
            <Grid container className={classes.root}>
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>
                  Packing has never been easier.
                </Box>
                <Box className={classes.text}>
                  Thank you again for the successful launch of the 3M and
                  Converse applications. Your dedication, hard-work,
                  flexibility, patience and professionalism is recognized and
                  appreciated.
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

            <Grid container className={classes.root}>
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>
                  Packing has never been easier.
                </Box>
                <Box className={classes.text}>
                  Thank you again for the successful launch of the 3M and
                  Converse applications. Your dedication, hard-work,
                  flexibility, patience and professionalism is recognized and
                  appreciated.
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
                  src={mobilefront2}
                  alt=""
                  className={classes.mobilefront}
                />
                <img src={mobileback2} alt="" className={classes.mobileback} />
                <Box className={classes.circle}></Box>
                <img src={qrat2} alt="" className={classes.qrat} />
              </Grid>
            </Grid>

            <Grid container className={classes.root}>
              <Grid item xs={6}>
                <Box className={classes.heading}>Recent Projects Include</Box>
                <Box className={classes.subheading}>
                  Packing has never been easier.
                </Box>
                <Box className={classes.text}>
                  Thank you again for the successful launch of the 3M and
                  Converse applications. Your dedication, hard-work,
                  flexibility, patience and professionalism is recognized and
                  appreciated.
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
