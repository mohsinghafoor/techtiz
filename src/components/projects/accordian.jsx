import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Accordion, Box, Button } from "@material-ui/core";
import android from "../../assets/android.png";
import react from "../../assets/react.png";
import flutter from "../../assets/flutter.png";
import qart2 from "../../assets/qart2.png";
import qart1 from "../../assets/qart1.png";
import dashimg from "../../assets/dashboard3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  mainheading: {
    height: 50,
    maxWidth: 320,
    display: "flex",
    justifyContent: "center",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 28,
    lineHeight: "113.6%",
    /* or 34px */

    color: "#3B3E56",
  },
  subheading: {
    display: "flex",
    maxWidth: 320,
    height: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 20,
    lineHeight: "30px",
    color: "#000000",
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 330,
    height: 142,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 15,
    lineHeight: "20px",
    /* or  */
    color: "#000000",
  },
  lzsubheading: {
    display: "flex",
    maxWidth: 320,
    height: 40,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 19,
    lineHeight: "30px",
    color: "#000000",
  },
  lztext: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 330,
    height: 142,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 15,
    lineHeight: "20px",
    /* or  */
    color: "#000000",
  },
  circle: {
    width: 300.41,
    height: 300.41,
    background: "#F0F0F0",
    transform: "rotate(5.76deg)",
    borderRadius: "10rem",
  },
  smallcircle: {
    width: 90,
    height: 90,
    position: "absolute",
    borderRadius: "20rem",
    background: "#FFFFFF",
    boxShadow: "5px 4px 8px -2px rgba(0, 0, 0, 0.25)",
    marginLeft: "-10rem",
    marginTop: "12rem",
  },
  logo: {
    width: 80,
    height: 80,
    position: "absolute",
    borderRadius: "20rem",
    background: "#FFFFFF",
    boxShadow: "5px 4px 8px -2px rgba(0, 0, 0, 0.25)",
    marginLeft: "-10rem",
    marginTop: "12.3rem",
  },
  lzcircle: {
    width: 200.41,
    height: 300.41,
    background: "#F0F0F0",
    transform: "rotate(5.76deg)",
    borderRadius: "10rem",
  },
  loanzify: {
    position: "absolute",
    width: 270,
    height: 320,
    borderRadius: 28,
    marginLeft: "-3rem",
    marginTop: "11rem",
  },
  mobilefront: {
    position: "absolute",
    width: 256,
    height: 300,
    marginLeft: "-3rem",
    marginTop: "11rem",
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
  fields: {
    display: "flex",
    justifyContent: "space-between",
    width: 170,
    marginTop: 50,
    marginBottom: 50,
  },
}));

export default function ProjectsMobile(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.mainheading}>Our Recent Projects</Box>
      <Carousel effect="fade" dataInterval="false">
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={classes.subheading}>qartt</Box>
          <Box className={classes.text}>
            qartt will allow you to focus on your product, making life easier
            and saving you the hassle and expense of managing your own delivery
            team
          </Box>
          <Box className={classes.circle} />
          <img src={qart1} alt="" className={classes.mobilefront} />

          <Box className={classes.fields}>
            <Box>
              <img src={react} alt="" className={classes.flutterimg} />
              <Box className={classes.androidtext}>React Native</Box>
            </Box>
            <Box>
              <img src={flutter} alt="" className={classes.flutterimg} />
              <Box className={classes.fluttertext}>Flutter</Box>
            </Box>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={classes.lzsubheading}>qartt partner</Box>
          <Box className={classes.lztext}>
            By joining us you will make great money on your own schedule. And
            you will be able to see how much you earned after each delivery and
            exactly how your earnings were calculated.Your money is deposited on
            a weekly basis with no delays.
          </Box>
          <Box className={classes.circle} />
          <img src={qart2} alt="" className={classes.mobilefront} />

          <Box className={classes.fields}>
            <Box>
              <img src={react} alt="" className={classes.flutterimg} />
              <Box className={classes.androidtext}>React Native</Box>
            </Box>
            <Box>
              <img src={flutter} alt="" className={classes.flutterimg} />
              <Box className={classes.fluttertext}>Flutter</Box>
            </Box>
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={classes.subheading}>dashboard.earth</Box>
          <Box className={classes.text}>
            Dashboard.Earth connects you to the actions necessary to thrive in
            the face of climate change. We deliver meaningful actions you can
            take towards making your city’s most audacious environmental goals a
            reality.
          </Box>
          <Box className={classes.circle} />
          <img src={dashimg} alt="" className={classes.mobilefront} />

          <Box className={classes.fields}>
            <Box>
              <img src={react} alt="" className={classes.flutterimg} />
              <Box className={classes.androidtext}>React Native</Box>
            </Box>
            <Box>
              <img src={flutter} alt="" className={classes.flutterimg} />
              <Box className={classes.fluttertext}>Flutter</Box>
            </Box>
          </Box>
        </Box>
      </Carousel>
    </div>
  );
}
