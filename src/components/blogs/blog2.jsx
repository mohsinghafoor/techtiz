import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 562,
    height: 538,
    background: "#FFFFFF",
    boxShadow: "2px -2px 21px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: 33,
    [theme.breakpoints.only("md")]: {
      maxWidth: 380,
      height: 535,
    },
    [theme.breakpoints.down("sm")]: {
      height: 510,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 340,
      height: 520,
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
      maxWidth: 330,
      height: 50,
      fontSize: 24,
      lineHeight: "40px",
      paddingTop: 10,
    },
    [theme.breakpoints.down("sm")]: {
      height: 55,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 320,
      height: 55,
      fontSize: 20,
      lineHeight: "40px",
    },
  },
  text: {
    maxWidth: 482,
    height: 330,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "35px",

    color: "#000000",
    [theme.breakpoints.only("md")]: {
      maxWidth: 350,
      height: 327,
      fontSize: 18,
      lineHeight: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 320,
      height: 280,
      fontSize: 16,
      lineHeight: "28px",
    },
  },
  btn: {
    width: 185,
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
    [theme.breakpoints.down("md")]: {
      width: 150,
      fontSize: 17,
      height: 45,
    },
    [theme.breakpoints.down("sm")]: {
      width: 160,
      fontSize: 16,
      height: 50,
    },
    [theme.breakpoints.down("xs")]: {
      width: 130,
      fontSize: 12,
      height: 40,
    },
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
        <Box className={classes.heading}>Future of Cryptocurrency</Box>
        <Box className={classes.text}>
          Today, there are many countries in the world that accept some types of
          crypto as legal trading currencies. And many people daily invest in
          cryptocurrencies believing in the myth that it has a promising future.
          The USA and Canada have very positive opinions towards Bitcoin and try
          to make some regulations about it. Lawmakers in Washington, D.C., and
          around the world are trying to find out how to make cryptocurrency
          safer for investors and less appealing to hackers by creating
          regulations and guidelines.
        </Box>
        {/* <Button className={classes.btn}>Read More</Button> */}
      </CardContent>
    </Card>
  );
}
