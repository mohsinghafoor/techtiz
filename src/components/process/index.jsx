import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import idea from "../../assets/idea.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    display: "flex",
    maxWidth: 616,
    height: 49,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 45,
    lineHeight: "75px",

    color: " #3B3E56",
  },
  subheading: {
    display: "flex",
    maxWidth: 778,
    height: 30,
    marginTop: 30,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    color: " #000000",
  },
  leftcircle: {
    width: 245,
    height: 245,
    marginTop: "-10rem",
    marginLeft: "-90rem",
    borderRadius: "20rem",
    background: "rgba(202, 84, 81, 0.1)",
    transform: "matrix(0.95, 0.31, 0.31, -0.95, 0, 0)",
  },
  img: {
    width: 1135,
    height: 422,
    marginTop: 50,
  },
}));

export default function Process() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.heading}>Our development process</Box>
      <Box className={classes.subheading}>
        We Bring the Startup Approach to innovation in Companies of all Sizes
      </Box>
      <img src={idea} className={classes.img} alt="" />
      <Box className={classes.rightcircle}></Box>
      <Box className={classes.leftcircle}></Box>
    </Container>
  );
}
