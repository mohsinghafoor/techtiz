import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Box, Button } from "@material-ui/core";
import dollar from "../../assets/dollar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card1: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: 409,
    height: 462,
    marginTop: 130,
    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
    [theme.breakpoints.up("lg")]: { marginLeft: 50 },
    [theme.breakpoints.only("md")]: { width: 330 },
    [theme.breakpoints.only("sm")]: { width: 500 },
    [theme.breakpoints.down("xs")]: { width: 350 },
  },
  heading1: {
    height: 37,
    display: "flex",
    alignItems: "center",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",
    maxWidth: 415,
    color: "#000000",
  },
  dollarimg: {
    width: 105,
    height: 83,
  },
  line1: {
    width: 300,
    height: 2,
    marginTop: 20,
    background: "#C4C4C4",
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
  },
  circle1: {
    position: "absolute",
    width: 18,
    height: 18,
    marginTop: 132,
    borderRadius: "20rem",
    background: "#81B1C1",
  },
  text1: {
    display: "flex",
    marginTop: 20,
    maxWidth: 297,
    height: 112,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "23px",
    /* or 23px */

    color: "#000000",
  },
  text2: {
    display: "flex",
    maxWidth: 297,
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "22px",
    /* or 22 */

    color: " #000000",
  },
  btn: {
    width: 223,
    height: 50,
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
      <Card className={classes.card1}>
        <img src={dollar} alt="" className={classes.dollarimg} />
        <Box className={classes.heading1}>Fixed Price</Box>
        <Box className={classes.line1} />
        <Box className={classes.circle1} />
        <Box className={classes.text1}>
          Time is money. TechTiz saves your time and energy with its
          collaborative, easy-to-follow onboarding process.
        </Box>
        <Box className={classes.text2}>
          You come to us with an idea, we provide a quick consultation.
        </Box>
        <Button className={classes.btn}>Let’s Begin</Button>
      </Card>
    </Container>
  );
}
