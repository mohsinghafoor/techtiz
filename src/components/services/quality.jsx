import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import quality from "../../assets/quality.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    position: "absolute",
    width: 371.92,
    height: 360.62,
    marginLeft: 170.13,
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
    textAlign: "center",

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
    [theme.breakpoints.up("lg")]: {
      marginLeft: "-72rem",
      marginTop: "10rem",
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "-52rem",
      marginTop: "6rem",
    },
  },
}));

export default function Quality() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.txtbox}>
        <Box className={classes.heading}>
          Satsifaction of Customer is Our First Priority
        </Box>
        <Box className={classes.subheading}>
          We have a team of professional experts having years of experience in
          this field. Our specialized team can provide custom web solutions to
          establish your business online.
        </Box>
      </Box>
      <img src={quality} alt="" className={classes.img} />
    </Container>
  );
}
