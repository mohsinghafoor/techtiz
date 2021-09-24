import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Box, Typography, Button } from "@material-ui/core";
import clock from "../../assets/clock.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContentz: "center",
    flexDirection: "column",
    width: 410,
    height: 462,
    marginTop: 130,
    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
    [theme.breakpoints.up("lg")]: { marginLeft: -50 },
    [theme.breakpoints.only("md")]: { width: 300, height: 400 },
    [theme.breakpoints.down("sm")]: { width: 454, height: 490 },
    [theme.breakpoints.down("xs")]: { width: 350 },
  },
  heading: {
    height: 37,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",

    color: "#000000",
    [theme.breakpoints.down("md")]: {
      maxWidth: 183,
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 203,
      fontSize: 30,
    },
  },
  img: {
    width: 80,
    height: 80,
    marginTop: 30,
  },
  line: {
    width: 300,
    height: 2,
    marginTop: 20,
    background: "#C4C4C4",
    [theme.breakpoints.down("md")]: {
      width: 126,
      height: 1,
    },
    [theme.breakpoints.down("sm")]: {
      width: 260,
    },
  },
  circle: {
    position: "absolute",
    width: 18,
    height: 18,
    marginTop: 162,
    borderRadius: "20rem",
    background: "#81B1C1",
    [theme.breakpoints.down("md")]: {
      width: 10,
      height: 10,
      marginTop: 135,
    },
  },
  text: {
    display: "flex",
    marginTop: 20,
    maxWidth: 297,
    height: 70,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "23px",
    /* or 23px */

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 262,
      fontSize: 14,
      height: 80,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 373,
      fontSize: 18,
      height: 70,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      fontSize: 16,
      height: 70,
    },
  },
  text2: {
    display: "flex",
    maxWidth: 297,
    height: 135,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "22px",
    /* or 22 */

    color: " #000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 252,
      fontSize: 14,
      height: 66,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 373,
      fontSize: 18,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      fontSize: 16,
      height: 170,
    },
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
    [theme.breakpoints.only("md")]: {
      maxWidth: 177,
      fontSize: 18,
      height: 40,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 226,
      fontSize: 18,
      height: 49,
    },
  },
}));

export default function Card2() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <img src={clock} alt="" className={classes.img} />
        <Box className={classes.heading}>Hourly Basis</Box>
        <Box className={classes.line} />
        <Box className={classes.circle} />
        <Box className={classes.text}>
          TechTiz offers a maintenance follow-up after launching your
          application.
        </Box>
        <Box className={classes.text2}>
          This reduces the operational hassle and removes any unprecedented bug
          from the application.
        </Box>
        <Button className={classes.btn}>Let’s Begin</Button>
      </Card>
    </Container>
  );
}
