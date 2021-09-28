import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import back from "../../assets/backend.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    position: "absolute",
    width: 371.92,
    height: 360.62,
    marginLeft: 100.13,
    [theme.breakpoints.only("md")]: {
      marginLeft: -320,
      marginTop: 100,
      width: 300,
      height: 320,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: -400,
      marginTop: 100,
    },
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
      height: 50,
    },
    [theme.breakpoints.only("lg")]: {
      height: 100,
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
      maxWidth: 531,
      height: 145,
    },
  },
  txtbox: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "-72rem",
      marginTop: "8rem",
    },
  },
}));

export default function BackEnd() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.txtbox}>
        <Box className={classes.heading}>
          Get Services of Our Experienced Backend Team
        </Box>
        <Box className={classes.subheading}>
          Top class Backend development services to create interative custom web
          and mobile applications to deliver pixel perfect ,stunning user
          experience.
        </Box>
      </Box>
      <img src={back} alt="" className={classes.img} />
    </Container>
  );
}
