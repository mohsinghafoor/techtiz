import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box } from "@material-ui/core";
import idea from "../../assets/idea.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    position: "absolute",
    width: 616,
    height: 49,
    left: 510,
    top: 1772,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "75px",

    color: " #3B3E56",
  },
  subheading: {
    position: "absolute",
    width: 778,
    height: 30,
    left: 400,
    top: 1858,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",

    color: " #000000",
  },
  leftcircle: {
    position: "absolute",
    width: 245,
    height: 245,
    left: -160,
    top: 2200.01,
    borderRadius: "20rem",
    background: "rgba(202, 84, 81, 0.1)",
    transform: "matrix(0.95, 0.31, 0.31, -0.95, 0, 0)",
  },
  //   rightcircle: {
  //     position: "absolute",
  //     width: 242,
  //     height: 242,
  //     // left: 1160,
  //     left: 1200,
  //     top: 1796,
  //     borderRadius: "20rem",
  //     background: "rgba(249, 196, 103, 0.1)",
  //   },
  img: {
    position: "absolute",
    width: 1135,
    height: 422,
    left: 210,

    top: 1921,
  },
}));

export default function Process() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.heading}>
        Our development process
      </Typography>
      <Typography className={classes.subheading}>
        We Bring the Startup Approach to innovation in Companies of all Sizes
      </Typography>
      <Box className={classes.leftcircle}></Box>
      {/* <Box className={classes.rightcircle}></Box> */}
      <img src={idea} className={classes.img} alt="" />
    </Container>
  );
}
