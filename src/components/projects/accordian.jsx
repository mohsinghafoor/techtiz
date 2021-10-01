import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Accordion, Box, Button } from "@material-ui/core";
import android from "../../assets/android.png";
import flutter from "../../assets/flutter.png";
import qrat from "../../assets/qrat.png";
import mobilefront from "../../assets/mobilefront.png";
import mobileback from "../../assets/mobileback.png";
import qrat2 from "../../assets/qrat2.png";
import mobilefront2 from "../../assets/loanzify.png";
import mobileback2 from "../../assets/mobileback2.png";
import qrat3 from "../../assets/qrat3.png";
import mobilefront3 from "../../assets/mobilefront3.png";
import mobileback3 from "../../assets/mobileback3.png";

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
    width: 156,
    height: 300,
    borderRadius: 28,
    border: "2px solid black",
    marginLeft: "-3rem",
    marginTop: "11rem",
  },
  mobileback: {
    position: "absolute",
    width: 140,
    height: 280,
    borderRadius: 30,
    marginLeft: "3rem",
    marginTop: "11.7rem",
    border: "2px solid black",
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
          <Box className={classes.subheading}>qart</Box>
          <Box className={classes.text}>
            qartt will allow you to focus on your product, making life easier
            and saving you the hassle and expense of managing your own delivery
            team
          </Box>
          <Box className={classes.circle} />
          <img src={mobilefront} alt="" className={classes.mobilefront} />
          <img src={mobileback} alt="" className={classes.mobileback} />
          <Box className={classes.smallcircle} />
          <img src={qrat} alt="" className={classes.logo} />
          <Box className={classes.fields}>
            <Box>
              <img src={android} alt="" className={classes.androidimg} />
              <Box className={classes.androidtext}>Android</Box>
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
          <Box className={classes.lzsubheading}>loanzify</Box>
          <Box className={classes.lztext}>
            Loanzify will do the work for you with a suite of robust mortgage
            calculators, educational and interactive mortgage content, and
            instant access to your loan officer.
          </Box>
          <Box className={classes.lzcircle} />
          <img src={mobilefront2} alt="" className={classes.loanzify} />
          <Box className={classes.fields}>
            <Box>
              <img src={android} alt="" className={classes.androidimg} />
              <Box className={classes.androidtext}>Android</Box>
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
          <img src={mobilefront} alt="" className={classes.mobilefront} />
          <img src={mobileback} alt="" className={classes.mobileback} />
          <Box className={classes.smallcircle} />
          <img src={qrat} alt="" className={classes.logo} />
          <Box className={classes.fields}>
            <Box>
              <img src={android} alt="" className={classes.androidimg} />
              <Box className={classes.androidtext}>Android</Box>
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
