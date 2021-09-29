import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import idea from "../../assets/idea.png";
import process from "../../assets/process.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
    [theme.breakpoints.only("sm")]: {
      marginBottom: 400,
    },
  },
  heading: {
    display: "flex",
    maxWidth: 616,
    height: 49,
    justifyContent: "center",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "75px",
    color: " #3B3E56",
    [theme.breakpoints.only("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      width: 399,
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      fontSize: 26,
    },
  },
  subheading: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 778,
    height: 30,
    marginTop: 30,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    color: " #000000",
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      width: 403,
      fontSize: 18,
      lineHeight: "28px",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      fontSize: 16,
      lineHeight: "28px",
      textAlign: "center",
    },
  },
  leftcircle: {
    width: 245,
    height: 245,
    marginTop: "-10rem",
    marginLeft: "-90rem",
    borderRadius: "20rem",
    background: "rgba(202, 84, 81, 0.1)",
    transform: "matrix(0.95, 0.31, 0.31, -0.95, 0, 0)",
    [theme.breakpoints.only("md")]: {
      width: 184.72,
      height: 184.72,
      marginLeft: "-65rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: 161,
      height: 161,
      marginLeft: "-50rem",
      marginTop: "-30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: 131,
      height: 131,
      marginLeft: "-30rem",
      marginTop: "-3rem",
    },
  },
  img: {
    width: 1135,
    height: 422,
    marginTop: 50,
    [theme.breakpoints.only("md")]: {
      width: 888,
      height: 330,
    },
    [theme.breakpoints.down("sm")]: {
      width: 411,
      height: 392,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      height: 350,
    },
  },
}));

export default function Process() {
  const classes = useStyles();
  const theme = useTheme();
  const iPad = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div id="process">
      {iPad ? (
        <Container className={classes.root}>
          <Box className={classes.heading}>Our development process</Box>
          <Box className={classes.subheading}>
            We Bring the Startup Approach to innovation in Companies of all
            Sizes
          </Box>
          <img src={process} className={classes.img} alt="" />
          <Box className={classes.leftcircle}></Box>
        </Container>
      ) : (
        <Container className={classes.root}>
          <Box className={classes.heading}>Our development process</Box>
          <Box className={classes.subheading}>
            We Bring the Startup Approach to innovation in Companies of all
            Sizes
          </Box>
          <img src={idea} className={classes.img} alt="" />
          <Box className={classes.rightcircle}></Box>
          <Box className={classes.leftcircle}></Box>
        </Container>
      )}
    </div>
  );
}
