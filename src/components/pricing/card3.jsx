import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, Box, Typography, Button } from "@material-ui/core";
import clock from "../../assets/clock.png";
import dollar from "../../assets/dollar.png";
import dedicated from "../../assets/dedicated.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    position: "absolute",
    width: 418,
    height: 531,
    left: 551,
    top: 4862,

    background: "#F0FBFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: 33,
  },
  heading: {
    position: "absolute",
    width: 311,
    height: 37,
    left: 616,
    top: 4967.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",

    color: "#000000",
  },
  img: {
    position: "absolute",
    width: 128,
    height: 109,
    left: 700,
    top: 4864,
  },
  line: {
    position: "absolute",
    width: 335,
    height: 2,
    left: 603,
    top: 5026.21,

    background: "#C4C4C4",
  },
  circle: {
    position: "absolute",
    width: 18,
    height: 18,
    left: 755,
    top: 5017.21,
    borderRadius: "20rem",
    background: "#81B1C1",
  },
  text1: {
    position: "absolute",
    width: 297,
    height: 92,
    left: 603,
    top: 5074.21,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "25px",

    color: "#000000",
  },
  text2: {
    position: "absolute",
    width: 355,
    height: 135,
    left: 603,
    top: 5146.21,

    fontFamily: "Axiforma",
    fontStyle: " normal",
    fontWeight: 300,
    fontSize: 16,
    lineHeight: "25px",

    color: "#000000",
  },
  btn: {
    position: "absolute",
    width: 223,
    height: 50,
    left: 649,
    top: 5288.21,

    background: "#FFFFFF",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: "22px",
    /* identical to box height */

    color: "#7FC6DC",
  },
}));

export default function Card3() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}></Card>
      <img src={dedicated} alt="" className={classes.img} />
      <Typography className={classes.heading}>Dedicated Resource</Typography>
      <Box className={classes.line} />
      <Box className={classes.circle} />
      <Typography className={classes.text1}>
        Our packages are flexible, depending upon the services you acquire.
      </Typography>
      <Typography className={classes.text2}>
        We provide a detailed consultation about pricing and delivery schedule
        when you first approach us to ensure we’re on the same page.
      </Typography>
      <Button className={classes.btn}>Let’s Begin</Button>
    </Container>
  );
}
