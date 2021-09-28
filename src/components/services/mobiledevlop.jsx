import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import img from "../../assets/front.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  mobile: {
    position: "absolute",
    width: 503.92,
    height: 501.62,
    marginLeft: 100.13,
    [theme.breakpoints.only("md")]: {
      marginLeft: -340,
      marginTop: 100,
      width: 320,
      height: 320,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: -500,
      marginTop: 100,
    },

    // top: 200.93,
    //transform: "rotate(17.78deg)",
  },
  heading: {
    display: "flex",
    maxWidth: 646,
    height: 47,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 28,
    // lineHeight: 47,
    textAlign: "left",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 24,
      width: 517,
      height: 70,
    },
    [theme.breakpoints.up("lg")]: {
      height: 70,
    },
  },
  subheading: {
    display: "flex",
    maxWidth: 613,
    height: 140,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    // line-height: 35,

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      maxWidth: 480,
      height: 145,
    },
  },
  txtbox: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.only("md")]: {
      marginLeft: "-50rem",
      marginTop: "6rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "-72rem",
      marginTop: "8rem",
    },
  },
}));

export default function PictureSide() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.txtbox}>
        <Box className={classes.heading}>
          Join the future of mobility with our expertise
        </Box>
        <Box className={classes.subheading}>
          At techtiz , the best mobile app development company in pakistan, an
          apt pt and efficient cross-functional team is always on a lookout for
          challenges that ask for creating visually stunning & functionally
          effective mobile apps.
        </Box>
      </Box>
      <img src={img} alt="" className={classes.mobile} />
    </Container>
  );
}
