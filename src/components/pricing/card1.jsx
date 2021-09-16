import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Box, Typography, Button } from "@material-ui/core";
import dollar from "../../assets/dollar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card1: {
    position: "absolute",
    width: 409,
    height: 462,
    left: 172,
    top: 4908,

    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
  },
  heading1: {
    position: "absolute",
    width: 183,
    height: 37,
    left: 291,
    top: 5021.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",

    color: "#000000",
  },
  dollarimg: {
    position: "absolute",
    width: 105,
    height: 83,
    left: 324,
    top: 4934,
  },
  line1: {
    position: "absolute",
    width: 268,
    height: 2,
    left: 240,
    top: 5077.21,

    background: "#C4C4C4",
  },
  circle1: {
    position: "absolute",
    width: 18,
    height: 18,
    left: 365,
    top: 5070.21,
    borderRadius: "20rem",
    background: "#81B1C1",
  },
  text1: {
    position: "absolute",
    width: 297,
    height: 102,
    left: 233,
    top: 5114.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "23px",
    /* or 23px */

    color: "#000000",
  },
  text2: {
    position: "absolute",
    width: 307,
    height: 122,
    left: 233,
    top: 5220.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "22px",
    /* or 22 */

    color: " #000000",
  },
  btn: {
    position: "absolute",
    width: 223,
    height: 50,
    left: 251,
    top: 5284.21,

    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: "22px",
    /* identical to box height */

    color: "#FFFFFF",
  },
}));

export default function Card1() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card1}></Card>
      <img src={dollar} alt="" className={classes.dollarimg} />
      <Typography className={classes.heading1}>Fixed Price</Typography>
      <Box className={classes.line1} />
      <Box className={classes.circle1} />
      <Typography className={classes.text1}>
        Time is money. TechTiz saves your time and energy with its
        collaborative, easy-to-follow onboarding process.
      </Typography>
      <Typography className={classes.text2}>
        You come to us with an idea, we provide a quick consultation.
      </Typography>
      <Button className={classes.btn}>Let’s Begin</Button>
    </Container>
  );
}
