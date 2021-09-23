import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 562,
    height: 531,
    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
    [theme.breakpoints.only("md")]: {
      maxWidth: 380,
      height: 480,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 350,
      height: 480,
    },
  },
  heading: {
    maxWidth: 489,
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",

    color: "#3B3E56",
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 80,
      fontSize: 24,
      lineHeight: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 80,
      fontSize: 20,
      lineHeight: "40px",
    },
  },
  text: {
    maxWidth: 482,
    height: 285,

    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 300,
      fontSize: 18,
      lineHeight: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 330,
      height: 280,
      fontSize: 16,
      lineHeight: "28px",
    },
  },
  btn: {
    width: 191,
    height: 50,
    background: "#7FC6DC",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: 72,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 22,
    /* identical to box height */

    color: "#FFFFFF",
    [theme.breakpoints.only("md")]: {},
  },
  line: {
    position: "absolute",
    width: 10,
    marginLeft: -16,
    marginTop: 11,
    height: 78,
    background: "#FFC107",
  },
}));

export default function Blog2() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Box className={classes.line} />
        <Box className={classes.heading}>
          Join the future of mobility with our expertise
        </Box>
        <Box className={classes.text}>
          Whether you’re a Solo Entrepreneur getting started, or a business with
          a collaborating team. Whether you are a doer with no design skills or
          even a designer with more technical tastebuds. A high quality image
          has the power to ramp up your sales and turn your business around. You
          deserve to have the coolest online .
        </Box>
        <Button className={classes.btn}>Read More</Button>
      </CardContent>
    </Card>
  );
}
