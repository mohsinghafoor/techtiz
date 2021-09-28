import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 562,
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
    height: 80,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 30,
    lineHeight: "50px",
    paddingTop: 30,
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
    height: 335,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 20,
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

    "&:hover": {
      background: "#D3D3D3",
    },
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

export default function Blog1() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Box className={classes.line} />
        <Box className={classes.heading}>Flutter vs React Native 2021</Box>
        <Box className={classes.text}>
          Flutter is a open-source software development kit (SDK) developed by
          google . It develop IOS and Android applications using a single
          codebase only. In other words, Flutter app development is worth
          considering because it builds intuitive , fast and responsive
          applications that function on multiple platforms effortlessly . it has
          pre-written codes with customizable and easy to use widgets
        </Box>
        <Button className={classes.btn}>Read More</Button>
      </CardContent>
    </Card>
  );
}
